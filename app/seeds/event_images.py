from app.models import db, environment, SCHEMA, EventImage

def seed_event_images():
    
    event1_image1 = EventImage(
        event_id = 1,
        name = "First Event Image",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"
    )
    
    event2_image2 = EventImage(
        event_id = 1,
        name = "Second Event Image",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195209/1615165280d7e7634902381174LIPMAN_723833.jpeg"
    )

    all_images = [ event1_image1, event2_image2 ]
    # Seeding using all_images list
    for image in all_images:
        db.session.add(image)
    db.session.commit()
    print('EventImages seeding completed')
    
    
def undo_event_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM events")
        
    db.session.commit()
