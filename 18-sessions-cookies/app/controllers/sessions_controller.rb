class SessionsController < ApplicationController
  def login
  end

  def authenticate
    # rewrite for a nicer if
    user = User.find_by(name: params['username'])
    byebug
    unless user
      puts 'error - user not found'
    else 
      if user.authenticate params['password']
        puts 'you have logged in'
      else
        puts 'the password is wrong'
      end
    end
  end
end
