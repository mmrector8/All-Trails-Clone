class AddNullContraintToEstimatedTime < ActiveRecord::Migration[7.0]
  def change
    change_column_null :hikes, :estimated_time, false
  end
end
