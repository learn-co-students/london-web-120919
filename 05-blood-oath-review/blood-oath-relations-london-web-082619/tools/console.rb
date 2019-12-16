require_relative '../config/environment.rb'
require 'faker'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


c1 = Cult.new("Rocky Horror Picture Show", "Denton", "So, come up to the lab and see what’s on the slab!")
c2 = Cult.new("Pulp Fiction", "LA", "I want a pot")
c3 = Cult.new("Twin Peaks", "Twin Peaks", "The owls are not what they seem.")

f1 = Follower.new("Mani", 28, "Hello humans")
f2 = Follower.new("Jo", 27, "grwnjrenipha")
f3 = Follower.new("Charly", 35, "Mm bread")
f4 = Follower.new("Anderson", 27, "Resiliency is key")
f5 = Follower.new("Sergio", 30, "Make internet fast")

10.times do
  BloodOath.new(Cult.all.sample, Follower.all.sample)
end

b1 = BloodOath.all.first
b2 = BloodOath.all.last

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
