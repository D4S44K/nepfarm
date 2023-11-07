module Api
    module V1
  
      class PasswordsController < ApplicationController
        
        # POST /api/v1/forget_password
        def forget_password
          user = User.find_by(phone_number: params[:phone_number])
          if user.present?
            render jsonapi: user, code: '200', status: :ok
          else
            render jsonapi_errors: {title: "Your phone number was incorrect, please try again!"}, code: '401', status: :unauthorized
          end
        end
  
        # PATCH /api/v1/reset_password
        def reset_password
          user = User.find_by(id: params[:id])
          if user.present?
            begin
              user.update!(password: params[:new_password])
              render jsonapi:[], code: '200', status: :ok
            rescue Exception => e
              render jsonapi_errors: {title: "Your phone number was incorrect, or your password was invalid, please try again!"}, code: '401', status: :unauthorized
            end
          else
            render jsonapi_errors: {title: "Your phone number was incorrect, or your password was invalid, please try again!"}, code: '401', status: :unauthorized
          end
        end

      end
    end
  end