class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :cuisine, :title, :image, :meal_type, :serving, :prep_time, :cook_time
  has_one :user

end
