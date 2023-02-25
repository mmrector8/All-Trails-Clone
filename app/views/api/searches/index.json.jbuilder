json.hikes do
    @hikes.each.with_index do |hike, i|
        json.set! hike.id do
            json.extract! hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
            json.photo_urls hike.photos.map { |file| file.url }
        end
    end
end
json.parks do 
    @parks.each do |park|
        json.set! park.id do
            json.extract! park, :id, :name
        end
    end
end
