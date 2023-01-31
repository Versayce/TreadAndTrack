from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError


# def check_name_length(form, field):
#     name = field.data
#     if len(name) <= 5:
#         raise ValidationError("Name must be longer than 5 characters")

class EventForm(FlaskForm):
    owner_id = IntegerField('Owner')
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    zipcode = StringField('Zip', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')
