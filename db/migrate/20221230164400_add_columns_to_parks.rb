class AddColumnsToParks < ActiveRecord::Migration[7.0]
  def change
    add_column :parks, :state, :string, null: false
    add_column :parks, :description, :text, null: false
    change_column_null :hikes, :park_id, true
  end
end
