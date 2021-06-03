
json.first_name @user.errors[:first_name]
json.last_name @user.errors[:last_name]
json.email @user.errors[:email]
json.password @user.errors[:password]
json.gender_id @user.errors[:gender_id]
json.birthdate @user.errors[:birthdate]
