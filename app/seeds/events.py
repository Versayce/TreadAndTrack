from app.models import db, environment, SCHEMA, Event, User


def seed_events():

    event_template = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template2 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195209/1615165280d7e7634902381174LIPMAN_723833.jpeg",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
        
    event_template3 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195118/1998_subaru_22b_16167694959f98764da1998_subaru_22b_161676949466e7dff9f98764da87a09876-6a1c-4a96-985b-d054cf10e649-BMQ4Dk-scaled.jpeg",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    main_event = Event(
        owner_id = 1,
        name = "Cars and Coffee Scottsdale",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195159/16151652649d5d7e7634902LIPMAN_723808.jpeg",
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
    
    main_event2 = Event(
        owner_id = 2,
        name = "Pavillions Car Show",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195113/161516528338117473eb6LIPMAN_723857.jpeg",
        address = "9120 E. Talking Stick Way",
        city = "Scottsdale",
        state = "AZ",
        country = "United States",
        zipcode = 85250,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template4 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i.ytimg.com/vi/0SQKWP-FDTE/maxresdefault.jpg",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template5 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2010/11/FC-RX7-gold-slammed-title.jpg?fit=1200%2C560&ssl=1",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template6 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2013/11/stanceworks-volvo-142-slammed.jpg?ssl=1",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template7 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://jdmsmoke.com/wp-content/uploads/2023/01/82890334_3339085816165701_2668071106325250048_o-768x512.jpg",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    
    event_template8 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2017/05/josh_2002_1.jpg?w=1200&ssl=1",
        address = "Address",
        city = "City",
        state = "State",
        country = "Country",
        zipcode = 80000,
        # lat = "Latitude",
        # lng = "Longitude",
        description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " 
                        + "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " 
                        + "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " 
                        + "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
                        + "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " 
                        + "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    )
    

    all_events = [ main_event, main_event2, event_template, event_template2, event_template3, event_template4, event_template5, event_template6, event_template7, event_template8 ] 
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
