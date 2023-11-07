class RemoveQuanityColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :quanity, :float
  end
end
