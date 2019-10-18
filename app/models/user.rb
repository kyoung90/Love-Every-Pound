class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist

  has_many :user_quote_preferences
  has_many :preferences, through: :user_quote_preferences
  
  has_many :weights

  attr_accessor :token

  def on_jwt_dispatch(token, payload)
    self.token = token
  end

end
