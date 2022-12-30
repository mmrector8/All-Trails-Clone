# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  county      :string           not null
#  city        :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  zipcode     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  state       :string           not null
#  description :text             not null
#
class Park < ApplicationRecord
    validates :name, :county, :city, :latitude, :longitude, :zipcode, :state, :description, presence: true
    has_many :hikes
end
