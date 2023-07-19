from .db import db, environment, SCHEMA, add_prefix_for_prod

class EventMessage(db.Model):
    __tablename__ = 'event_users'
    
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    image = db.Column(db.String(500))
    # Event can have many users:
    event = db.relationship('Event', back_populates='users')
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'image': self.image,
        }
