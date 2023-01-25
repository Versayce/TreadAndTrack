from app.models import db, environment, SCHEMA, Event, User


def seed_events():

    test_event = Event(
        owner_id = 1,
        name = "TEST",
        address = "TEST",
        city = "TEST",
        state = "TEST",
        country = "TEST",
        # lat = "Latitude",
        # lng = "Longitude",
        description = "TEST",
    )

    # all_events = [ event1, event2, event3, event4, event5, event6, event7, event8, event9, event10 ]
    all_users = User.query.all()
    
    db.session.add(test_event)
    db.session.commit()
    print("Event seeding complete.")

def undo_events():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM events")
        
    db.session.commit()
