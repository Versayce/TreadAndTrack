from app.models import db, environment, SCHEMA, Event, User

#TODO adjust event seeding for lat/lng components 
def seed_events():

    event_template = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template2 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195209/1615165280d7e7634902381174LIPMAN_723833.jpeg",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
        
    event_template3 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195118/1998_subaru_22b_16167694959f98764da1998_subaru_22b_161676949466e7dff9f98764da87a09876-6a1c-4a96-985b-d054cf10e649-BMQ4Dk-scaled.jpeg",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    main_event = Event(
        owner_id = 1,
        name = "Cars and Coffee Scottsdale",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195159/16151652649d5d7e7634902LIPMAN_723808.jpeg",
        address = "20789 N Pima Rd #210",
        lat = 33.6746,
        lng = -111.8888,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    main_event2 = Event(
        owner_id = 2,
        name = "Pavillions Car Show",
        banner_image_url = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195113/161516528338117473eb6LIPMAN_723857.jpeg",
        address = "9120 E. Talking Stick Way",
        lat = 33.5385,
        lng = -111.8798,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template4 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i.ytimg.com/vi/0SQKWP-FDTE/maxresdefault.jpg",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template5 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2010/11/FC-RX7-gold-slammed-title.jpg?fit=1200%2C560&ssl=1",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template6 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2013/11/stanceworks-volvo-142-slammed.jpg?ssl=1",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template7 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://jdmsmoke.com/wp-content/uploads/2023/01/82890334_3339085816165701_2668071106325250048_o-768x512.jpg",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
    )
    
    event_template8 = Event(
        owner_id = 2,
        name = "Event Header",
        banner_image_url = "https://i0.wp.com/stanceworks.com/wp-content/uploads/2017/05/josh_2002_1.jpg?w=1200&ssl=1",
        address = "Address",
        lat = 33.4949,
        lng = -111.9217,
        description = '<h1>Main Heading</h1>'
                    + '<p>&nbsp;</p>'
                    + '<h3>Information About Event:</h3>'
                    + '<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
                    + '<p>&nbsp;</p>'
                    + '<hr>'
                    + '<h4>&nbsp;</h4>'
                    + '<p>&nbsp;</p>'
                    + '<h4>Additional Details:</h4>'
                    + '<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>'
                    + '<p>&nbsp;</p>'
                    + '<ul>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '<li>List Item</li>'
                    + '</ul>',
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
