from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class Like(db.Model):
    __tablename__ = 'likes'
    
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow) 
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    user = db.relationship('User', back_populates='likes')
    car_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cars.id')), nullable=False)
    car = db.relationship('Car', back_populates='likes')


def to_dict(self):
    return {
        "id": self.id,
        "userId": self.user_id,
        "carId": self.car_id,
        "createdAt": self.created_at,
        "user": self.user.to_dict_safe(),
        "car": self.car.to_dict(),
    }
