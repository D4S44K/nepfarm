module Api
  module V1
    class OrdersController < ApplicationController
      include EnsureUser
      before_action :authenticate_user, only: [:create_order, :cancel_order, :confirm_order, :complete_order, :view_own_orders]
      before_action :is_consumer?, only: [:create_order]
      before_action :is_farmer?, only: [:cancel_order, :confirm_order, :complete_order]

      def create_order
        order = current_user.orders.new(order_params)
        order.order_status = 'requested'
        if order.save
          render jsonapi: order, code: '200', status: :ok
        else
          render jsonapi_errors: order.errors, code: '422', status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.require(:order).permit(:desired_delivery, line_items_attributes:[:product_id, :desired_quantity, :desired_unit, :farmer_id, :order_id, :total_price])
      end
    end
  end
end