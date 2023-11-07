module Api
    module V1
  
      class SessionsController < ApplicationController
        include JwtToken
        
        # POST /api/v1/farmer_login
        def farmer_login
          user = User.find_by(phone_number: params[:phone_number], user_type: "farmer")
          if user.present? && user.password == params[:password]
            token = JwtToken.jwt_encode(user_id: user.id)
            render json: {token: token}, code: '200', status: :ok
          else
            render jsonapi_errors: {title: "Your phone number or password was incorrect, please try again!"}, code: '401', status: :unauthorized
          end
        end
  
        # POST /api/v1/consumer_login
        def consumer_login
          user = User.find_by(phone_number: params[:phone_number], user_type: "consumer")
          if user.present? && user.password == params[:password]
            token = JwtToken.jwt_encode(user_id: user.id)
            render json: {token: token}, code: '200', status: :ok
          else
            render jsonapi_errors: {title: "Your phone number or password was incorrect, please try again!"}, code: '401', status: :unauthorized
          end
        end

      end
    end
  end