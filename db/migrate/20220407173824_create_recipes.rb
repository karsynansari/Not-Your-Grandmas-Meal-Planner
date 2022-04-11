class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :cuisine
      t.string :title
      t.string :image
      t.string :meal_type
      t.integer :serving
      t.string :prep_time
      t.string :cook_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
