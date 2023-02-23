from pprint import pprint
from flask import Blueprint, request
from flask_login import current_user

from app.forms.car_form import CarForm
from app.models.car import Car
from app.models.like import Like
from ..models import db


car_routes = Blueprint('cars', __name__)

@car_routes.route('')
def car_home():
    all_cars = Car.query.all()
    return {'cars': [car.to_dict() for car in all_cars]}

@car_routes.route('', methods=['POST'])
def new_car():
    form = CarForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_car = Car()
        form.populate_obj(new_car)

        db.session.add(new_car)
        db.session.commit()
        return new_car.to_dict()

    else:
        return form.errors

@car_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def car_by_id(id):
    car = Car.query.get(id)
    
    if car:
        
        if request.method == 'GET':
            car_dict = car.to_dict()
            car_dict['owner'] = car.owner.to_dict()
            return car_dict
        
        if request.method == 'PUT':
            form = CarForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                car.owner_id = form.data['owner_id']
                car.name = form.data['name']
                car.year = form.data['address']
                car.make = form.data['city']
                car.model = form.data['state']
                car.state = form.data['country']
                car.description = form.data['description']
                db.session.commit()
                return car.to_dict()
            else:
                return form.errors

        if request.method == 'DELETE':
            db.session.delete(car)
            db.session.commit()
            return {'message': 'Car Deleted!'}
    
    return { "error": "Car not found", "errorCode" : 404 }, 404

@car_routes.route('/like/<int:id>', methods=['GET'])
def like_car_by_id(id):
    car = Car.query.get(id)
    like = Like.query.filter_by(user_id=current_user.id, car_id=id).first()
    
    if not car:
        return { "error": "Car not found", "errorCode" : 404 }, 404
    elif like:
        db.session.delete(like)
        db.session.commit()
        return {
            'message': f'Car {id} Unliked',
            'carId' : id
        }
    else:
        like = Like(user_id=current_user.id, car_id=id)
        db.session.add(like)
        db.session.commit()
        return {
            'message': f'Car {id} Liked',
            'carId' : id
        }
    
    # return { "error": "Car not found", "errorCode" : 404 }, 404
