class CreateLineItems < ActiveRecord::Migration[7.0]
  def change
    create_table :line_items do |t|
      t.references :product, null: false, foreign_key: true
      t.integer :desired_quantity
      t.integer :desired_unit
      t.integer :farmer_id
      t.references :order, null: false, foreign_key: true
      t.float :total_price

      t.timestamps
    end
  end
end
