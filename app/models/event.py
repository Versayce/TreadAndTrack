from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


event_users = db.Table(
    'event_users',
    db.Model.metadata,
    db.Column('event_id', db.Integer, db.ForeignKey(add_prefix_for_prod('events.id')), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True))

if environment == 'production':
    event_users.schema = SCHEMA


class Event(db.Model):
    __tablename__ = "events"
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    
    name = db.Column(db.String(40), nullable=False, unique=True)
    address = db.Column(db.String(40), nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(40), nullable=False)
    country = db.Column(db.String(40), nullable=False)
    # lat = db.Column() #TODO Implement at a later date
    # lng = db.Column() 
    description = db.Column(db.String(755), nullable=False) 
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow) 
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow) 
    
    owner = db.relationship("User", back_populates='events')
    users = db.relationship("User", secondary=event_users, back_populates="events")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "lat": self.lat,
            "lng": self.lng,
            "description": self.description,
            "users": [user.to_dict() for user in self.users],
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
