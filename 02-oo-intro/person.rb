class Person
  attr_accessor :name
  attr_reader :dob
  @@all = []

  def initialize(name, dob)
    @name = name
    @dob = dob
    @@all << self
  end

  def say_hello
    puts "Hi, my name is #{self.name}"
  end

  def self.all
    @@all
  end

  # def name
  #   @name
  # end
  #
  # def name=(name)
  #   @name = name
  # end

end
