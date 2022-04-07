class Recipe < ApplicationRecord
  belongs_to :user
  has_many :directions
  has_many :ingredients
end
