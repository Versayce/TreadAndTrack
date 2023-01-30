from flask import Blueprint, request
from app.forms.event_form import EventForm
from app.forms.event_image_form import EventImageForm
from app.forms.event_message_form import EventMessageForm
from app.models.event_message import EventMessage
from app.models.event_image import EventImage
from ..models import db, Event, EventMessage

message_routes = Blueprint('messages', __name__)


@message_routes.route('/new', methods=['POST'])
def new_message():
    form = EventMessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_message = EventMessage()
        form.populate_obj(new_message)

        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict()

    else:
        return form.errors


@message_routes.route('/<int:id>', methods=['GET', 'DELETE', 'PUT'])
def message_by_id(id):
    message = EventMessage.query.get(id)

    if message:

        if request.method == 'GET':
            message_dict = message.to_dict()
            message_dict['author'] = message.user.to_dict_safe()
            return message_dict

        if request.method == 'DELETE':
            db.session.delete(message)
            db.session.commit()
            return {'message': 'Message Deleted!'}

        if request.method == 'PUT':
            form = EventMessageForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                message.body = form.data['body']
                db.session.commit()
                return message.to_dict()

            return form.errors

    return { "error": "Message not found", "errorCode" : 404 }, 404
