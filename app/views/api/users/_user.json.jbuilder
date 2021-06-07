
json.extract! user, :id, :email, :username, :first_name, :last_name, :birthdate, :gender_id
json.profile_id user.profile.id