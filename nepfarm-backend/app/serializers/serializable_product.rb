class SerializableProduct < JSONAPI::Serializable::Resource
  type "products"
  
  attributes :consumer_id, :desired_delivery
end