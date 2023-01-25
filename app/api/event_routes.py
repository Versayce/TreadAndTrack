from flask import Blueprint, request

from app.forms.event_form import EventForm
from ..models import db, Event


event_routes = Blueprint('events', __name__)


@event_routes.route('')
def event_home():
    all_events = Event.query.all()
    # print('TESTING SHIT', {'servers': [server.to_dict() for server in all_servers]})
    return {'events': [event.to_dict() for event in all_events]}
