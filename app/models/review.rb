# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  user_id       :bigint           not null
#  hike_id       :bigint           not null
#  content       :text             not null
#  stars         :integer          not null
#  activity_type :string           not null
#  conditions    :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord

    validates :user_id, :hike_id, presence: true
    validates :content, presence: true,  length: {in: 3...250, message: "must be between 2 and 250 characters"}
    validates :stars, inclusion: {in: 1..5, message: "must be selected"}
    validates :activity_type, inclusion: {in: ['backpacking', 'bird watching', 'bike touring', 'camping', 'fishing', 'hiking', 'horseback riding', 'mountain biking', 'road biking', 'rock climbing', 'skiing', 'running', 'walking'], message: "must be selected"}


    belongs_to :user
    belongs_to :hike
end
