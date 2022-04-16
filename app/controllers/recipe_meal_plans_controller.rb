class RecipeMealPlansController < ApplicationController

  def index
    recipemealplans = RecipeMealPlan.all 
    render json: recipemealplans
  end 

# this is to delete a recipe from a meal plan 
 def destroy
  byebug
   recipemealplans = RecipeMealPlan.where(recipe_id: params[:recipe_id], meal_plan_id: params[:meal_plan_id])
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
