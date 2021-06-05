class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :current_city
      t.string :hometown
      t.references :relationship_status, foreign_key: true, index: { unique: false }, null: true
      t.references :user, foreign_key: true, index: { unique: true }, null: false
      t.timestamps
    end
  end
end
