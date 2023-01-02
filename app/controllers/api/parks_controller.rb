class Api::ParksController < ApplicationController

    def create
        @park = Park.new(park_params)
        if @park.save!
            render :show
        else
            render json: {errors: @park.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        @park = Park.find_by(id: params[:id])
        if @park
            render :show
        else
            render json: {park: nil}
        end
    end

    private
    def park_params
        params.require(:park).permit(:name, :county, :city, :latitude, :longitude, :zipcode, :state, :description)
    end 
end