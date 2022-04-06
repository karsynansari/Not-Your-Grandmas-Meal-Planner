class SessionsController < ApplicationController

  # need error handling for this if username isn't found
   def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end

  def destroy
    session.delete :user_id
    render json: {message: "user logged out"}
  end 
end
