class Api::UsersController < ApplicationController
  def index 
    render json: User.all
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
  end
end
