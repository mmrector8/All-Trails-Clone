json.set! @hike.id do
    json.extract! @hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
    json.photo_urls @hike.photos.map { |file| file.url }
    json.park_name @park.name

    json.related_hikes do
        json.array! @park.hikes.each do |hike|
            json.extract! hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
            json.park_name @park.name
            json.photoUrls hike.photos.map { |file| file.url }
        end
    end 

end