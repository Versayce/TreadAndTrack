from app.models import db, environment, SCHEMA
from app.models import Like

def seed_likes():
    
    car1_like1 = Like(
        car_id = 1,
        user_id = 1,
    )
    
    car1_like2 = Like(
        car_id = 1,
        user_id = 2,
    )
    
    car2_like1 = Like(
        car_id = 2,
        user_id = 1,
    )
    
    car2_like2 = Like(
        car_id = 2,
        user_id = 2,
    )
    
    car2_like3 = Like(
        car_id = 2,
        user_id = 3,
    )
    
    car2_like4 = Like(
        car_id = 2,
        user_id = 4,
    )

    all_likes = [ 
            car1_like1, 
            car1_like2, 
            car2_like1, 
            car2_like2, 
            car2_like3,
            car2_like4,  
        ]

    for like in all_likes:
        db.session.add(like)
    db.session.commit()
    print('Car Like seeding completed')
        
    
def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")
        
    db.session.commit()
