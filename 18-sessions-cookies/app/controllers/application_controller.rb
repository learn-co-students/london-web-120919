class ApplicationController < ActionController::Base
    before_action :set_current_user
    helper_method :logged_in?

    def set_current_user
        byebug
        if logged_in?
            @current_user = User.find(session[:user_id])
        else
            @current_user = nil
        end
    end

    def logged_in?
        !!session[:user_id]
    end
end
