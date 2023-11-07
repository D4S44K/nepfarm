class RemoveQuantityUnitColumnFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :quantity_unit, :string
  end
end
