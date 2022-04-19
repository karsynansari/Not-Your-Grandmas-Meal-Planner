class RecipesController < ApplicationController

  def index
    recipes = Recipe.all 
    render json: recipes
  end
  
   def create
    newrecipe = Recipe.create(recipe_params)
    render json: newrecipe, status: :created 
  end 

  private
  def recipe_params
    params.permit(:title, :image, :meal_type, :serving, :prep_time, :cook_time, :user_id)
  end 

end
