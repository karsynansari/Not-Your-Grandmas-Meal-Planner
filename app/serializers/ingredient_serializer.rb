class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :each_ingredient, :quantity, :measurement
  has_one :recipes
end
