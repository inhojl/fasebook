# == Schema Information
#
# Table name: genders
#
#  id        :bigint           not null, primary key
#  label     :string
#  parent_id :bigint
#
class Gender < ApplicationRecord
  
  belongs_to :parent, class_name: :Gender, foreign_key: :parent_id, optional: true

  has_many :users
  has_many :children, class_name: :Gender, foreign_key: :parent_id

  validates :label, presence: true

end
