json.extract! profile, :id, :current_city, :hometown, :relationship_status_id, :user_id, :biography

json.profile_pic_url url_for(profile.profile_picture) if profile.profile_picture.attached?
json.cover_photo_url url_for(profile.cover_photo) if profile.cover_photo.attached?
