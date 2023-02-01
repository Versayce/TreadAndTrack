from .db import db, environment, SCHEMA, add_prefix_for_prod
from .event import event_users
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(500))
    
    car = db.relationship('Car', back_populates='owner')
    event = db.relationship('Event', back_populates='owner')
    events = db.relationship('Event', secondary=event_users, back_populates='users')
    messages = db.relationship('EventMessage', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'userImage': self.image,
            # 'events': [event.to_dict() for event in self.events],
            # 'messages': [message.to_dict() for message in self.messages]
        }
        
    def to_dict_safe(self):
        return {
            'id': self.id,
            'username': self.username,
            'profileImage': self.image
        }
