class CreatePublicProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :public_profiles do |t|
      t.text :description
      t.text :produce_list, array:true, default:[]
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
