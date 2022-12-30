class RemoveAndUpdateEstimatedTime < ActiveRecord::Migration[7.0]
  def change
    remove_column :hikes, :est_time
    add_column :hikes, :estimated_time, :string
  end
end
