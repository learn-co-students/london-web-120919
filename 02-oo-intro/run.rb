# Because we defined everything about our Person class in person.rb, all we need to do in this run file is pull in the code from that file and execute it. We've abstracted the definition of what state and behaviour a Person object has away from the execution of actually creating one and using it in our code.
require_relative "person.rb"
person1 = Person.new("Joe", "06/06/1992")
