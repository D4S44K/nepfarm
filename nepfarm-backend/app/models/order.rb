# == Schema Information
#
# Table name: orders
#
#  id               :bigint           not null, primary key
#  desired_delivery :datetime
#  consumer_id      :integer
#  order_status     :integer
#  combined_price   :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Order < ApplicationRecord
  belongs_to :consumer, class_name: "User", foreign_key: "consumer_id"
  has_many :line_items
  enum order_status: {requested: 0, in_progress: 1, completed: 2, cancelled: 3}
	
  validates :order_status, :consumer_id, :desired_delivery, presence: true
  
  accepts_nested_attributes_for :line_items
  before_create :validate_desired_date
  after_create :calculate_combined_price
  
  private

  def validate_desired_date
    return if self.desired_delivery > Time.now

    errors.add(:desired_delivery, "invalid delivery date")
  end

  def calculate_combined_price
    update(combined_price: line_items.sum(&:total_price))
  end
end
