# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_30_210500) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hikes", force: :cascade do |t|
    t.bigint "park_id"
    t.string "name", null: false
    t.string "city", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "zipcode", null: false
    t.string "difficulty", null: false
    t.text "description"
    t.integer "elevation_gain", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "duration", null: false
    t.string "route_type", null: false
    t.string "estimated_time", null: false
    t.index ["name"], name: "index_hikes_on_name", unique: true
    t.index ["park_id"], name: "index_hikes_on_park_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name", null: false
    t.string "county", null: false
    t.string "city", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "zipcode", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "state", null: false
    t.text "description", null: false
    t.index ["name"], name: "index_parks_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "hikes", "parks"
end
