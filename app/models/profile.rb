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
#
class Profile < ApplicationRecord

  belongs_to :user
  belongs_to :relationship_status, optional: true

end
