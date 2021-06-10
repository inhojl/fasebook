

json.users do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :first_name, :last_name
      json.profile_id friend.profile.id
    end
  end
end

json.profiles do
  @user.friends.each do |friend|
    json.set! friend.profile.id do
      json.profile_pic_url url_for(friend.profile.profile_picture) if friend.profile.profile_picture.attached?
    end
  end
end