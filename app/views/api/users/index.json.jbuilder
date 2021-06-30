
if (logged_in?)

  json.users do
    @users.each do |user|
      json.set! user.id do
        json.partial! "api/users/user", user: user
      end
    end
  end

  json.users_results @users.map { |user| user.id }

  json.profiles do
    @users.each do |user|
      json.set! user.profile.id do
        json.partial! "api/profiles/profile", profile: user.profile
      end
    end
  end

end