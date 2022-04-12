class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_one :user
  has_many :recipes
end
