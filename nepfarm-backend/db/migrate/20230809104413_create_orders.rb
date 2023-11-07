class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.datetime :desired_delivery
      t.integer :consumer_id
      t.integer :order_status
      t.float :combined_price

      t.timestamps
    end
  end
end
