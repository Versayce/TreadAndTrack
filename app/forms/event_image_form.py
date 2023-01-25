from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms.fields import StringField, SubmitField, IntegerField
from wtforms.fields.html5 import URLField
from wtforms.validators import DataRequired, URL


class EventImageForm(FlaskForm):
    event_id = IntegerField('Event')
    name = StringField('Name')
    url = URLField("ImageUrl")
