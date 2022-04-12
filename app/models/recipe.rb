class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_meal_plans
  has_many :meal_plans, through: :recipe_meal_plans
  has_many :directions, dependent: :destroy 
  has_many :ingredients, dependent: :destroy
end
