class Post < ApplicationRecord

  validates :body, presence: true

  has_one_attached :photo

end
