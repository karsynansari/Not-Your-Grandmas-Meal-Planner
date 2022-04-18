class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :recipes, :recipe_meal_plans
  has_one :user
  # has_many :recipes
  # has_many :recipe_meal_plans

  def recipes
  ActiveModel::SerializableResource.new(object.recipes,  each_serializer: RecipeSerializer)
  end 
end
