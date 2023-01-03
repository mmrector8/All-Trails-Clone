class Api::HikesController < ApplicationController

    def index 
        @hikes = Hike.all 
        render :index
    end

    def create
        @hike = Hike.new(hike_params)
        if @hike.save!
            render :show
        else
            render json: {errors: @hike.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        @hike = Hike.find_by(id: params[:id])
        @park = Park.find_by(id: @hike.park_id)
        if @hike
            render :show
        else
            render json: {hike: nil}
        end
    end

    private
    def hike_params
        params.require(:hike).permit(:park_id, :name, :city, :latitude, :longitude, :zipcode, :difficulty, :estimated_time, :description, :elevation_gain, :duration, :route_type)
    end 
end
