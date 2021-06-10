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
  email: 'joe@email.com',
  first_name: 'Joe',
  last_name: 'Johnson',
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
  first_name: 'Royce',
  last_name: 'Wayne',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: '123456'
)


user4 = User.create!(
  email: 'user2@fasebook.com',
  first_name: 'Bob',
  last_name: 'Wayne',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: '123456'
)


user5 = User.create!(
  email: 'user3@fasebook.com',
  first_name: 'Dillan',
  last_name: 'Wayne',
  birthdate: Date.new(2000, 12, 25),
  gender_id: 1,
  password: '123456'
)


Friendship.create!(user_id: 1, friend_id: 2, status: "PENDING_SENT")
Friendship.create!(user_id: 2, friend_id: 1, status: "PENDING_RECEIVED")

Friendship.create!(user_id: 1, friend_id: 4, status: "PENDING_SENT")
Friendship.create!(user_id: 4, friend_id: 1, status: "PENDING_RECEIVED")

Friendship.create!(user_id: 2, friend_id: 3, status: "FRIENDS")
Friendship.create!(user_id: 3, friend_id: 2, status: "FRIENDS")


Post.create(author_id: 2, wall_id: 3, body: "YOOOO WHAT's UP")
Post.create(author_id: 3, wall_id: 1, body: "HEYYY WHAT's UP")
Post.create(author_id: 2, wall_id: 2, body: "YOOO IMPOSTING TO MYSELF")
Post.create(author_id: 2, wall_id: 3, body: "YOOOO WHAT's UP")


Comment.create(author_id: 2, post_id: 2, body: "im commenting on user1s post!")
Comment.create(author_id: 2, post_id: 2, body: "im commenting on a comment", parent_id: 1)