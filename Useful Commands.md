
<!-- For seeding db (assuming only one migration file) -->
flask seed undo && flask db downgrade && flask db upgrade && flask seed all && clear
