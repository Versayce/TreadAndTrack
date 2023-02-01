from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class CarImage(db.Model):
    __tablename__ = "car_images"
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    image_url = db.Column(db.String(1000))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow) 
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow) 
    
    car_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("cars.id")), nullable=False)
    
    car = db.relationship("Car", back_populates="images")
    

    def to_dict(self):
        return {
            "id": self.id,
            "carId": self.event_id,
            "name": self.name,
            "imageUrl": self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
