

<!-- for starting the DB server -->
<!-- Make sure to be in app directory in terminal -->
pipenv shell
flask run

<!-- For seeding db (assuming only one migration file) -->
flask seed undo && flask db downgrade && flask db upgrade && flask seed all && clear

<!-- Starting the Frontend -->
<!-- Terminal must be in react-app directory -->
npm start
