from app.models import db, environment, SCHEMA, EventImage

def seed_event_images():
    
    event1_image1 = EventImage(
        event_id = 1,
        name = "First Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"
    )
    
    event1_image2 = EventImage(
        event_id = 1,
        name = "First Event Image2",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195209/1615165280d7e7634902381174LIPMAN_723833.jpeg"
    )
    
    event2_image1 = EventImage(
        event_id = 2,
        name = "Second Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195118/1998_subaru_22b_16167694959f98764da1998_subaru_22b_161676949466e7dff9f98764da87a09876-6a1c-4a96-985b-d054cf10e649-BMQ4Dk-scaled.jpeg"
    )
        
    event3_image1 = EventImage(
        event_id = 3,
        name = "Third Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195159/16151652649d5d7e7634902LIPMAN_723808.jpeg"
    )
    
    event4_image1 = EventImage(
        event_id = 4,
        name = "Fourth Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195113/161516528338117473eb6LIPMAN_723857.jpeg"
    )
    
    event5_image1 = EventImage(
        event_id = 5,
        name = "Fifth Event Image1",
        image_url = "https://i.ytimg.com/vi/0SQKWP-FDTE/maxresdefault.jpg"
    )
    
    event6_image1 = EventImage(
        event_id = 6,
        name = "Fifth Event Image1",
        image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2010/11/FC-RX7-gold-slammed-title.jpg?fit=1200%2C560&ssl=1"
    )
    
    event7_image1 = EventImage(
        event_id = 7,
        name = "Fifth Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195213/16151652407e763490238117473LIPMAN_723765.jpeg"
    )
    
    event8_image1 = EventImage(
        event_id = 8,
        name = "Fifth Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195213/16151652407e763490238117473LIPMAN_723765.jpeg"
    )
    
    event9_image1 = EventImage(
        event_id = 9,
        name = "Fifth Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195213/16151652407e763490238117473LIPMAN_723765.jpeg"
    )
    
    event10_image1 = EventImage(
        event_id = 10,
        name = "Fifth Event Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195213/16151652407e763490238117473LIPMAN_723765.jpeg"
    )

    all_images = [ 
        event1_image1, 
        event1_image2, 
        event2_image1, 
        event3_image1, 
        event4_image1, 
        event5_image1, 
        event6_image1, 
        event7_image1, 
        event8_image1,
        event9_image1,
        event10_image1,
    ]
    # Seeding using all_images list
    for image in all_images:
        db.session.add(image)
    db.session.commit()
    print('EventImage seeding completed')
    
    
def undo_event_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM events")
        
    db.session.commit()
