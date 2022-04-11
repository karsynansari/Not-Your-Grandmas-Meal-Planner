class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :user
  has_many :recipes
end
