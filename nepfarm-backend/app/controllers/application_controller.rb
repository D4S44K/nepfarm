class ApplicationController < ActionController::API
  include JwtToken
  attr_accessor :current_user

  private

  def authenticate_user
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    return head :unauthorized unless header.present?
    begin
      decoded = JwtToken.jwt_decode(header)
      user_id = decoded.first['user_id']
      @current_user = User.find_by(id: user_id)
      head :unauthorized unless @current_user
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      head :unauthorized
    end
  end

  def current_user
    @current_user
  end
end
