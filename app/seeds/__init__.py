from flask.cli import AppGroup

from .users import seed_users, undo_users
from .events import seed_events, undo_events
from .cars import seed_cars, undo_cars
from .car_likes import seed_likes, undo_likes
from .car_images import seed_car_images, undo_car_images
from .event_images import seed_event_images, undo_event_images
from .event_messages import seed_event_messages, undo_event_messages

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_events()
        undo_event_images()
        undo_event_messages()
        undo_cars()
        undo_car_images()
        undo_likes()
    seed_users()
    seed_events()
    seed_event_images()
    seed_event_messages()
    seed_cars()
    seed_car_images()
    seed_likes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_events()
    undo_event_images()
    undo_cars()
    undo_car_images()
    undo_likes()
    # Add other undo functions here
