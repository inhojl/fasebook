Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update] do
      get "/friends", to: "friends#index"
      get "/friend_requests", to: "friends#friend_requests"
    end
    resources :profiles, only: [ :show, :update ]
    resource :session, only: [:create, :destroy]
    resources :relationship_statuses, only: [:index]
    resources :friendships, only: [ :create ]
    patch "/friendships", to: "friendships#update"
    delete "/friendships", to: "friendships#destroy"
  end

  
  
end
