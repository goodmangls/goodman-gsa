class CreateCompanies < ActiveRecord::Migration[8.0]
  def change
    create_table :companies do |t|
      t.references :user, null: false, foreign_key: true, index: { unique: true }
      t.string  :name,         null: false
      t.string  :country,      null: false
      t.string  :city
      t.string  :address
      t.string  :phone
      t.string  :website
      t.string  :company_type, null: false
      t.string  :iata_code
      t.boolean :wca_member,   default: false
      t.boolean :mpl_member,   default: false
      t.boolean :ean_member,   default: false
      t.timestamps
    end
  end
end
