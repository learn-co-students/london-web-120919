# Create a User class
class User
  # A getter method for the username
  attr_reader :username, :tweets
  # A constructor that will take a username as an argument
  def initialize(username)
    @username = username
  end

  # An instance method that allows a user to post a tweet
  def post_tweet(message)
    # Create a new instance of tweet, pass in self (the instance of user that called this method) as the user, so that this new tweet will belong to the user that posted it
    new_tweet = Tweet.new(message: message, user: self)
  end

  # Go to our single source of truth to get all the tweets and then only select the tweets where the instance of user they belong to is the same as self - the instance of user that called this method i.e. get only the tweets that belong to this user
  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end
end
