class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query]
        query = query.downcase.split(" ") if params[:query]
        newHikes =[]
        query.each do |item|
            newHikes << Hike.where("LOWER(name) LIKE ?", "%#{item}%")
        end
        @hikes = newHikes.reduce(:and)
        @parks = Park.all
        render 'api/hikes/index'
    end

end