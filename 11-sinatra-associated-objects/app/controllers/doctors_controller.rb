class DoctorsController < ApplicationController

  # GET: /doctors
  get "/doctors" do
    @doctors = Doctor.all
    erb :"/doctors/index.html"
  end

  # GET: /doctors/new
  get "/doctors/new" do
    erb :"/doctors/new.html"
  end

  # POST: /doctors
  post "/doctors" do
    doctor = Doctor.create(params["doctor"])
    redirect "/doctors"
  end

  # GET: /doctors/5
  get "/doctors/:id" do
    @doctor = Doctor.find(params[:id])
    erb :"/doctors/show.html"
  end

  # GET: /doctors/5/edit
  get "/doctors/:id/edit" do
    @doctor = Doctor.find(params[:id])
    erb :"/doctors/edit.html"
  end

  # PATCH: /doctors/5
  patch "/doctors/:id" do
    doctor = Doctor.find(params[:id])
    doctor.update(params["doctor"])
    redirect "/doctors/#{doctor.id}"
  end

  # DELETE: /doctors/5
  delete "/doctors/:id" do
    doctor = Doctor.find(params[:id])
    doctor.destroy
    redirect "/doctors"
  end
end
