class SerializableOrder < JSONAPI::Serializable::Resource
    type "orders"
    
    attributes :desired_delivery, :consumer_id, :order_status, :combined_price, :line_items
  end