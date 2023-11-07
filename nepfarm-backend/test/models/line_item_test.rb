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
require "test_helper"

class LineItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
