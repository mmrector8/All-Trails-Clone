class CreateParksTable < ActiveRecord::Migration[7.0]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :county, null: false
      t.string :city, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :zipcode, null: false
      
      t.timestamps
    end
  end
end
