class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name
      t.references :user, null: false, foreign_key: true
      t.float :quanity
      t.float :unit_price
      t.string :quantity_unit
      t.references :produce_option, null: false, foreign_key: true

      t.timestamps
    end
  end
end
