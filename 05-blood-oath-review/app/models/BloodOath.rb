class BloodOath
    attr_reader :cult, :follower, :initiation_date

    @@all = []

    def initialize(cult, follower)
        @cult = cult
        @follower = follower
        @initiation_date = "#{Time.now.year}-#{Time.now.month}-#{Time.now.day}"
        @@all << self
    end

    def self.all
        @@all
    end

    def self.first_oath
        oath_sort = self.all.sort_by {|oath| Time.parse(oath.initiation_date) }
        oath_sort[0].follower
    end

end