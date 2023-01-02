# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Hike.destroy_all
  Park.destroy_all
  

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('parks')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'DemoUser', 
    fname: 'Demo',
    lname: 'User',
    email: 'demo-user@demo.com', 
    password: 'demopassword'
  )

  Park.create!(
    name: "Presidio of San Francisco",
    county: "San Francisco",
    city: "San Francisco",
    latitude: 37.793110,
    longitude: -122.481440,
    zipcode: 94129,
    state: 'California',
    description: "The Presidio of San Francisco is a former military post that has now transformed into a hub for recreation. It features a variety of trails and lush forests, located right near the Marina and the Golden Gate Bridge. This park also features restaurants, the Walt Disney Museum, businesses, and a bowling alley."
  )
   Park.create!(
    name: "Golden Gate National Recreation Area",
    county: "San Francisco",
    city: "San Francisco",
    latitude: 37.785617,
    longitude:-122.507028,
    zipcode: 94129,
    state: 'California',
    description: "The Golden Gate National Recreation Area is a U.S. National Recreation Area administered by the National Park Service. This magnificent park surrounds the San Francisco Bay area and attracts millions of visitors each year. It is popular for good reason, it provides a variety of trails, ranging from easy to very difficult. It is not one continuous location, but rather spans accross various areas in the San Francisco Bay Area. "
  )

  #Hikes in the Presidio

  Hike.create!(
    park_id: 1,
    name: "Batteries to Bluffs Trail",
    city: "San Francisco",
    latitude: 37.80507,
    longitude: -122.4765,
    zipcode: 94129,
    difficulty: "Easy",
    estimated_time: "1 hour",
    description: "The Batteries to Bluffs Trail is open year-round, and is a popular spot for hiking, biking, and running. Enjoy the lovely ocean views and bring your pups along- this trail is dog-friendly!",
    elevation_gain: 446,
    duration: "2.3 miles",
    route_type: "loop"
)
Hike.create!(
    park_id: 1,
    name: "Presidio Loop Trail",
    city: "San Francisco",
    latitude: 37.78993,
    longitude: -122.45964,
    zipcode: 94129,
    difficulty: "Moderate",
    estimated_time: "2.5 hours",
    description: "This hike is a very popular loop for ocean views, hiking, birding, running, and much more! This is a busy trail, so you will likely encouter other explorers along your journey. This trail is open year-round, and is a highly recommended trail anytime of the year. If you bring your pup, make sure you also bring a leash! Leashes are required on this trail.",
    elevation_gain: 777,
    duration: "6.1 miles",
    route_type: "loop"
)
Hike.create!(
    park_id: 1,
    name: "Ecology Trail and Lovers' Lane Loop",
    city: "San Francisco",
    latitude: 37.79811,
    longitude: -122.45786,
    zipcode: 94129,
    difficulty: "Easy",
    estimated_time: "1 hour",
    description: "This is a very popular San Francisco trail, which means you'll spot lots of people and their pups along the way! This trail is great for hiking, birding, walking, and more! This trail is open year round, and you are welcome to bring your dogs, as long as they are on a leash!",
    elevation_gain: 295,
    duration: "2.0 miles",
    route_type: "loop"
)
Hike.create!(
    park_id: 1,
    name: "Golden Gate Bridge from Baker Beach Trail",
    city: "San Francisco",
    latitude: 37.79314,
    longitude: -122.4831,
    zipcode: 94129,
    difficulty: "Moderate",
    estimated_time: "2.5 hours",
    description: "This is one of the Presidio's longer trails and it crosses the beautiful Golden Gate Bridge, and it is a popular spot for hiking, birding, and mountain biking. This trail is open year-round, but unfortunately you will need to leave your pups at home, dogs aren't allowed on this trail.",
    elevation_gain: 685,
    duration: "5.9 miles",
    route_type: "Out & back"
)
Hike.create!(
    park_id: 1,
    name: "Fort Point - Baker Beach Coast Trail",
    city: "San Francisco",
    latitude: 37.80863,
    longitude: -122.4717,
    zipcode: 94129,
    difficulty: "Easy",
    estimated_time: "2 hours",
    description: "This is a very popular San Francisco trail, which means you'll spot lots of people and their pups along the way! This trail is great for hiking, birding, walking, and more! This trail is open year round, and you are welcome to bring your dogs, as long as they are on a leash!",
    elevation_gain: 793,
    duration: "3.9 miles",
    route_type: "Out & back"
)

#Hikes in the GGNRA
Hike.create!(
    park_id: 2,
    name: "Lands End Trail",
    city: "San Francisco",
    latitude: 37.78059,
    longitude: -122.51162,
    zipcode: 94129,
    difficulty: "Moderate",
    estimated_time: "1.5 hours",
    description: "Explore the famous Lands End Trail near San Francisco, California. This trail is moderately challenging and frequently traveled. Bring your pup along, but don't forget a leash! Dogs are only allowed off-leash in certain areas of the trail.",
    elevation_gain: 538,
    duration: "3.4 miles",
    route_type: "loop"
)

Hike.create!(
    park_id: 2,
    name: "Mori Point Loop Trail",
    city: "Pacifica",
    latitude: 37.61411,
    longitude: -122.48811,
    zipcode: 94044,
    difficulty: "Moderate",
    estimated_time: "1.1 hours",
    description: "The Mori Point Loop is a beautiful trail in Pacifica California. This trail has ocean views, and is frequently visited by people hiking, biking, and walking. Dogs are welcome but they must be on a leash.",
    elevation_gain: 396,
    duration: "2.5 miles",
    route_type: "loop"
)

Hike.create!(
    park_id: 2,
    name: "Tennessee Valley Golden Gate Loop Trail",
    city: "Mill Valley",
    latitude: 37.86048,
    longitude: -122.5362,
    zipcode: 94965,
    difficulty: "Moderate",
    estimated_time: "3 hours",
    description: "The Tennesee Valley Golden Gate Loop trail is located in Mill Valley, California. It is a popular destination for birding, hiking, and mountain biking. The trail is beautiful and open all year-round. You will need to leave your pups if you head out on this trail, dogs are not allowed.",
    elevation_gain: 1292,
    duration: "5.5 miles",
    route_type: "loop"
)
Hike.create!(
    park_id: 2,
    name: "Kirby Cove",
    city: "Sausalito",
    latitude: 37.83239,
    longitude: -122.48214,
    zipcode: 94965,
    difficulty: "Easy",
    estimated_time: "1.5 hours",
    description: "Kirby Cove is a popular route in Sausalito, Caliofnia for hiking, walking, and camping. It is a frequently visited Out & back trail with an ocean view at the end of the trail. You will need to leave pups at home, they are not allowed on this trail.",
    elevation_gain: 561,
    duration: "3 miles",
    route_type: "Out & back"
)
Hike.create!(
    park_id: 2,
    name: "California Coastal Trail: Lands End to Golden Gate Bridge",
    city: "San Francisco",
    latitude: 37.78044,
    longitude: -122.51165,
    zipcode: 94121,
    difficulty: "Moderate",
    estimated_time: "2 hours",
    description: "The California Coastal Trail is a popular route in San Francisco, California for hiking, walking, and running. It is a frequently visited point to point trail with a chance to see the Golden Gate Bridge. Pups are welcome on this trail as long as they are on a leash.",
    elevation_gain: 569,
    duration: "4.4 miles",
    route_type: "Point to point"
)

  puts "Done!"
end