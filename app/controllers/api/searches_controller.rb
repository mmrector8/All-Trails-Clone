class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query]
        query = query.downcase.split(" ") if params[:query]
        newHikes =[]
        parks = []
        searchParks =[]
        query.each do |item|
            newHikes << Hike.where("LOWER(name) LIKE ?", "%#{item}%")
            parks << Park.where("LOWER(name) LIKE ?", "%#{item}%")
        end
        @hikes = newHikes.reduce(:and)
        # @hikes.each do |hike|
        #     parks << Park.where("id = ?", hike.park_id)
        # end
        @parks = parks.reduce(:and)
        render :index
    end

end