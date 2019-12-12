require "pry"
require_relative "user.rb"
require_relative "tweet.rb"
# Create some users and post tweets as them for testing purposes.
user1 = User.new("Portus")
user2 = User.new("BigDave55")

user1.post_tweet("This is the first tweet")
user1.post_tweet("This is the second tweet")

user2.post_tweet("This is BigDave's tweet")
binding.pry
0
