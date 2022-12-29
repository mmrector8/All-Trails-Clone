class AddNames < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :fname, :string,  null: false
    add_column :users, :lname, :string, null: false
  end
end
