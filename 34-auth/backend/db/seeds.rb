# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create a new User
User.create(username: "Joe", password: "pass")
# Create two items belonging to the User we just created
Item.create([
  {
    name: "Flamboyant Shirt",
    description: "Groovy",
    user_id: 1
  },
  {
    name: "Round Glasses",
    description: "Please don't say  I look like Harry Potter",
    user_id: 1
  }
])
