class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.bigint :author_id, index: { unique: false }, null: false
      t.bigint :wall_id, index: { unique: false }, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_foreign_key :posts, :users, column: :author_id
    add_foreign_key :posts, :users, column: :wall_id
  end
end
