class ApplicationController < ActionController::Base
    before_action :set_current_user
    helper_method :logged_in?, :admin?

    def set_current_user
        if logged_in?
            @current_user = User.find(session[:user_id])
        else
            @current_user = nil
        end
    end

    def logged_in?
        !!session[:user_id]
    end

    def admin?
      user = User.find(session[:user_id])
      if user && user.user_type == 'admin'
        return true
      end
      false
    end

    def authorize_admin_access
      if !admin?
        flash[:not_authorized] = true
        redirect_to root_path
      end
    end
end
