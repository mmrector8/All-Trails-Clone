# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

#ApplicationRecord.transaction do 
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

  # 1
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
  #2
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

  #3
  Park.create!(
    name: "Fort Mason",
    county: "San Francisco",
    city: "San Francisco",
    latitude: 37.804591,
    longitude: -122.426311,
    zipcode: 94109,
    state: "California",
    description: "Fort Mason was established as a defense site in San Francisco during the Civil War. Nowadays, it is a frequented park with two trails, restaurants, and activities for the whole family."
  )

  #4
   Park.create!(
    name: "Marin Headlands",
    county: "Marin",
    city: "Sausalito",
    latitude: 37.826449,
    longitude: -122.499749,
    zipcode: 94965,
    state: "California",
    description: "The Marin Headlands is a beautiful park with sweeping views of the Golden Gate bridge and the Pacific Ocean. This park is known for its dramatic cliffs, unique geology, and foggy weather."
  )

  #Hikes in the Presidio

  batteries_to_bluffs = Hike.create!(
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

batteries_to_bluffs.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/batteries_to_bluffs.png'), filename: 'batteries_to_bluffs.png')


plooptrail = Hike.create!(
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

plooptrail.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/presidio_loop_trail_small.png'), filename: 'presidio_loop_trail_small.png')

ecology_trail = Hike.create!(
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
ecology_trail.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/ecology-trail.png'), filename: 'ecology-trail.png')

# Hike.create!(
#     park_id: 1,
#     name: "Golden Gate Bridge from Baker Beach Trail",
#     city: "San Francisco",
#     latitude: 37.79314,
#     longitude: -122.4831,
#     zipcode: 94129,
#     difficulty: "Moderate",
#     estimated_time: "2.5 hours",
#     description: "This is one of the Presidio's longer trails and it crosses the beautiful Golden Gate Bridge, and it is a popular spot for hiking, birding, and mountain biking. This trail is open year-round, but unfortunately you will need to leave your pups at home, dogs aren't allowed on this trail.",
#     elevation_gain: 685,
#     duration: "5.9 miles",
#     route_type: "Out & back"
# )
# Hike.create!(
#     park_id: 1,
#     name: "Fort Point - Baker Beach Coast Trail",
#     city: "San Francisco",
#     latitude: 37.80863,
#     longitude: -122.4717,
#     zipcode: 94129,
#     difficulty: "Easy",
#     estimated_time: "2 hours",
#     description: "This is a very popular San Francisco trail, which means you'll spot lots of people and their pups along the way! This trail is great for hiking, birding, walking, and more! This trail is open year round, and you are welcome to bring your dogs, as long as they are on a leash!",
#     elevation_gain: 793,
#     duration: "3.9 miles",
#     route_type: "Out & back"
# )

#Hikes in the GGNRA
lands_end = Hike.create!(
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

lands_end.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/lands-end.png'), filename: 'lands-end.png')

mori_point = Hike.create!(
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
mori_point.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/moori-point.png'), filename: 'moori-point.png')

# Hike.create!(
#     park_id: 2,
#     name: "Tennessee Valley Golden Gate Loop Trail",
#     city: "Mill Valley",
#     latitude: 37.86048,
#     longitude: -122.5362,
#     zipcode: 94965,
#     difficulty: "Moderate",
#     estimated_time: "3 hours",
#     description: "The Tennesee Valley Golden Gate Loop trail is located in Mill Valley, California. It is a popular destination for birding, hiking, and mountain biking. The trail is beautiful and open all year-round. You will need to leave your pups if you head out on this trail, dogs are not allowed.",
#     elevation_gain: 1292,
#     duration: "5.5 miles",
#     route_type: "loop"
# )
# Hike.create!(
#     park_id: 2,
#     name: "Kirby Cove",
#     city: "Sausalito",
#     latitude: 37.83239,
#     longitude: -122.48214,
#     zipcode: 94965,
#     difficulty: "Easy",
#     estimated_time: "1.5 hours",
#     description: "Kirby Cove is a popular route in Sausalito, Caliofnia for hiking, walking, and camping. It is a frequently visited Out & back trail with an ocean view at the end of the trail. You will need to leave pups at home, they are not allowed on this trail.",
#     elevation_gain: 561,
#     duration: "3 miles",
#     route_type: "Out & back"
# )
# Hike.create!(
#     park_id: 2,
#     name: "California Coastal Trail: Lands End to Golden Gate Bridge",
#     city: "San Francisco",
#     latitude: 37.78044,
#     longitude: -122.51165,
#     zipcode: 94121,
#     difficulty: "Moderate",
#     estimated_time: "2 hours",
#     description: "The California Coastal Trail is a popular route in San Francisco, California for hiking, walking, and running. It is a frequently visited point to point trail with a chance to see the Golden Gate Bridge. Pups are welcome on this trail as long as they are on a leash.",
#     elevation_gain: 569,
#     duration: "4.4 miles",
#     route_type: "Point to point"
# )

#Hikes in Fort Mason
upper_fort_mason = Hike.create!(
    park_id: 3,
    name: "Upper Fort Mason",
    city: "San Francisco",
   latitude: 37.804591,
    longitude: -122.426311,
    zipcode: 94109,
    difficulty: "Easy",
    estimated_time: "45 minutes",
    description: "Upper Fort Mason is a popular trail for local San Franciscans and tourists alike. The trail features ocean views, and it is a popular trail for birding and walking. The trail is open all year and pups are welcome. They may be off-leash in some areas of the trail.",
    elevation_gain: 121,
    duration: "2.1 miles",
    route_type: "loop"
)

upper_fort_mason.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/fort-mason.png'), filename: 'fort-mason.png')


wave_organ = Hike.create!(
    park_id: 3,
    name: "Fort Mason to Wave Organ",
    city: "San Francisco",
   latitude: 37.804286,
    longitude: -122.429272,
    zipcode: 94109,
    difficulty: "Easy",
    estimated_time: "52 minutes",
    description: "Fort Mason to Wave Organ is a 3.0 mile trail in San Francisco, California. The area is very popular for walking, running, and birding, so you are likely to encounter other people while exploring this trail. The trail is open year-round and is beautiful to visit any time of the year. Bring your pups- they are welcome, as long as they are on a leash!",
    elevation_gain: 19,
    duration: "3.0 miles",
    route_type: "Out & back"
)
wave_organ.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/wave-organ.png'), filename: 'wave-organ.png')

#Hikes in Marin Headlands
rodeo_beach = Hike.create!(
    park_id: 4,
    name: "Rodeo Beach, Miwok Trail, and Coastal Trail",
    city: "Muir Beach",
    latitude: 37.83202,
    longitude: -122.53972,
    zipcode: 94941,
    difficulty: "Moderate",
    estimated_time: "2.6 hours",
    description: "This 5.3 mile loop is located in Muir Beach, California. The trail takes about 2.6 hours on average to complete. It is a popular area for birding, hiking, and horseback riding, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Pups are welcome as long as they are on a leash.",
    elevation_gain: 1076,
    duration: "5.3 miles",
    route_type: "loop"
)
rodeo_beach.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/rodeo-beach.png'), filename: 'rodeo-beach.png')

tennessee_v = Hike.create!(
    park_id: 4,
    name: "Tennessee Valley Trail",
    city: "Sausalito",
    latitude: 37.860521,
    longitude: -122.536426,
    zipcode: 94941,
    difficulty: "Moderate",
    estimated_time: "1 hour",
    description: "This 3.4 mile loop is located in Sausalito, California. The trail takes about 1 hour on average to complete. It is a popular area for horseback riding, hiking, and horseback riding, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Pups will need to stay home, they are not allowed on this trail.",
    elevation_gain: 170,
    duration: "3.4 miles",
    route_type: "Out & back"
)
tennessee_v.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/tennesee.png'), filename: 'tennesee.png')
# Hike.create!(
#     park_id: 4,
#     name: "Rodeo Beach to Hill 88",
#     city: "Sausalito",
#     latitude: 37.83232,
#     longitude: -122.54018,
#     zipcode: 94941,
#     difficulty: "Moderate",
#     estimated_time: "2 hours",
#     description: "This 3.8 mile out & back trail is located in Sausalito, California. The trail takes about 2 hours on average to complete. It is a popular area for birding, hiking, and running, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Pups are welcome on this trail as long as they are on a leash.",
#     elevation_gain: 1023,
#     duration: "3.8 miles",
#     route_type: "Out & back"
# )

coastal_tenn = Hike.create!(
    park_id: 4,
    name: "Tennesee Beach via Coastal, Fox, and Middle Green Gulch Loop",
    city: "Muir Beach",
    latitude: 37.86123,
    longitude: -122.57553,
    zipcode: 94941,
    difficulty: "Moderate",
    estimated_time: "2 hours",
    description: "This 9.1 mile loop is located in Sausalito, California. The trail takes about 4.5 hours on average to complete. It is a popular area for birding, hiking, and running, so you will likely encounter other people while exploring. The best times to visit this trail are April through September. Pups are welcome as long as they are on a leash.",
    elevation_gain: 1833,
    duration: "9.1 miles",
    route_type: "loop"
)
coastal_tenn.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/coastal_tenn.png'), filename: 'coastal_tenn.png')
coastal_saus = Hike.create!(
    park_id: 4,
    name: "Coastal Trail Loop",
    city: "Sausalito",
    latitude: 37.83217,
    longitude: -122.53974,
    zipcode: 94965,
    difficulty: "Easy",
    estimated_time: "1 hour",
    description: "This 2.5 mile loop is located in Sausalito, California. The trail takes about 1 hour on average to complete. It is a popular area for birding, hiking, and running, but you can enjoy some solitude during the quieter hours of the day. The trail is open year-round and is beautiful to visit anytime. Pups are welcome as long as they are on a leash.",
    elevation_gain: 380,
    duration: "2.5 miles",
    route_type: "loop"
)
coastal_saus.photos.attach(io: URI.open('https://bayareatrails-seeds.s3.us-west-1.amazonaws.com/coastal-saus.png'), filename: 'coastal_saus.png')
# Hike.create!(
#     park_id: 4,
#     name: "Gerbode Valley Loop",
#     city: "Sausalito",
#     latitude: 37.8326,
#     longitude: -122.51646,
#     zipcode: 94965,
#     difficulty: "Moderate",
#     estimated_time: "2.5 hours",
#     description: "This 5.3 mile loop is located in Sausalito, California. The trail takes about 2.5 hours on average to complete. It is a popular area for birding, hiking, and running, so you will likely encounter other explorers on this trail. The trail is open year-round and is beautiful to visit anytime. You'll need to leave your pups at home, they aren't allowed on this trail.",
#     elevation_gain: 869,
#     duration: "5.3 miles",
#     route_type: "loop"
# )

# Hike.create!(
#     park_id: 4,
#     name: "Coastal Trail to Viewpoint Loop",
#     city: "Sausalito",
#     latitude: 37.83248,
#     longitude: -122.53895,
#     zipcode: 94965,
#     difficulty: "Easy",
#     estimated_time: "45 minutes",
#     description: "This 1.7 mile loop is located in Sausalito, California. The trail takes about 45 minutes on average to complete. It is a popular area for birding, hiking, and running, so you will likely encounter other explorers on this trail. The trail is open year-round and is beautiful to visit anytime. Pups are allowed as long as they are on a leash.",
#     elevation_gain: 232,
#     duration: "1.7 miles",
#     route_type: "loop"
# )

  puts "Done!"
#end