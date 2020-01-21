Rails.application.routes.draw do
  root to: 'answers#new'
  get '/login', to: 'sessions#login', as: :login
  post '/login', to: 'sessions#authenticate'
  get '/logout', to: 'sessions#logout', as: :logout
  get '/admin', to: 'users#admin', as: :admin_panel
  resources :users
  resources :answers
  resources :questions
  resources :instructors
  resources :cookies
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
