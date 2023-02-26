from app.models import db, environment, SCHEMA, User, Car



def seed_cars():
    
    car_template = Car(
        owner_id = 2,
        name = "22B Impreza",
        preview_image = "https://www.topcarrating.com/subaru/1998-subaru-impreza-22b-sti.jpg",
        year = 1998,
        make = "Subaru",
        model = "22B",
        state = "Arizona",
        description = "Testing Description 1",
    )
    
    car_template2 = Car(
        owner_id = 1,
        name = "Some Civic",
        preview_image = "https://www.motortrend.com/uploads/f/48674023.jpg?fit=around%7C1000:625",
        year = 1998,
        make = "Honda",
        model = "Civic Type R",
        state = "California",
        description = "Testing Description 2",
    )


    all_cars = [ car_template, car_template2 ] 
               
    # all_users = User.query.all()
    
    
    #seeding the event_users table
    # for i in range(len(all_users)):
    #     for j in range(len(all_cars)):
    #         all_users[i].cars.append(all_cars[j])

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
