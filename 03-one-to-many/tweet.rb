# Create a Tweet class
class Tweet
  # Class variable to keep track of every instance of tweet - our single source of truth for tweets.
  @@all = []
  # A getter method for the message.
  # A getter method for the user the tweet belongs to.
  attr_reader :message, :user
  # A constructor that takes an argument of the message and the user this tweet belongs to.
  def initialize(message:, user:)
    @message = message
    @user = user
    @@all << self
  end

  # A getter method to get the username of the user that the tweet belongs to. This is a good use of abstraction as it means in our run file we only need to call tweet.username rather than tweet.user.username.
  def username
    @user.username
  end

  # A class getter method that returns every instance of tweet that's been created.
  def self.all
    @@all
  end

end
