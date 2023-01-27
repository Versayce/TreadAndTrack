from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class EventMessage(db.Model):
    __tablename__ = 'event_messages'
    
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    event_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('events.id')), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    
    # Event can have many messages:
    event = db.relationship('Event', back_populates='event_messages')
    # Author can have many messages:
    author = db.relationship('User', back_populates='messages')
