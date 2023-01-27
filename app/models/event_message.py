from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class EventMessage(db.Model):
    __tablename__ = 'event_messages'
    
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(255))
    event_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('events.id')), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    
    # Author can have many messages:
    author = db.relationship('User', back_populates='messages')
    # Event can have many messages:
    event = db.relationship('Event', back_populates='messages')
    
    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'eventId': self.event_id,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'authorId': self.author_id,
            'author': self.author.to_dict()
        }
