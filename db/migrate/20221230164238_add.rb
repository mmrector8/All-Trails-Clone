class Add < ActiveRecord::Migration[7.0]
  def change
    add_column :hikes, :route_type, :string, null: false
  end
end
