class Like < ApplicationRecord
  belongs_to :likeable, polymorphic: true
  belongs_to :liker, foreign_key: :liker_id, class_name: :User
  validates :liker_id, uniqueness: { scope: [:likeable_id, :likeable_type] }
end
