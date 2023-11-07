class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.string :password_hash
      t.string :address
      t.string :phone_number
      t.integer :user_type, default: 0
      t.timestamps
    end
    add_index :users, :phone_number
  end
end
