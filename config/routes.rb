Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resources :hikes, only: [:create, :index, :show]
      resources :parks, only: [:show]
      resources :hikes do
        resources :reviews, only: [:create, :update, :destroy]
      end
      resource :session, only: [:show, :create, :destroy]
      get '/search', to: 'searches#search_filter'
  end

  get '*path', to: 'static_pages#frontend'
end
