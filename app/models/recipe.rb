class Recipe < ApplicationRecord
  belongs_to :user
  has_many :directions, dependent: :destroy 
  has_many :ingredients, dependent: :destroy
end
