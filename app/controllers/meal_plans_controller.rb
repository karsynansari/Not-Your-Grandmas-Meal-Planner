class MealPlansController < ApplicationController

  def index
  mealplans = MealPlan.all 
  render json: mealplans 
  end 

  def create
    mealplan = MealPlan.create(meal_plan_params)
    render json: mealplan, status: :created 
  end 

  def destroy
    mealplan = MealPlan.find(params[:id])
    if mealplan
      mealplan.destroy
      head :no_content 
    else render json: {error: "mealplan not found"}, status: :not_found
    end 
  end 

  private
  def meal_plan_params
  params.permit(:title, :user_id)
  end 
end
