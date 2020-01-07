class PatientsController < ApplicationController

  # GET: /patients
  get "/patients" do
    @patients = Patient.all
    erb :"/patients/index.html"
  end

  # GET: /patients/new
  get "/patients/new" do
    erb :"/patients/new.html"
  end

  # POST: /patients
  post "/patients" do
    patient = Patient.create(params["patient"])
    redirect "/patients/#{patient.id}"
  end

  # GET: /patients/5
  get "/patients/:id" do
    @patient = Patient.find(params["id"])
    erb :"/patients/show.html"
  end

  # GET: /patients/5/edit
  get "/patients/:id/edit" do
    @patient = Patient.find(params["id"])
    erb :"/patients/edit.html"
  end

  # PATCH: /patients/5
  patch "/patients/:id" do
    patient = Patient.find(params["id"])
    patient.update(params["patient"])
    redirect "/patients/:id"
  end

  # DELETE: /patients/5/delete
  delete "/patients/:id/delete" do
    patient = Patient.find(params["id"])
    patient.destroy
    redirect "/patients"
  end
end
