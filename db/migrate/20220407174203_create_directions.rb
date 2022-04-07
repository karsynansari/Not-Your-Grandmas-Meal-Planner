class CreateDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :directions do |t|
      t.integer :step
      t.string :instructions
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
