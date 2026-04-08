module Api
  module V1
    class ContactController < ApplicationController
      # POST /api/v1/contact
      def create
        msg = ContactMessage.new(contact_params)

        if msg.save
          ContactMailer.notification(msg).deliver_later
          render json: { success: true, message: "Message sent successfully" }, status: :created
        else
          render json: { error: { code: "VALIDATION_ERROR", message: msg.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      private

      def contact_params
        params.permit(:name, :email, :company, :phone, :subject, :message)
      end
    end
  end
end
