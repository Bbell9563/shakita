class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:destroy, :update]
  def index
    render json: Appointment.all
  end

  def create
    appointment = Appointment.new(appointment_params)
    if appointment.save
      render json: appointment
    else
      render json: appointment.errors, status: 422
    end
  end

  def reserved_appointments

  end 

  def destroy
    @appointment.destroy
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: 422
    end
  end

  private
    def appointment_params
      params.require(:appointment).permit(:user_id, :time, :date, :type)
    end

    def set_appointment
      @appointment = Appointment.find(params[:id])
    end
end
