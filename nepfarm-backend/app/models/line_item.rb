# == Schema Information
#
# Table name: line_items
#
#  id               :bigint           not null, primary key
#  product_id       :bigint           not null
#  desired_quantity :integer
#  desired_unit     :integer
#  farmer_id        :integer
#  order_id         :bigint           not null
#  total_price      :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class LineItem < ApplicationRecord
  belongs_to :product
  belongs_to :order
  belongs_to :farmer, class_name: "User", foreign_key: "farmer_id"
  validates :product_id, :desired_quantity, :desired_unit, :farmer_id, presence: true
  before_create :validate_quantity, :calculate_price

  private

  def validate_quantity
    return if self.desired_quantity <= product.quantity

    errors.add(:desired_quantity, "Desired quantity exceeds available quantity.")
  end

  def calculate_price
    unit_price = product&.unit_price
    unit = self.desired_unit
    base = self.desired_quantity * unit_price
    case unit
    when 0
      self.total_price = base / 100
    when 1
      self.total_price = base
    when 2
      self.total_price = base * 45.3592
    end
  end
end
