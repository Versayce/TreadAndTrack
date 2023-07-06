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
    __tablename__ = 'events'
    
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(40), nullable=False)
    lat = db.Column(db.Integer, nullable=False)
    lng = db.Column(db.Integer, nullable=False)
    #TODO delete unnecessary rows with old address components 
    # city = db.Column(db.String(40), nullable=False)
    # state = db.Column(db.String(40), nullable=False)
    # zipcode = db.Column(db.String(40), nullable=False)
    # country = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(755), nullable=False) 
    banner_image_url = db.Column(db.String(755), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow) 
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow) 
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    # Evant can have one owner:
    owner = db.relationship('User', back_populates='event')
    # Event can have many users:
    users = db.relationship('User', secondary=event_users, back_populates='events')
    # Event can have many images:
    images = db.relationship('EventImage', back_populates='event', cascade='all, delete')  #, cascade="all, delete"
    # Event can have many messages:
    messages = db.relationship('EventMessage', back_populates='event', cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "bannerImage": self.banner_image_url,
            "name": self.name,
            "address": self.address,
            "lat": self.lat,
            "lng": self.lng,
            #TODO old address components to be removed: 
            # "city": self.city,
            # "state": self.state,
            # "zipcode": self.zipcode,
            # "country": self.country,
            "description": self.description,
            "images": [image.to_dict() for image in self.images],
            "messages": [message.to_dict() for message in self.messages],
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
