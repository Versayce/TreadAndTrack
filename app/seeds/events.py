from app.models import db, environment, SCHEMA, Event, User


def seed_events():

    main_event = Event(
        owner_id = 1,
        name = "Cars and Coffee Scottsdale",
        address = "20789 N Pima Rd #210 85255",
        city = "Scottsdale",
        state = "AZ",
        country = "United States",
        zipcode = 85255,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "TEST",
    )
    
    test_event2 = Event(
        owner_id = 2,
        name = "TEST2",
        address = "TEST2",
        city = "TEST2",
        state = "TEST2",
        country = "TEST2",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "TEST2",
    )

    all_events = [ main_event, test_event2 ] 
                #   event1, event2, event3, event4, event5, event6, event7, event8, event9, event10 ]
    all_users = User.query.all()
    
    
    #seeding the event_users table
    for i in range(len(all_users)):
        for j in range(len(all_events)):
            all_users[i].events.append(all_events[j])

    for event in all_events:
        db.session.add(event)
    db.session.commit()
    
    print("Event seeding complete.")



def undo_events():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM events")
        
    db.session.commit()
