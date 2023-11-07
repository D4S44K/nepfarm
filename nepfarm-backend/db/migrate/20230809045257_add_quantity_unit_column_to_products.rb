class AddQuantityUnitColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :quantity_unit, :integer
  end
end
