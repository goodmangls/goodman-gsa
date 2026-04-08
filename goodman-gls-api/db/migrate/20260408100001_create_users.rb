class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string  :email,                      null: false
      t.string  :password_digest,            null: false
      t.string  :name
      t.string  :role,                       null: false, default: "partner"
      t.string  :status,                     null: false, default: "pending"
      t.string  :email_verification_token
      t.datetime :email_verified_at
      t.string  :password_reset_token
      t.datetime :password_reset_sent_at
      t.string  :refresh_token_jti
      t.timestamps
    end
    add_index :users, "LOWER(email)", unique: true, name: "index_users_on_lower_email"
  end
end
