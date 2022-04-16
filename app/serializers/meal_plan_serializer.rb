class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_one :user
  has_many :recipes
  has_many :recipe_meal_plans
end
