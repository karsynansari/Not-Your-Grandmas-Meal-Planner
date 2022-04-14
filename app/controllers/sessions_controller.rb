class SessionsController < ApplicationController

  # need error handling for this if username isn't found
   def create
    user = User.find_by!(username: params[:username])
     if user&.authenticate(params[:password])
    session[:user_id] = user.id
    render json: user, status: :created
     else 
      render json: { error: "Invalid username or password" }, status: :unauthorized
     end 
    end
 
  def destroy
    session.delete :user_id
    render json: {message: "user logged out"}
  end 
end
