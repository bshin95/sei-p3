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
  password: "123456"
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
  password: "123456"
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
  password: "123456"
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
  password: "123456"
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
  password: "123456"
)
p "Created #{User.count} users"

newyork = City.create(
  {
    name: "New York",
    state: "New York",
    country: "United States"
  }
)

phoenix = City.create(
  {
    name: "Phoenix",
    state: "Arizona",
    country: "United States"
  }
)

losangeles = City.create(
  {
    name: "Los Angeles",
    state: "California",
    country: "United States"
  }
)

mailbu = City.create(
  {
    name: "Mailbu",
    state: "California",
    country: "United States"
  }
)

sacramento = City.create(
  {
    name: "Sacramento",
    state: "California",
    country: "United States"
  }
)

sandiego = City.create(
  {
    name: "San Diego",
    state: "California",
    country: "United States"
  }
)

sanfrancisco = City.create(
  {
    name: "San Francisco",
    state: "California",
    country: "United States"
  }
)

denver = City.create(
  {
    name: "Denver",
    state: "Colorado",
    country: "United States"
  }
)
  
miami = City.create(
  {
    name: "Miami",
    state: "Florida",
    country: "United States"
  }
)

orlando = City.create(
  {
    name: "Orlando",
    state: "Florida",
    country: "United States"
  }
)

tampa = City.create(
  {
    name: "Tampa",
    state: "Florida",
    country: "United States"
  }
)
  
tallahassee = City.create(
  {
    name: "Tallahassee",
    state: "Florida",
    country: "United States"
  }
)

atlanta = City.create(
  {
    name: "Atlanta",
    state: "Georgia",
    country: "United States"
  }
)


honolulu = City.create(
  {
    name: "Honolulu",
    state: "Hawaii",
    country: "United States"
  }
)

chicago = City.create(
  {
    name: "Chicago",
    state: "Illinois",
    country: "United States"
  }
)

batonrouge = City.create(
  {
    name: "Baton Rouge",
    state: "Louisana",
    country: "United States"
  }
)

balitmore = City.create(
  {
    name: "Balitmore",
    state: "Maryland",
    country: "United States"
  }
)

boston = City.create(
  {
    name: "Boston",
    state: "Masschusetts",
    country: "United States"
  }
)

detroit = City.create(
  {
    name: "Detroit",
    state: "Michigan",
    country: "United States"
  }
)

lasvegas = City.create(
  {
    name: "Las Vegas",
    state: "Nevada",
    country: "United States"
  }
)

atlanticcity = City.create(
  {
    name: "Atlantic City",
    state: "New Jersey",
    country: "United States"
  }
)

cleveland = City.create(
  {
    name: "Cleveland",
    state: "Ohio",
    country: "United States"
  }
)

oklahomacity = City.create(
  {
    name: "Oklahoma City",
    state: "Oklahoma",
    country: "United States"
  }
)

portland = City.create(
  {
    name: "Portland",
    state: "Oregon",
    country: "United States"
  }
)

philadelphia = City.create(
  {
    name: "Philadelphia",
    state: "Pennsylvania",
    country: "United States"
  }
)

newport = City.create(
  {
    name: "New Port",
    state: "Rhode Island",
    country: "United States"
  }
)

nashville = City.create(
  {
    name: "Nashville",
    state: "Tennesse",
    country: "United States"
  }
)

austin =City.create(
  {
    name: "Austin",
    state: "Texas",
    country: "United States"
  }
)

dallas = City.create(
  {
    name: "Dallas",
    state: "Texas",
    country: "United States"
  }
)

houston = City.create(
  {
    name: "Houston",
    state: "Texas",
    country: "United States"
  }
)

sanantonio = City.create(
  {
    name: "San Antonio",
    state: "Texas",
    country: "United States"
  }
)

saltlakecity = City.create(
  {
    name: "Salt Lake City",
    state: "Utah",
    country: "United States"
  }
)

washingtondc = City.create(
  {
    name: "Washington D.C.",
    state: "Virgina",
    country: "United States"
  }
)

virginabeach = City.create(
  {
    name: "Virgina Beach",
    state: "Virgina",
    country: "United States"
  }
)

seattle = City.create(
  {
    name: "Seattle",
    state: "Washington",
    country: "United States"
  }
)
p "Created #{City.count} cities"

Property.create!(
  address: "99 Pleasant Drive",
  zipcode: "11111",
  user_id: 1,
  city_id: 1
)

Property.create!(
  address: "45 Sunset Blvd.",
  zipcode: "11111",
  user_id: 1,
  city_id: 1
)

Property.create!(
  address: "54 Thunder Place",
  zipcode: "09865",
  user_id: 2,
  city_id: 1
)

Property.create!(
  address: "17 Scenic Road",
  zipcode: "96432",
  user_id: 3,
  city_id: 1
)

Property.create!(
  address: "1076 Hilltop Drive",
  zipcode: "98123",
  user_id: 4,
  city_id: 1,
)

Property.create!(
  address: "7000 Greater Street",
  zipcode: "11111",
  user_id: 5,
  city_id: 1
)
p "Created #{Property.count} properties"
