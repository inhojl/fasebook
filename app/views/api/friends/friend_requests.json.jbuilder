
json.users do
  @user.friend_request_senders.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end

  json.set! current_user.id do
    json.partial! 'api/users/user', user: current_user
    json.friend_requester_ids current_user.friend_request_senders.ids
  end
end

json.profiles do
  @user.friend_request_senders.each do |user|
    json.set! user.profile.id do
      if user.profile.profile_picture.attached?
        json.profile_pic_url url_for(user.profile.profile_picture)
      else
        json.profile_pic_url ""
      end
    end
  end
end