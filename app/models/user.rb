# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string
#  session_token   :string           not null
#  password_digest :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthdate       :date             not null
#  gender_id       :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  attr_reader :password

  belongs_to :gender

  has_one :profile, :dependent => :destroy

  # has_many :pending_sent_friendships, -> { where(friendship: { status: "PENDING_SENT"}) }
  # has_many :pending_received_friendships, -> { where(friendship: { status: "RECEIVED"}) }
  # has_many :friend_friendships, -> { where(friendship: { status: "FRIENDS"}) }, class_name: :Friendship, foreign_key: :user_id

  has_many :friendships, :dependent => :destroy
  has_many :friends, -> { where(friendships: { status: "FRIENDS" }) }, through: :friendships, source: :friend
  has_many :friend_request_senders, -> { where(friendships: { status: "PENDING_RECEIVED" }) }, through: :friendships, source: :friend
  has_many :friend_request_receivers, -> { where(friendships: { status: "PENDING_SENT" }) }, through: :friendships, source: :friend

  has_many :wall_posts, class_name: :Post, foreign_key: :wall_id, dependent: :destroy
  has_many :authored_posts, class_name: :Post, foreign_key: :author_id, dependent: :destroy



  has_many :authored_comments, class_name: :Comment, foreign_key: :author_id

  validates :email, presence: { message: "What's your email?" }, uniqueness: { message: "This email has already been taken." }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :first_name, presence: { message: "What's your first name?" }
  validates :last_name, presence: { message: "What's your last name?" }
  validates :birthdate, presence: { message: "When's your birthday?" }
  validates :gender_id, presence: { message: "What's your gender?" }


  validates :password, presence: { message: "What's your password?"}, length: { minimum: 6, message: "Password must contain at least 6 characters." }, allow_nil: true

  after_initialize :ensure_session_token, :ensure_profile

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_profile
    self.build_profile if !self.profile
  end

  def newsfeed
    friend_ids = []
    self.friends.each do |friend|
      friend_ids.push(friend.id)
    end
    Post.where('author_id IN (?) OR author_id = ?', friend_ids, self.id ).to_a
  end

end
