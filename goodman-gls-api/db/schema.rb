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

ActiveRecord::Schema[8.0].define(version: 2026_04_08_100004) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "companies", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "country", null: false
    t.string "city"
    t.string "address"
    t.string "phone"
    t.string "website"
    t.string "company_type", null: false
    t.string "iata_code"
    t.boolean "wca_member", default: false
    t.boolean "mpl_member", default: false
    t.boolean "ean_member", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_companies_on_user_id", unique: true
  end

  create_table "contact_messages", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "company"
    t.string "phone"
    t.string "subject"
    t.text "message", null: false
    t.string "status", default: "new"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quote_requests", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "company_id"
    t.string "reference_no"
    t.boolean "is_guest", default: false
    t.string "guest_name"
    t.string "guest_email"
    t.string "guest_company"
    t.string "guest_phone"
    t.string "service_type", null: false
    t.string "shipment_type", null: false
    t.string "origin", null: false
    t.string "destination", null: false
    t.text "cargo_details", null: false
    t.decimal "weight", precision: 10, scale: 2
    t.string "dimensions"
    t.string "commodity"
    t.string "status", default: "pending", null: false
    t.decimal "quoted_rate", precision: 12, scale: 2
    t.string "currency", default: "USD"
    t.datetime "valid_until"
    t.text "notes"
    t.datetime "responded_at"
    t.string "responded_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_quote_requests_on_company_id"
    t.index ["reference_no"], name: "index_quote_requests_on_reference_no", unique: true
    t.index ["status"], name: "index_quote_requests_on_status"
    t.index ["user_id", "created_at"], name: "index_quote_requests_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_quote_requests_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "name"
    t.string "role", default: "partner", null: false
    t.string "status", default: "pending", null: false
    t.string "email_verification_token"
    t.datetime "email_verified_at"
    t.string "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.string "refresh_token_jti"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index "lower((email)::text)", name: "index_users_on_lower_email", unique: true
  end

  add_foreign_key "companies", "users"
  add_foreign_key "quote_requests", "companies"
  add_foreign_key "quote_requests", "users"
end
