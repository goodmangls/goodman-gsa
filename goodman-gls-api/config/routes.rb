Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      # Auth (public)
      post "auth/login",           to: "auth#login"
      post "auth/register",        to: "auth#register"
      post "auth/refresh",         to: "auth#refresh"
      get  "auth/me",              to: "auth#me"
      post "auth/verify-email",    to: "auth#verify_email"
      post "auth/forgot-password", to: "auth#forgot_password"
      post "auth/reset-password",  to: "auth#reset_password"

      # Quotes (authenticated + guest)
      resources :quotes, only: [:index, :show, :create, :update, :destroy]
      post "quotes/public", to: "quotes#create_public"

      # Contact (public)
      post "contact", to: "contact#create"

      # Company (authenticated — user's own)
      resource :company, only: [:show, :create, :update]

      # Users (admin only)
      resources :users, only: [:index, :update, :destroy]
    end
  end

  match "*path", to: "application#set_cors_headers", via: :options
end
