class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query] #94107
        if query.to_i != 0
            @hikes = Hike.where("name", query)
            render 'api/hikes/index'
       
        else
            @parks = Park.where("name", query.downcase)
            render 'api/hikes/index'
        end
    end

end