from app.models import db, environment, SCHEMA, CarImage

def seed_car_images():
    
    car1_image1 = CarImage(
        car_id = 1,
        name = "First Car Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"
    )
    
    car1_image2 = CarImage(
        car_id = 1,
        name = "First Car Image2",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195209/1615165280d7e7634902381174LIPMAN_723833.jpeg"
    )
    
    car1_image3 = CarImage(
        car_id = 1,
        name = "Second Car Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195118/1998_subaru_22b_16167694959f98764da1998_subaru_22b_161676949466e7dff9f98764da87a09876-6a1c-4a96-985b-d054cf10e649-BMQ4Dk-scaled.jpeg"
    )
        
    car2_image1 = CarImage(
        car_id = 2,
        name = "Third Car Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195159/16151652649d5d7e7634902LIPMAN_723808.jpeg"
    )
    
    car2_image2 = CarImage(
        car_id = 2,
        name = "Fourth Car Image1",
        image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195113/161516528338117473eb6LIPMAN_723857.jpeg"
    )
    
    car2_image3 = CarImage(
        car_id = 2,
        name = "Fifth Car Image1",
        image_url = "https://i.ytimg.com/vi/0SQKWP-FDTE/maxresdefault.jpg"
    )
    
    car2_image4 = CarImage(
        car_id = 2,
        name = "Fifth Car Image1",
        image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2010/11/FC-RX7-gold-slammed-title.jpg?fit=1200%2C560&ssl=1"
    )
    

    all_images = [ 
        car1_image1, 
        car1_image2, 
        car1_image3, 
        car2_image1, 
        car2_image2, 
        car2_image3, 
        car2_image4, 
    ]
    # Seeding using all_images list
    for image in all_images:
        db.session.add(image)
    db.session.commit()
    print('CarImage seeding completed')
    
    
def undo_car_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cars RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM cars")
        
    db.session.commit()
