# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_05_030252) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genders", force: :cascade do |t|
    t.string "label"
    t.bigint "parent_id"
    t.index ["parent_id"], name: "index_genders_on_parent_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "current_city"
    t.string "hometown"
    t.bigint "relationship_status_id"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "biography"
    t.index ["relationship_status_id"], name: "index_profiles_on_relationship_status_id"
    t.index ["user_id"], name: "index_profiles_on_user_id", unique: true
  end

  create_table "relationship_statuses", force: :cascade do |t|
    t.string "label", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username"
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.date "birthdate", null: false
    t.bigint "gender_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["gender_id"], name: "index_users_on_gender_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "genders", "genders", column: "parent_id"
  add_foreign_key "profiles", "relationship_statuses"
  add_foreign_key "profiles", "users"
  add_foreign_key "users", "genders"
end
