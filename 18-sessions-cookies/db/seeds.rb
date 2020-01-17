# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cookie.destroy_all
Instructor.destroy_all

cookies = Cookie.create([
    {name: 'choc chip'},
    {name: 'white choc chip'},
    {name: 'dark choc chip'},
    {name: 'triple choc'},
    {name: 'coconut'},
    {name: 'vegan'},
    {name: 'shortbread'},
    {name: 'salted caramel'},
    {name: 'milkybar wowsomes'},
    {name: 'oat and raisin'},
    {name: 'dark chocolate digestive (not a cookie)'},
    {name: 'pret\'s dark chocolate salted caramel vegan'},
    {name: 'm&ms'}
])

[
    'ian',
    'sam',
    'dan',
    'nico',
    'joe',
    'jo',
    'sarah',
    'lucy',
    'mani',
    'gabe',
    'stu',
    'sofia',
    'ben',
    'wachira',
    'bhav',
    'julia',
    'kaitlyn',
    'tarryn',
    'charlie',
    'igor'
].each do |name|
    Instructor.create({ name: name, cookie: cookies.sample })
end