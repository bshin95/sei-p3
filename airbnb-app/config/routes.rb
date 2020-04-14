Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :cities 

  resources :properties
  get '/properties/host', to: 'properties#host', as: :host

  get '/cities/:city_id/properties', to: 'properties#index', as: :index

  get '/properties/host/start', to: 'properties#start', as: :start

  get '/users/current-user', to: 'users#current_user', as: :current_user

  resources :users
  
  # get '/users/:id/properties/:id', to: 'users#properties', as: :listings
end