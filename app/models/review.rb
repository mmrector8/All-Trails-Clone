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
    validates :content, presence: true,  length: {in: 3...250}
    validates :stars, :inclusion => 1..5 
    validates :activity_type, inclusion: {in: ['walking', 'hiking']}
    validates :conditions, inclusion: {in: ['Great', 'Bridge out', 'Bugs', 'Closed', 'Fee', 'Flooded', 'Muddy', 'No shade', 'Off trail', 'Overgrown', 'Private property', 'Rocky', 'Scramble', 'Washed out'], allow_nil: true}

    belongs_to :user
    belongs_to :hike
end
