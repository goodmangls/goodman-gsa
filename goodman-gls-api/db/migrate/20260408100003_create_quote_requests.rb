class CreateQuoteRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :quote_requests do |t|
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true
      t.string  :reference_no
      t.boolean :is_guest,      default: false
      t.string  :guest_name
      t.string  :guest_email
      t.string  :guest_company
      t.string  :guest_phone
      t.string  :service_type,  null: false
      t.string  :shipment_type, null: false
      t.string  :origin,        null: false
      t.string  :destination,   null: false
      t.text    :cargo_details, null: false
      t.decimal :weight,        precision: 10, scale: 2
      t.string  :dimensions
      t.string  :commodity
      t.string  :status,        null: false, default: "pending"
      t.decimal :quoted_rate,   precision: 12, scale: 2
      t.string  :currency,      default: "USD"
      t.datetime :valid_until
      t.text    :notes
      t.datetime :responded_at
      t.string  :responded_by
      t.timestamps
    end
    add_index :quote_requests, :reference_no, unique: true
    add_index :quote_requests, :status
    add_index :quote_requests, [:user_id, :created_at]
  end
end
