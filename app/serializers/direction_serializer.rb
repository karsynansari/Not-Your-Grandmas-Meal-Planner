class DirectionSerializer < ActiveModel::Serializer
  attributes :id, :step, :instructions
  has_one :recipe
end
