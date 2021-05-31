# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Gender.create!(label: "Male", parent_id: nil)
Gender.create(label: "Female", parent_id: nil)
Gender.create(label: "Custom", parent_id: nil)
Gender.create(label: "Agender", parent_id: 3)
Gender.create(label: "Androgyne", parent_id: 3)
Gender.create(label: "Androgynous", parent_id: 3)
Gender.create(label: "Bigender", parent_id: 3)
Gender.create(label: "Cis", parent_id: 3)
Gender.create(label: "Cis Female", parent_id: 3)
Gender.create(label: "Cis Male", parent_id: 3)

User.create!(
  email: 'joe@email.com',
  first_name: 'Joe',
  last_name: 'Johnson',
  birthdate: Date.new(1980, 12, 25),
  gender_id: 1,
  password: '123456'
)