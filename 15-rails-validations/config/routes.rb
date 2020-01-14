Rails.application.routes.draw do
  resources :reviews, only: [:new, :create, :show]
  resources :users, only: [:index, :show, :new, :create, :edit, :update]
  get '/films', to: 'films#index'
  get '/films/new', to: 'films#new', as: 'new_film'
  get '/films/:id', to: 'films#show', as: 'film'
  get '/films/:id/edit', to: 'films#edit', as: 'edit_film'
  post '/films', to: 'films#create'
  patch '/films/:id', to: 'films#update'
  delete '/films/:id', to: 'films#destroy'
  delete '/films/:id/delete', to: 'films#destroy', as: 'delete_film'

  # resources :users

  # get '/signup', to: 'users#signup'

  # resources :films

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
