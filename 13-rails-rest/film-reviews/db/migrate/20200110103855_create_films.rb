class CreateFilms < ActiveRecord::Migration[6.0]
  def change
    create_table :films do |t|
      t.string :title
      t.integer :runtime
      t.string :director
      t.string :genre
      t.date :release_date

      t.timestamps
    end
  end
end
