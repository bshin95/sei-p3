class User < ApplicationRecord
  # has_secure_password

  validates :username, uniqueness: true, presence: true
  validates :password_digest, length: { minimum: 6 }
  
  has_many :properties, dependent: :destroy
end
