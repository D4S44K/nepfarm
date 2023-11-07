# == Schema Information
#
# Table name: profiles
#
#  id              :bigint           not null, primary key
#  profile_picture :string
#  user_id         :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require "test_helper"

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
