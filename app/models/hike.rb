# == Schema Information
#
# Table name: hikes
#
#  id             :bigint           not null, primary key
#  park_id        :bigint
#  name           :string           not null
#  city           :string           not null
#  latitude       :float            not null
#  longitude      :float            not null
#  zipcode        :integer          not null
#  difficulty     :string           not null
#  est_time       :integer          not null
#  description    :text
#  elevation_gain :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  duration       :string           not null
#  route_type     :string           not null
#
class Hike < ApplicationRecord
    belongs_to :park, optional: true
    validates :name, :city, :latitude, :longitude, :zipcode, :difficulty, :est_time, :elevation_gain, :duration, :route_type, presence: true
    validates :route_type, inclusion: {in: ['loop', 'Out & back']}
    validates :duration, length: {in: 1...100 }
    validates :name, uniqueness: true
end
