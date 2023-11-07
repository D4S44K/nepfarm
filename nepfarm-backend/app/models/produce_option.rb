# == Schema Information
#
# Table name: produce_options
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProduceOption < ApplicationRecord
  has_many :products
  validates :name, presence: true, uniqueness: true
end
