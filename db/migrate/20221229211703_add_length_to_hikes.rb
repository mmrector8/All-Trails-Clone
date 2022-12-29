class AddLengthToHikes < ActiveRecord::Migration[7.0]
  def change
    add_column :hikes, :duration, :string, null: false
  end
end
