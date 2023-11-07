class CreateProduceOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :produce_options do |t|
      t.string :name

      t.timestamps
    end
  end
end
