# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create([
  {
    title: "Post 1",
    body: "This is the first post"
  },
  {
    title: "Post 2: Electric Boogaloo",
    body: "The second exciting chapter in the Post series"
  },
  {
    title: "Post III: The Last Stand",
    body: "The Post series wraps up with a disappointing third instalment with a rubbish cliffhanger at the end teasing a fourth film that nobody wants to make or watch"
  }
  ])
