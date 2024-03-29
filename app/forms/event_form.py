from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError


class EventForm(FlaskForm):
    owner_id = IntegerField('Owner')
    banner_image_url = StringField('Banner')
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    # TODO edit below for google api integration: 
    lat = FloatField('Latitude', validators=[DataRequired()])
    lng = FloatField('Longitude', validators=[DataRequired()])
    # city = StringField('City', validators=[DataRequired()])
    # state = StringField('State', validators=[DataRequired()])
    # zipcode = StringField('Zip', validators=[DataRequired()])
    # country = StringField('Country', validators=[DataRequired()])
    # TODO END EDIT 
    description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')
