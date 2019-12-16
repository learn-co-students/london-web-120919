class Cult
    attr_reader :name, :location, :founding_year, :slogan
    @@all = []

    def initialize(name, location, slogan)
        @name = name
        @location = location
        @founding_year = Time.now.year
        @slogan = slogan
        @@all << self
    end

    def self.all
        @@all
    end

    def self.find_by_name(name)
        @@all.find {|cult| cult.name == name }
    end

    def self.find_by_location(location)
        @@all.select { |cult| cult.location == location }
    end

    def self.find_by_founding_year(year)
        @@all.select { |cult| cult.founding_year == year }
    end

    def self.least_popular
        @@all.min_by { |cult| cult.followers.length }
    end

    def self.most_common_location
        self.all.max_by {|cult| self.all.count(cult.location) }
    end

    def followers
        blood_oaths.map { |blood_oath| blood_oath.follower }
    end

    def blood_oaths
        BloodOath.all.select { |blood_oath| blood_oath.cult == self }
    end

    def recruit_follower(follower)
        BloodOath.new(self, follower)
    end

    def cult_population
        followers.count
    end

    def average_age
        ages = followers.map {|follower| follower.age}
        ages.reduce(:+).to_f / followers.count
    end

    def my_followers_mottos
        followers.map { |follower| follower.life_motto }
    end


end