class AddBioToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :biography, :string
  end
end
