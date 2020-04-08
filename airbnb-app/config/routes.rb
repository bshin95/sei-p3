Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :cities

  resources :properties
  get '/properties/host', to: 'properties#host', as: :host
  get '/properties/host/start', to: 'properties#start', as: :start

  resources :users
end