from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class EventMessageForm(FlaskForm):
    body = StringField('Message', validators=[DataRequired()])
    event_id = IntegerField('Event Id')
    author_id = IntegerField('Author Id')
    submit = SubmitField('Submit')
