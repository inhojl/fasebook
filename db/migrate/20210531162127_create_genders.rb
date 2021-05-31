class CreateGenders < ActiveRecord::Migration[5.2]
  def change
    create_table :genders do |t|
      t.string :label
      t.bigint :parent_id, index: { unique: false }
    end
    add_foreign_key :genders, :genders, column: :parent_id
  end
end
