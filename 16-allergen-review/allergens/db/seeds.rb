# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Ingredient.destroy_all

User.create([
    { name: 'sam' },
    { name: 'gabe' },
    { name: 'charly' },
    { name: 'joe' }
])

Ingredient.create([
    { name: 'flour' },
    { name: 'sugar' },
    { name: 'eggs' },
    { name: 'butter' },
    { name: 'cream' },
    { name: 'chocolate' }
])

$all_users = User.all
$all_ingredients = Ingredient.all

30.times do
    Allergy.create(user: $all_users.sample, ingredient: $all_ingredients.sample)
end