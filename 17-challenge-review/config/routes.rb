Rails.application.routes.draw do
  resources :powers, only: [:index, :show, :edit, :update]
  resources :heroines, only: [:index, :show, :new, :create]  
end
