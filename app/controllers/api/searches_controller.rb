class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query] #94107
        if query.to_i != 0
            @listings = Hike.where("zip = (?)", query)
            render 'api/hikes/index'
       
        else
            @listings = Park.where("listing_type = (?)", query.downcase)
            render 'api/hikes/index'
        end
    end

end