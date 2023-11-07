class SerializableUser < JSONAPI::Serializable::Resource
  type "users"

	attributes :full_name, :address, :email, :phone_number, :user_type
end