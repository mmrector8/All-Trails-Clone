class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :hike, null: false, foreign_key: true
      t.text :content, null: false
      t.integer :stars, null: false
      t.string :activity_type, null: false
      t.string :conditions

      t.timestamps
    end
  end
end
