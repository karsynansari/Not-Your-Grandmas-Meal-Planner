class RecipesController < ApplicationController

  def index
    recipes = Recipe.all 
    render json: recipes
  end
  # t.string "cuisine"
  #   t.string "title"
  #   t.string "image"
  #   t.string "meal_type"
  #   t.integer "serving"
  #   t.string "prep_time"
  #   t.string "cook_time"
  #   t.bigint "user_id"
   def create
    newrecipe = Recipe.create(recipe_params)
    render json: newrecipe, status: :created 
  end 

  private
  def recipe_params
    params.permit(:title, :image, :meal_type, :serving, :prep_time, :cook_time, :user_id)
  end 

end
