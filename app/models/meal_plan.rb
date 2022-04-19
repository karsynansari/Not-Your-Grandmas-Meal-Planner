class MealPlan < ApplicationRecord
  has_many :recipe_meal_plans, dependent: :destroy
  has_many :recipes, through: :recipe_meal_plans
  belongs_to :user
end
