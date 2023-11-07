# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  full_name     :string
#  email         :string
#  password_hash :string
#  address       :string
#  phone_number  :string
#  user_type     :integer          default("farmer")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'bcrypt'
class User < ApplicationRecord
	include BCrypt
	
  enum user_type: { farmer: 0, consumer: 1}

	VALID_PHONE_REGEX = /\A\d{10}\z/
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
	validates :phone_number, presence: true, uniqueness: true, format: {with: VALID_PHONE_REGEX, message: "Must be a valid phone number"}
	validates :user_type, presence: true
	validates :full_name, presence: true
	validates_presence_of :password_hash
	validates :email, format: {with: VALID_EMAIL_REGEX, message: "Must be a valid email address"}

	has_one :profile
	has_one :public_profile
	has_many :products
	has_many :orders, foreign_key: 'consumer_id'
	has_many :line_items, through: :orders
	accepts_nested_attributes_for :profile
	accepts_nested_attributes_for :public_profile

	def password
    @password ||= Password.new(password_hash)
  end

def password=(new_password)
	if new_password.present?
	  if /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.match?(new_password)
		@password = Password.create(new_password)
		self.password_hash = @password
	  else
		errors.add(:password, 'Must be a valid password with at least one uppercase letter, one digit, one special character, and a length of 8 character')
		raise ActiveRecord::RecordInvalid.new(self)
	  end
	else
	  errors.add(:password, 'is required')
	  raise ActiveRecord::RecordInvalid.new(self)
	end
  end
  
end
