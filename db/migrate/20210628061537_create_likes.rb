class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.bigint :liker_id, null: false, index: { unique: false }
      t.bigint :likeable_id, null: false
      t.string :likeable_type, null: false
      t.timestamps
    end
    add_index :likes, [:likeable_type, :likeable_id]
  end


end
