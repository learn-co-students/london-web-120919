class UsersController < ApplicationController

  def admin
    authorize_admin_access
  end
end
