
json.extract! user, :id, :email, :username, :first_name, :last_name, :birthdate, :gender_id, :wall_post_ids
json.profile_id user.profile.id
json.friend_ids user.friend_ids

if logged_in?
  if current_user.id != user.id
    friendship = current_user.friendships.where('user_id = ? AND friend_id = ?', current_user.id, user.id).first
    json.friendship_status friendship ? friendship.status : nil
  end
end