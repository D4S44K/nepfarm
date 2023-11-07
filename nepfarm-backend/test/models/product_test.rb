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
require "test_helper"

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
