class CreateHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :hikes do |t|
      t.references :park, null: false, foreign_key: true
      t.string :name, null: false
      t.string :city, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :zipcode, null: false
      t.string :difficulty, inclusion: {in: ['easy', 'medium', 'hard']}, null: false
      t.integer :est_time, null: false
      t.text :description 
      t.integer :elevation_gain, null: false

      t.timestamps
    end
    add_index :hikes, :name, unique: true
  end
end
