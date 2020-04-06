class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.string :zipcode
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
