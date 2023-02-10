class Api::SearchesController < ApplicationController

    def search_filter
        query = params[:query] #94107
        @hikes = Hike.where(name: query)
        @parks = Park.all
        render 'api/hikes/index'
    end

end