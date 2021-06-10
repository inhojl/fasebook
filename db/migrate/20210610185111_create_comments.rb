class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.bigint :author_id, index: { unique: false }, null: false
      t.bigint :post_id, index: { unique: false }, null: false
      t.bigint :parent_id, index: { unique: false }
      t.text :body, null: false
      t.timestamps
    end
    add_foreign_key :comments, :users, column: :author_id
    add_foreign_key :comments, :posts
    add_foreign_key :comments, :comments, column: :parent_id
  end
end
