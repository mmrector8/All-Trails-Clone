json.user do
    json.extract! @user, :id, :email, :username, :fname, :lname, :created_at, :updated_at
end

json.reviews do
    @user.reviews.slice(0,1).each do |review|
        json.set! review.id do
            json.extract! review, :id, :user_id, :hike_id, :content, :stars, :updated_at, :created_at
        end
    end
end