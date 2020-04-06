# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Property.destroy_all
City.destroy_all

User.create!(
  first_name: "Joey",
  last_name: "Schmo",
  username: "joey99",
  email: "joeschmo99@gmail.com",
  address: "78th Street West 4",
  city: "New York",
  state: "New York",
  country: "United States",
  zipcode: "10005",
  password_digest: "123456"
)

User.create!(
  first_name: "April",
  last_name: "May",
  username: "aprilmay54",
  email: "aprilmay54@hotmail.com",
  address: "45 Mountain Drive",
  city: "Kansas City",
  state: "Missouri",
  country: "United States",
  zipcode: "09823",
  password_digest: "123456"
)

User.create!(
  first_name: "Josh",
  last_name: "Reyes",
  username: "jreyes00",
  email: "joshreyes00@gmail.com",
  address: "33 Ocean Blvd.",
  city: "Mexico City",
  state: "",
  country: "Mexico",
  zipcode: "00000",
  password_digest: "123456"
)

User.create!(
  first_name: "Gustave",
  last_name: "Jones",
  username: "gustavejones2",
  email: "gustave2@gmail.com",
  address: "48 Meadow Way",
  city: "Berlin",
  state: "",
  country: "Germany",
  zipcode: "98123",
  password_digest: "123456"
)

User.create!(
  first_name: "Caitlyn",
  last_name: "Li",
  username: "caity123",
  email: "caity123@gmail.com",
  address: "11 Boulder Road",
  city: "Tokyo",
  state: "",
  country: "Japan",
  zipcode: "11111",
  password_digest: "123456"
)
p "Created #{User.count} users"


Property.create!(
  address: "99 Pleasant Drive",
  city: "Brooklyn",
  state: "New York",
  country: "United States",
  zipcode: "11111",
  user_id: 1
)

Property.create!(
  address: "45 Sunset Blvd.",
  city: "Brooklyn",
  state: "New York",
  country: "United States",
  zipcode: "11111",
  user_id: 1
)

Property.create!(
  address: "54 Thunder Place",
  city: "Kansas City",
  state: "Missouri",
  country: "United States",
  zipcode: "09865",
  user_id: 2
)

Property.create!(
  address: "17 Scenic Road",
  city: "Mexico City",
  state: "",
  country: "Mexico",
  zipcode: "96432",
  user_id: 3
)

Property.create!(
  address: "1076 Hilltop Drive",
  city: "Berlin",
  state: "",
  country: "Germany",
  zipcode: "98123",
  user_id: 4
)

Property.create!(
  address: "7000 Greater Street",
  city: "Tokyo",
  state: "",
  country: "Japan",
  zipcode: "11111",
  user_id: 5
)
p "Created #{Property.count} properties"


newyork = City.create(
  {
    city: "New York",
    country: "United States",
    property_id: 1
  }
)
p "Created #{City.count} cities"
