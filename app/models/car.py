from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class Car(db.Model):
    __tablename__ = "cars"
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    year = db.Column(db.String(40), nullable=False)
    make = db.Column(db.String(40), nullable=False)
    model = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(200), nullable=False) 
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow) 
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow) 
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    # Car can have one owner:
    owner = db.relationship("User", back_populates="car")
    # Car can have many images:
    images = db.relationship("CarImage", back_populates="car", cascade="all, delete")  #, cascade="all, delete"

    

    def to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "name": self.name,
            "year": self.year,
            "make": self.make,
            "model": self.model,
            "state": self.state,
            "description": self.description,
            "owner": self.owner.to_dict(),
            "images": [image.to_dict() for image in self.images],
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
