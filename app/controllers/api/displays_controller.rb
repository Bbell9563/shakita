class Api::DisplaysController < ApplicationController
  before_action :set_display, only: [:update, :show, :destroy]
  def index 
    render json: Display.all
  end

  def show
    render json: @display
  end

  def create
    display = Display.new(display_params)
    if display.save
      render json: display
    else
      render json: display.errors, status: 422
    end
  end

  def update
    if @display.update(display_params)
      render json: @display
    else
      render json: @display.errors, status: 422
    end
  end

  def destroy
    @display.destroy
  end

  private
    def set_display
      @display = Display.find(params[:id])
    end

    def display_params
      params.require(:display).permit(:title, :message, :font, :size)
    end
end
