from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', 
        email='demo@aa.io', 
        password='password', 
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1998-subaru-22b-sti-1998-subaru-1653928866.jpg?crop=1.00xw:0.920xh;0,0&resize=980:*')
    
    demo2 = User(
        username='Demo2', 
        email='demo2@aa.io', 
        password='password', 
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1998-subaru-22b-sti-1998-subaru-1653928866.jpg?crop=1.00xw:0.920xh;0,0&resize=980:*')
    
    alex = User(
        username='Alex', 
        email='acastro@aa.io', 
        password='password', 
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1998-subaru-22b-sti-1998-subaru-1653928866.jpg?crop=1.00xw:0.920xh;0,0&resize=980:*')

    likeBot = User(
        username='LikeBot', 
        email='likebot@aa.io', 
        password='password', 
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1998-subaru-22b-sti-1998-subaru-1653928866.jpg?crop=1.00xw:0.920xh;0,0&resize=980:*')

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(alex)
    db.session.add(likeBot)
    db.session.commit()
    print("User seeding complete.")


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()
