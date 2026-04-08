class CreateContactMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :contact_messages do |t|
      t.string :name,    null: false
      t.string :email,   null: false
      t.string :company
      t.string :phone
      t.string :subject
      t.text   :message, null: false
      t.string :status,  default: "new"
      t.timestamps
    end
  end
end
