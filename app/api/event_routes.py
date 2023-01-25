from flask import Blueprint, request

from app.forms.event_form import EventForm
from ..models import db, Event


event_routes = Blueprint('events', __name__)


@event_routes.route('')
def event_home():
    all_events = Event.query.all()
    return {'events': [event.to_dict() for event in all_events]}


@event_routes.route('/new', methods=['POST'])
def new_server():
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


@event_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE']) #TODO - test PUT and DELETE routes
def event_by_id(id):
    event = Event.query.get(id)
    
    if event:
        
        if request.method == 'GET':
            event_dict = event.to_dict()
            event_dict['users'] = [user.to_dict() for user in event.users]
            # event_dict['owner'] = event.owner.to_dict()
            return event_dict
        
        if request.method == 'PUT':
            form = EventForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                event.owner_id = form.data['owner_id']
                event.name = form.data['name']
                event.address = form.data['address']
                event.city = form.data['city']
                event.state = form.data['state']
                event.country = form.data['country']
                event.description = form.data['description']
                return event.to_dict()
            else:
                return form.errors
            
        if request.method == 'DELETE':
            db.session.delete(event)
            db.session.commit()
            return {'message': 'Event Deleted!'}
    
    return { "error": "Server not found", "errorCode" : 404 }, 404
