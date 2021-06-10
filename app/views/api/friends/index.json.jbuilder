

json.users do
  @user.friends.each do |friend|
    json.set! friend.id do
      
      json.extract! friend, :id, :first_name, :last_name, :friend_ids
      json.profile_id friend.profile.id
      friendship = current_user.friendships.find_by(friend_id: friend.id)
      json.friendship_status friendship ? friendship.status : nil
    end
  end
end

json.profiles do
  @user.friends.each do |friend|
    json.set! friend.profile.id do
      if friend.profile.profile_picture.attached?
        json.profile_pic_url url_for(friend.profile.profile_picture)
      else
        json.profile_pic_url ""
      end
    end
  end
end