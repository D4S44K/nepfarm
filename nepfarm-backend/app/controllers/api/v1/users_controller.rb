module Api
  module V1
    class UsersController < ApplicationController
      include EnsureUser
      before_action :authenticate_user, only: [:show]
      before_action :is_farmer?, only: [:user_params]
      include JwtToken
      
      # POST /api/v1/signup_farmer
      def create_farmer
        user = User.new(farmer_params)
        user.user_type = "farmer"

        if user.save
          token = JwtToken.jwt_encode(user_id: user.id)
          render json: {token: token}, code: '200', status: :ok
        else
          render jsonapi_errors: user.errors, code: '422', status: :unprocessable_entity
        end   
      end

      # POST /api/v1/signup_consumer
      def create_consumer
        user = User.new(consumer_params)
        user.user_type = 'consumer'
        if user.save
          token = JwtToken.jwt_encode(user_id: user.id)
          render json: {token: token}, code: '200', status: :ok
        else
          render jsonapi_errors: user.errors, code: '422', status: :unprocessable_entity
        end   
      end

      # POST /api/v1/user_details
      def show
        render jsonapi: current_user, code: '200', status: :ok
      end

      # GET /api/v1/view_farmers
      def view_farmers
        farmers = User.where(user_type: 'farmer')
        render jsonapi: farmers, code: '200', status: :ok
      end

      private
        def farmer_params
          params.require(:user).permit(:full_name, :email, :phone_number, :address, :password, :user_type,
                                       profile_attributes:[:profile_picture], public_profile_attributes:[:description, :produce_list => []])
        end

        def consumer_params
          params.require(:user).permit(:full_name, :email, :phone_number, :address, :password, :user_type)
        end

    end
  end
end