class AppointmentsController < ApplicationController

  get "/appointments" do
    @appointments = Appointment.all
    erb :"appointments/index.html"
  end

  get "/appointments/new" do
    @doctors = Doctor.all
    @patients = Patient.all
    erb :"appointments/new.html"
  end

  post "/appointments" do 
    appointment = Appointment.create(params["appointment"])
    redirect "/appointments/#{appointment.id}"
  end

  get "/appointments/:id" do
    @appointment = Appointment.find(params["id"])
    erb :"appointments/show.html"
  end
  
end
