json.extract! @review, :id, :user_id, :hike_id, :content, :stars, :activity_type, :conditions, :updated_at, :created_at
json.extract! @review.user, :fname, :lname