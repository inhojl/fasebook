# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :bigint           not null
#  wall_id    :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord

  validates :body, presence: true

  has_one_attached :photo

  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :wall, class_name: :User, foreign_key: :wall_id

  has_many :comments, dependent: :destroy

  has_many :likes, as: :likeable, dependent: :destroy

  

end
