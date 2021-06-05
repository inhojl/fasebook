class CreateRelationshipStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :relationship_statuses do |t|
      t.string :label, null: false
    end
  end
end
