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

  Hike.create!(
    park_id: 1,
    name: "Batteries to Bluffs Trail",
    city: "San Francisco",
    latitude: 37.80507,
    longitude: -122.4765,
    zipcode: 94129,
    difficulty: "Easy",
    estimated_time: "about 1 hour",
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
    estimated_time: "About 1 hour",
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

  puts "Done!"
end