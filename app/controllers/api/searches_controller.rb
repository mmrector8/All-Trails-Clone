class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query]
        query = query.split(" ")
        query.each do |word|
            word[0] = word[0].upcase
        end
        newQuery = query.join(" ")
        @hikes = Hike.where("name LIKE ?", newQuery).limit(10)
        @parks = Park.all
        render 'api/hikes/index'
    end

end