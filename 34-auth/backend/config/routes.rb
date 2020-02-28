Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/sign-in", to: "users#sign_in"
  get "/validate", to: "users#validate"
  get "/items", to: "users#items"
end
