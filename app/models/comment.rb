# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :bigint           not null
#  post_id    :bigint           not null
#  parent_id  :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :post
  belongs_to :parent, class_name: :Comment, foreign_key: :parent_id, optional: true

  has_many :comments, class_name: :Comment, foreign_key: :parent_id
end
