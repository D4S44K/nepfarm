require "jwt"

module JwtToken
  extend ActiveSupport::Concern 
  APP_SECRET = Rails.application.credentials.app_secret

	def self.jwt_encode(payload)
		payload[:exp] = (7.days.from_now).to_i
		JWT.encode payload, APP_SECRET, 'HS256'
	end

	def self.jwt_decode(token)
		JWT.decode token, APP_SECRET, true, {algorithm: 'HS256'}
	end
end
