class RecipeMealPlansController < ApplicationController

  def index
    recipemealplans = RecipeMealPlan.all 
    render json: recipemealplans
  end 

# this is to delete a recipe from a meal plan 
 def destroy
   recipemealplan = RecipeMealPlan.find_by(recipe_id: params[:recipe_id], meal_plan_id: params[:meal_plan_id])
    if recipemealplan
    recipemealplan.destroy
    render json: recipemealplan.recipe
    else render json: {error: "recipemealplan not found"}, status: :not_found
    end 
  end 

  def create
    recipemealplans = RecipeMealPlan.create(recipe_meal_plan_params)
    render json: recipemealplans.recipe, status: :created 
  end 


  private

  def recipe_meal_plan_params
    params.permit(:recipe_id, :meal_plan_id)
  end 
  
end
