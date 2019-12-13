# Pull in all the code from our environment file so that this file has everything it needs to run the app.
require_relative "environment.rb"

# Create some seed data so that we can test our relationships and methods are working properly.
user = User.new("Portus")
user2 = User.new("BigDave55")

tweet = user.post_tweet("New tweet!")

user.like_tweet(tweet)
user2.like_tweet(tweet)

binding.pry
0
