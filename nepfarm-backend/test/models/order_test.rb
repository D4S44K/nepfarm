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
require "test_helper"

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
