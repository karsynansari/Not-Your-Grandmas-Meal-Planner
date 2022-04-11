class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :meal_plan
  has_many :directions, dependent: :destroy 
  has_many :ingredients, dependent: :destroy
end
