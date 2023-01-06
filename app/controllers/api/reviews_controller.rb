class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save!
            render "views/api/show"
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.upate(review_params)
            render json: updated!
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render "views/api/show"
        else
            render json: {errors: @review.errors.full_messages}
        end
    end

    def review_params
        params.require(:review).permit(:user_id, :hike_id, :content, :stars, :activity_type, :conditions)
    end
end