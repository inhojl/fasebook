class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.bigint :user_id, index: { unique: false }, null: false
      t.bigint :friend_id, index: { unique: false }, null: false
      t.string :status, null: false
      t.timestamps
    end
    add_index :friendships, [:user_id, :friend_id], unique: true
    add_foreign_key :friendships, :users, column: :user_id
    add_foreign_key :friendships, :users, column: :friend_id
  end
end
