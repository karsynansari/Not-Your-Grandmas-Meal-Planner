class RecipeMealPlansController < ApplicationController

  def index
    recipemealplans = RecipeMealPlan.all 
    render json: recipemealplans
  end 

  def create
    recipemealplans = RecipeMealPlan.create(recipe_meal_plan_params)
    render json: recipemealplans, status: :created 
  end 

  private

  def recipe_meal_plan_params
    params.permit(:recipe_id, :meal_plan_id)
  end 
end
