json.set! @park.id do
    json.extract! @park, :id, :name, :county, :city, :latitude, :longitude, :zipcode, :state, :description, :created_at, :updated_at
    json.hikes do
        json.array! @park.hikes.each do |hike|
            json.extract! hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
            json.park_name @park.name
            json.photoUrls hike.photos.map { |file| file.url }
        end
    end 
end