class RemoveParkTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :parks
  end
end
