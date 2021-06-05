json.user do
   json.partial! "api/users/user", user: @user
end
json.profile do 
  json.partial! "api/users/profile", profile: @user.profile
end