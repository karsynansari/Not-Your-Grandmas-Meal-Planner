class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :each_ingredient
      t.integer :quantity
      t.string :measurement
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
