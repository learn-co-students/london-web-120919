# Declare that we're about to define a class. Class names are singular and in TitleCase.
class Person
  # Creates a getter and setter method for any attributes passed as arguments
  attr_accessor :name
  # Creates a getter method for any attributes passed as arguments
  attr_reader :date_of_birth
  # Creates a setter method for any attributes passed as arguments
  attr_writer
  # Class variable which will keep track of every instance of person we create
  @@all = []

  # Constructor method that takes arguments and sets a new instance's attributes to those values, allowing us to create a new instance of Person and define the value of its instance variables at the same time.
  def initialize(name, date_of_birth)
    # Instance variable. The value of this is tied to a specific instance.
    @name = name
    @date_of_birth = date_of_birth
    # Push the instance of Person we've just created into our @@all class variable.
    @@all << self # self - a contextual word that refers to whatever object we are currently interacting with. In this case, it will be the instance of person we've just created.
  end

  # Instance method - a method attached to an instance of our class.
  def say_hello
    puts "Hi, my name is #{self.name}" # When we call self.name here, we are calling the name getter method on the instance of person that say_hello was originally called on. We're effectively saying "Get me this person's name".
  end

  # Class method - by putting self. before the method name, we set this up as a method that belongs to the whole Person class, not instances. This is a getter method for our @@all class variable.
  def self.all
    @@all
  end

  # Getter method - This is what is actually created by attr_accessor or attr_reader. It allows us to access the value of an instance's @name instance variable outside of the class.
  # def name
  #   @name
  # end

  # Setter method - This is what is actually created by attr_accessor or attr_writer. It allows us to change the value of an instance's @name instance variable outside of the class.
  # def name=(new_name)
  #   @name = new_name
  # end

end
