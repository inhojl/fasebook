# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


RelationshipStatus.create!(label: "Single")
RelationshipStatus.create!(label: "In a relationship")
RelationshipStatus.create!(label: "Engaged")
RelationshipStatus.create!(label: "Married")
RelationshipStatus.create!(label: "In a civil union")
RelationshipStatus.create!(label: "In a domestic partnership")
RelationshipStatus.create!(label: "In an open relationship")
RelationshipStatus.create!(label: "It's complicated")
RelationshipStatus.create!(label: "Separated")
RelationshipStatus.create!(label: "Divorced")
RelationshipStatus.create!(label: "Widowed")


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

user1 = User.create!(
  email: 'inho@fasebook.com',
  first_name: 'Inho',
  last_name: 'Lee',
  birthdate: Date.new(1980, 12, 25),
  gender_id: 1,
  password: '123456'
)


user2 = User.create!(
  email: 'welcome@fasebook.com',
  first_name: 'Bruce',
  last_name: 'Wayne',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: 'w3lcomeToFasebook'
)

user3 = User.create!(
  email: 'user1@fasebook.com',
  first_name: 'The',
  last_name: 'Joker',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: '123456'
)


user4 = User.create!(
  email: 'roger@fasebook.com',
  first_name: 'Roger',
  last_name: 'Federer',
  birthdate: Date.new(1981, 8, 8),
  gender_id: 1,
  password: '123456'
)


user5 = User.create!(
  email: 'harry@fasebook.com',
  first_name: 'Harry',
  last_name: 'Potter',
  birthdate: Date.new(1980, 7, 31),
  gender_id: 1,
  password: '123456'
)

User.create!(
  email: 'hermione@fasebook.com',
  first_name: 'Hermione',
  last_name: 'Granger',
  birthdate: Date.new(1979, 9, 19),
  gender_id: 2,
  password: '123456'
)

User.create!(
  email: 'goku@fasebook.com',
  first_name: 'Son',
  last_name: 'Goku',
  birthdate: Date.new(1999, 1, 8),
  gender_id: 1,
  password: '123456'
)

User.create!(
  email: 'kobe@fasebook.com',
  first_name: 'Link',
  last_name: 'Link',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: '123456'
)

User.create!(
  email: 'kobe@fasebook.com',
  first_name: 'Kobe',
  last_name: 'Bryant',
  birthdate: Date.new(1978, 8, 23),
  gender_id: 1,
  password: '123456'
)

User.create!(
  email: 'neo@fasebook.com',
  first_name: 'Thomas',
  last_name: 'Anderson',
  birthdate: Date.new(1990, 5, 19),
  gender_id: 1,
  password: '123456'
)

User.create!(
  email: 'trinity0@fasebook.com',
  first_name: 'Trinity',
  last_name: 'Trin',
  birthdate: Date.new(1967, 9, 1),
  gender_id: 2,
  password: '123456'
)

User.create!(
  email: 'morpheus@fasebook.com',
  first_name: 'Morpheus',
  last_name: 'Daniel',
  birthdate: Date.new(1970, 3, 16),
  gender_id: 1,
  password: '123456'
)


Friendship.create!(user_id: 1, friend_id: 2, status: "PENDING_SENT")
Friendship.create!(user_id: 2, friend_id: 1, status: "PENDING_RECEIVED")

Friendship.create!(user_id: 1, friend_id: 4, status: "PENDING_SENT")
Friendship.create!(user_id: 4, friend_id: 1, status: "PENDING_RECEIVED")

Friendship.create!(user_id: 2, friend_id: 3, status: "FRIENDS")
Friendship.create!(user_id: 3, friend_id: 2, status: "FRIENDS")

Friendship.create!(user_id: 2, friend_id: 4, status: "PENDING_RECEIVED")
Friendship.create!(user_id: 4, friend_id: 2, status: "PENDING_SENT")

Friendship.create!(user_id: 2, friend_id: 5, status: "PENDING_RECEIVED")
Friendship.create!(user_id: 5, friend_id: 2, status: "PENDING_SENT")


Friendship.create!(user_id: 2, friend_id: 6, status: "PENDING_SENT")
Friendship.create!(user_id: 6, friend_id: 2, status: "PENDING_RECEIVED")

Friendship.create!(user_id: 8, friend_id: 2, status: "PENDING_RECEIVED")
Friendship.create!(user_id: 2, friend_id: 8, status: "PENDING_SENT")


Friendship.create!(user_id: 2, friend_id: 9, status: "FRIENDS")
Friendship.create!(user_id: 9, friend_id: 2, status: "FRIENDS")


Friendship.create!(user_id: 2, friend_id: 10, status: "FRIENDS")
Friendship.create!(user_id: 10, friend_id: 2, status: "FRIENDS")


Friendship.create!(user_id: 2, friend_id: 11, status: "FRIENDS")
Friendship.create!(user_id: 11, friend_id: 2, status: "FRIENDS")





