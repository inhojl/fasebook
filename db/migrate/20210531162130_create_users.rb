class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :username
      t.string :session_token, null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birthdate, null: false
      t.references :gender, foreign_key: true, index: { unique: false }, null: false
      t.timestamps
    end
  end
end
