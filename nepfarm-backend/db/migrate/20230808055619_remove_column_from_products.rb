class RemoveColumnFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :product_name, :string
  end
end
