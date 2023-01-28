from app.models import db, environment, SCHEMA, EventMessage


def seed_event_messages():
    message1 = EventMessage(
        body='Message 1 test', event_id=1, author_id=2
    )
    message2 = EventMessage(
        body='Message 2 test', event_id=1, author_id=3
    )
    message3 =EventMessage(
        body='Message 3 test', event_id=1, author_id=2
    )
    message4 = EventMessage(
        body='Message 4 test', event_id=1, author_id=3
    )
    message5 = EventMessage(
        body='Message 5 test', event_id=1, author_id=2,
    )
    message6 = EventMessage(
        body='Message 6 test', event_id=2, author_id=1,
    )
    message7 = EventMessage(
        body='Message 7 test', event_id=2, author_id=1,
    )
    message8 = EventMessage(
        body='Message 8 test', event_id=3, author_id=3,
    )
    message9 = EventMessage(
        body='Message 9 test', event_id=3, author_id=1,
    )
    message10 = EventMessage(
        body='Message 10 test', event_id=3, author_id=3,
    )
    message11 = EventMessage(
        body='Message 11 test', event_id=3, author_id=1,
    )
    
    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)
    db.session.add(message7)
    db.session.add(message8)
    db.session.add(message9)
    db.session.add(message10)
    db.session.add(message11)
    db.session.commit()
    print('Event Messages Seeded')
    
def undo_event_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.event_messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM event_messages")
        
    db.session.commit()
    
