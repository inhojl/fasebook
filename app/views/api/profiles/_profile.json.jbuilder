json.extract! profile, :id, :current_city, :hometown, :relationship_status_id, :user_id, :biography

json.profile_pic_url  profile.profile_picture.attached? ? url_for(profile.profile_picture) : ""
json.cover_photo_url  profile.cover_photo.attached? ? url_for(profile.cover_photo) : ""
