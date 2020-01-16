class PowersController < ApplicationController
  before_action :set_power, only: [:show, :edit, :update]

  def index
    @powers = Power.all
  end

  def show
  end

  def edit
    @heroines = Heroine.all
  end

  def update
    @power.update(power_params)

    if @power.valid?
      redirect_to @power
    else
      flash[:errors] = @power.errors.full_messages
      redirect_to edit_power_path(@power)
    end
  end

  private 

  def power_params
    params.require(:power).permit(:name, :description, heroine_ids: [])
  end

  def set_power
    @power = Power.find(params[:id])
  end
end
