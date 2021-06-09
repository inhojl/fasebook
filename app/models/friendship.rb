# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  friend_id  :bigint           not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
  
  belongs_to :user
  belongs_to :friend, class_name: :User, foreign_key: :friend_id
  
  validates_uniqueness_of :user_id, scope: :friend_id
  validates :status, inclusion: { in: [ "PENDING_SENT", "PENDING_RECEIVED", "FRIENDS"] }
  validate :check_not_self
  
  def check_not_self
    errors.add(:user_id, "can't be the same as friend id") if user_id == friend_id
  end
end
