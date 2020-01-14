class ReviewsController < ApplicationController

    def new
        @review = Review.new
        @users = User.all
        @films = Film.all
    end

    def create
        review = Review.create(review_params)
        redirect_to review
    end

    def show
        @review = Review.find(params[:id])
    end

    private 

    def review_params
        params.require(:review).permit(:user_id, :film_id, :content, :rating)
    end

end
