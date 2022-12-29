class AddIndexToParkName < ActiveRecord::Migration[7.0]
  def change
    add_index :parks, :name, unique: true
  end
end
