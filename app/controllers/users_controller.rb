class UsersController < ApplicationController

  def index
  users = User.all 
  render json: users, include: ["meal_plans", "meal_plans.recipes"]
  end 

    def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, include: ["meal_plans", "meal_plans.recipes"]
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid? 
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
    end
  end 

  private

  def user_params
    params.permit(:username)
  end
end
