# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  full_name     :string
#  email         :string
#  password_hash :string
#  address       :string
#  phone_number  :string
#  user_type     :integer          default("farmer")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
