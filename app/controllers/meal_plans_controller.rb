class MealPlansController < ApplicationController

  def index
  mealplans = MealPlan.all 
  render json: mealplans 
  end 
end
