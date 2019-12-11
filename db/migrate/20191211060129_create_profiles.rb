class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :gender, null: false
      t.integer :age, null: false
      t.integer :prefecture_id, null: false
      t.string  :city
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
