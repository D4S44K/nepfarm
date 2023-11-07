# == Schema Information
#
# Table name: public_profiles
#
#  id           :bigint           not null, primary key
#  description  :text
#  produce_list :text             default([]), is an Array
#  user_id      :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class PublicProfile < ApplicationRecord
    belongs_to :user
end
