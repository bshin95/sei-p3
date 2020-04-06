class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :city
      t.string :country
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
