class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.integer :years_experience
      t.string :speciality

      t.timestamps null: false
    end
  end
end
