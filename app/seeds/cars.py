from app.models import db, environment, SCHEMA, Event, User, Car



def seed_cars():
    
    car_template = Event(
        owner_id = 2,
        name = "22B Impreza",
        year = 1998,
        make = "Subaru",
        model = "22B",
        state = "Arizona",
        description = "Testing Description 1",
    )
    
    car_template2 = Event(
        owner_id = 1,
        name = "Some Civic",
        year = 1998,
        make = "Honda",
        model = "Civic Type R",
        state = "California",
        description = "Testing Description 2",
    )


    all_cars = [ car_template, car_template2 ] 
                #   event1, event2, event3, event4, event5, event6, event7, event8, event9, event10 ]
    all_users = User.query.all()
    
    
    #seeding the event_users table
    for i in range(len(all_users)):
        for j in range(len(all_cars)):
            all_users[i].events.append(all_cars[j])

    for car in all_cars:
        db.session.add(car)
    db.session.commit()
    
    print("Car seeding complete.")



def undo_cars():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cars RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM cars")
        
    db.session.commit()
