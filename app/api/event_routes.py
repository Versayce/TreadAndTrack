import os
import boto3
import botocore
import mimetypes
from flask import Blueprint, jsonify, request
from app.forms.event_form import EventForm
from app.forms.event_image_form import EventImageForm
from app.forms.event_message_form import EventMessageForm
from app.models.event_message import EventMessage
from app.models.event_image import EventImage
from ..models import db, Event, EventMessage

event_routes = Blueprint('events', __name__)
# Defining AWS bucket for use in routes
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_BUCKET_NAME = os.environ.get('AWS_BUCKET_NAME')
AWS_SERVER_LOCATION = os.environ.get('AWS_SERVER_LOCATION')
BANNER_OBJECT_KEY = os.environ.get('BANNER_OBJECT_KEY')
PHOTOS_OBJECT_KEY = os.environ.get('PHOTOS_OBJECT_KEY')
BASE_FOLDER = 'event_images'
BANNERS_SUBFOLDER = 'banners'
PHOTOS_SUBFOLDER = 'photos'
ALLOWED_IMAGE_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

s3 = boto3.client(
    's3', 
    aws_access_key_id=AWS_ACCESS_KEY_ID, 
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)



@event_routes.route('')
def all_events():
    all_events = Event.query.all()
    return {'events': [event.to_dict() for event in all_events]}


@event_routes.route('banner_upload', methods=['POST'])

def upload_banner():
    def check_if_image(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_IMAGE_EXTENSIONS
    #Todo add logic for AWS services
    if 'file' not in request.files:
        return {'error': 'No file part in the request.', 'errorCode': 400}, 400
    
    file = request.files['file']
    content_type = mimetypes.guess_type(file.filename)[0] or 'application/octet-stream'
    
    if file.name == '':
        return { 'error': 'No file selected.', 'errorCode': 400}, 400
    
    if not check_if_image(file.filename):
        return {'error': 'Invalid file format', 'errorCode': 400}, 400
    
    try:
        file_key = os.path.join(BASE_FOLDER, BANNERS_SUBFOLDER, file.filename)
        image_url = f'https://s3.{AWS_SERVER_LOCATION}.amazonaws.com/{AWS_BUCKET_NAME}/{BASE_FOLDER}/{BANNERS_SUBFOLDER}/{file.filename.replace(" ", "+")}'
        s3.upload_fileobj(
            file, 
            AWS_BUCKET_NAME, 
            file_key,
            ExtraArgs={
                'ContentType': content_type,
            }
        )
        
        return {
            'message': f'File: {file.filename} uploaded succesfully',
            'URL': image_url
            }, 200
    
    except botocore.exceptions.ClientError as e:
        return { 'error': str(e), 'errorCode': 500}, 500
   
#TODO edit for pulling url and adding to DB for use 
# def get_image_url(AWS_BUCKET_NAME, BASE_FOLDER, PHOTOS_SUBFOLDER, file):
#     image_url = f'https://s3.{AWS_SERVER_LOCATION}.amazonaws.com/{AWS_BUCKET_NAME}/{BASE_FOLDER}/{BANNERS_SUBFOLDER}/{file.filename.replace(" ", "+")}'
#     return {'S3 URL': url}
    

@event_routes.route('', methods=['POST'])
def create_new_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_event = Event()
        form.populate_obj(new_event)

        db.session.add(new_event)
        db.session.commit()
        return new_event.to_dict()

    else:
        return form.errors

# #For Testing amazon s3 bucket connection
# @event_routes.route('/list_buckets', methods=['GET'])
# def list_buckets():
#     response = s3.list_buckets()
#     bucket_names = [bucket['Name'] for bucket in response['Buckets']]
#     return {'Buckets': bucket_names}


@event_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE']) 
def get_event_by_id(id):
    event = Event.query.get(id)
    
    if event:
        
        if request.method == 'GET':
            event_dict = event.to_dict()
            event_dict['users'] = [user.to_dict() for user in event.users]
            event_dict['owner'] = event.owner.to_dict()
            return event_dict
        
        if request.method == 'PUT':
            form = EventForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                event.owner_id = form.data['owner_id']
                event.banner_image_url = form.data['banner_image_url']
                event.name = form.data['name']
                event.address = form.data['address']
                event.lat = form.data['lat']
                event.lng = form.data['lng']
                event.description = form.data['description']
                db.session.commit()
                return event.to_dict()
            else:
                return form.errors
            
        if request.method == 'DELETE':
            db.session.delete(event)
            db.session.commit()
            return {'message': 'Event Deleted!'}
    
    return { 'error': 'Event not found', 'errorCode' : 404 }, 404


@event_routes.route('/images', methods=['POST'])
def add_event_image():
    form = EventImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        new_image = EventImage()
        form.populate_obj(new_image)
        
        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict()
    
    else:
        return form.errors


@event_routes.route('/<int:id>/messages')
def get_event_messages(id): 
    event = Event.query.get(id)
    if event:
        event_messages = EventMessage.query.filter(EventMessage.event_id == id).all()
        event_message_list = {'messages' : [message.to_dict() for message in event_messages]}
        return event_message_list
    else:
        return { 'error': 'Event not found', 'errorCode': 404}, 404
        

# @event_routes.route('/users')
# def get_event_users(id):
#     event = Event.query.get(id)
#     if event: 
#         event_users = EventUser.query.filter(EventUser.event_id === id).all()
#         event_user_list = {'users' : [user.to_dict() for user in event_users]}
#         return event_user_list
#     else: 
#         return { 'error': 'Event not found', 'errorCode': 404}, 404
    
