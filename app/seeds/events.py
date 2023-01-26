from app.models import db, environment, SCHEMA, Event, User


def seed_events():

    main_event = Event(
        owner_id = 1,
        name = "Cars and Coffee Scottsdale",
        address = "20789 N Pima Rd #210",
        city = "Scottsdale",
        state = "AZ",
        country = "United States",
        zipcode = 85255,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
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
