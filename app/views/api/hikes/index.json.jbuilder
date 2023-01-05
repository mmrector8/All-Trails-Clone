json.hikes do
    @hikes.each do |hike|
        json.set! hike.id do
            json.extract! hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
            json.photo_urls hike.photos.map { |file| file.url }
            json.park_name @parks[(hike.park_id)-1].name
            json.related_hikes @parks[(hike.park_id-1)].hikes
        end
    end
end