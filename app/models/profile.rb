# == Schema Information
#
# Table name: profiles
#
#  id                     :bigint           not null, primary key
#  current_city           :string
#  hometown               :string
#  relationship_status_id :bigint
#  user_id                :bigint           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  biography              :string
#
class Profile < ApplicationRecord

  belongs_to :user
  belongs_to :relationship_status, optional: true

  has_one_attached :cover_photo
  has_one_attached :profile_picture

end
