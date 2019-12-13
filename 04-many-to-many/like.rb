class Like
  @@all = []
  attr_reader :user, :tweet
  
  # Belongs to an instance of user and an instance of tweet
  def initialize(user:, tweet:)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end
end
