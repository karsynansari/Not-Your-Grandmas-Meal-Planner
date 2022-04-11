class CreateRecipeMealPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_meal_plans do |t|
      t.belongs_to :recipe, null: false, foreign_key: true
      t.belongs_to :meal_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
