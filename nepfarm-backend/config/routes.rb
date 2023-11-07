Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      post "signup_farmer", to: "users#create_farmer"
      post "signup_consumer", to: "users#create_consumer"
      post "farmer_login", to: "sessions#farmer_login"
      post "consumer_login", to: "sessions#consumer_login"
      post "forget_password", to: "passwords#forget_password"
      patch "reset_password", to: "passwords#reset_password"
      get "user_details", to: "users#show"
      post "add_product", to: "products#create"
      patch "edit_product", to: "products#edit_product"
      post "delete_product", to: "products#delete_product"
      get "view_products", to: "products#view_products"
      get "view_own_products", to: "products#view_own_products"
      get "view_farmers", to: "users#view_farmers"
      post "create_order", to: "orders#create_order"
      post "cancel_order", to: "orders#cancel_order"
      patch "confirm_order", to: "orders#confirm_order"
      patch "complete_order", to: "orders#complete_order"
      get "view_own_orders", to: "orders#view_own_orders"
    end
  end
end