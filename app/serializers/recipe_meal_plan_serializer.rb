class RecipeMealPlanSerializer < ActiveModel::Serializer
  attributes :id
  has_one :recipe
  has_one :meal_plan
end
