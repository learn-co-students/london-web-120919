class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.string :location
      t.integer :duration

      t.timestamps null: false
    end
  end
end
