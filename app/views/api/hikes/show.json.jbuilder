json.set! @hike.id do
    json.extract! @hike, :id, :park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type, :created_at, :updated_at
end