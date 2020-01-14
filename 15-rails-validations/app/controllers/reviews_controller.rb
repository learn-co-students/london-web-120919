class ReviewsController < ApplicationController

    def new
        @review = Review.new
        @users = User.all
        @films = Film.all
    end

    def create
        review = Review.create(review_params)
        if review.valid?
            redirect_to review
        else
            flash[:errors] = review.errors.full_messages
            redirect_to new_review_path
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    private 

    def review_params
        params.require(:review).permit(:user_id, :film_id, :content, :rating)
    end

end
