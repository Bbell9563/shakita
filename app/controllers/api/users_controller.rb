class Api::UsersController < ApplicationController
  before_action :set_user, only: [:update]
  def index 
    render json: User.all
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
  end
  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :age, :email, :phone, :medical_history, :image, :gender, :role, :password,:id, :provider, :uid, :allow_password_change, :nickname, :created_at, :updated_at )
  end
end
