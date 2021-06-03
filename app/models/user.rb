class User < ApplicationRecord

  attr_reader :password

  belongs_to :gender

  validates :email, presence: { message: "What's your email?" }, uniqueness: { message: "This email has already been taken." }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :first_name, presence: { message: "What's your first name?" }
  validates :last_name, presence: { message: "What's your last name?" }
  validates :birthdate, presence: { message: "When's your birthday?" }
  validates :gender_id, presence: { message: "What's your gender?" }


  validates :password, presence: { message: "What's your password?"}, length: { minimum: 6, message: "Password must contain at least 6 characters." }, allow_nil: true

  after_initialize :ensure_session_token

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

end
