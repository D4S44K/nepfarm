module Api
  module V1
    class ProductsController < ApplicationController
      include EnsureUser
      before_action :authenticate_user, only: [:create, :edit_product, :delete_product, :view_products, :view_own_products]
      before_action :is_farmer?, only: [:view_own_products, :delete_product, :edit_product]
      before_action :is_consumer?, only: [:view_products]

      # POST api/v1/add_product
      def create
        product = current_user.products.new(product_params)
        if product.save
          render jsonapi: product, code: '200', status: :ok
        else
          render jsonapi_errors: product.errors, code: '422', status: :unprocessable_entity
        end
      end
          
      # PATCH api/v1/edit_product
      def edit_product
        product = current_user.products.find_by(id: params[:id])
        if product.present?
          begin
            product.update!(product_params)
            render jsonapi: product, code: '200', status: :ok
          rescue Exception => e 
            render jsonapi_errors: {title: "Invalid product or fields, please try again"}, code: "422", status: :unprocessable_entity
          end
        else
          render jsonapi_errors: {title: "Invalid product, please try again"}, code: "422", status: :unprocessable_entity
        end
      end

      # POST /api/v1/delete_product
      def delete_product
        product = current_user.products.find_by(id: params[:id])
        if product.present?
          product.destroy
          render jsonapi:[], code: '200', status: :ok
        else
          render jsonapi_errors: {title: "Product doesnot exist."}, code: '404', status: :not_found
        end
      end

      # GET /api/v1/view_products
      def view_products
        farmer = User.find_by(user_type: "farmer", id: params[:id])
        if farmer.present?
          products = Product.where(user_id: user_id)
          render jsonapi: products, status: :ok, code: '200'
        else
          render jsonapi_errors: {title: "Bad Request"}, code: '400', status: :bad_request
        end
      end

      # GET /api/v1/view_own_products
      def view_own_products
        products = current_user.products
        render jsonapi: products, status: :ok, code: '200'
      end

      private

      def product_params
          params.require(:product).permit(:quantity, :quantity_unit, :unit_price, :produce_option_id)
      end
    end
  end
end
