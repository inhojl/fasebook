# == Schema Information
#
# Table name: relationship_statuses
#
#  id    :bigint           not null, primary key
#  label :string           not null
#
class RelationshipStatus < ApplicationRecord

  has_many :profiles
  has_many :users, through: :profiles

  validates :label, presence: true, uniqueness: true
end
