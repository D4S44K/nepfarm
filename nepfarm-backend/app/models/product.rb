# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  user_id           :bigint           not null
#  unit_price        :float
#  produce_option_id :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  quantity_unit     :integer
#  quantity          :integer
#
class Product < ApplicationRecord
  belongs_to :user
  belongs_to :produce_option

  enum quantity_unit: { g: 0, kg: 1, cwt: 2}

  VALID_PRICE_REGEX = /\A^(?:[1-9]\d*|0)?(?:\.\d+)?$\z/
  VALID_QUANTITY_REGEX = /\A^[1-9]+\d*$\z/

  validates :user_id, presence: true
  validates :unit_price, presence: true, format: {with: VALID_PRICE_REGEX, message: "Must be a positive number"}
  validates :quantity_unit, presence: true
  validates :produce_option_id, presence: true
  validates :quantity, presence: true, format: {with: VALID_QUANTITY_REGEX, message: "Must be a positive integer"}

end
