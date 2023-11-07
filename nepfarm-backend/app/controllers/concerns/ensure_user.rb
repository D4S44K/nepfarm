module EnsureUser
  extend ActiveSupport::Concern 

  def is_farmer?
    return if current_user.user_type == "farmer"

    render jsonapi_error: {title: "Forbidden"}, code: '403', status: :forbidden
  end

  def is_consumer?
    return if current_user.user_type == "consumer"
  
    render jsonapi_error: {title: "Forbidden"}, code: '403', status: :forbidden
  end
end
