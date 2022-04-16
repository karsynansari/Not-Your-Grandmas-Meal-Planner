Rails.application.routes.draw do
  
  resources :recipe_meal_plans, only: [:index, :create]
  resources :meal_plans, only: [:index, :show, :create, :destroy, :update]
  resources :directions, only: [:index]
  resources :ingredients, only: [:index]
  resources :recipes, only: [:index]
  resources :users, only: [:index, :create]
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete '/logout', to: "sessions#destroy"
  # this is to delete a recipe from a meal plan 
  delete "recipe_meal_plans/:recipe_id/:meal_plan_id", to: "recipe_meal_plans#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
