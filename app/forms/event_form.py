from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class EventForm(FlaskForm):
    owner_id = IntegerField('Owner')
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address')
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')
