json.set! @park.id do
    json.extract! @park, :id, :name, :county, :city, :latitude, :longitude, :zipcode, :state, :description, :created_at, :updated_at
end