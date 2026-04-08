module Api
  module V1
    class UsersController < ApplicationController
      include JwtAuthenticatable

      before_action :require_admin!

      # GET /api/v1/users
      def index
        users = User.left_joins(:quote_requests)
                    .select("users.*, COUNT(quote_requests.id) AS quotes_count")
                    .group("users.id")
                    .order(created_at: :desc)
        render json: users.map { |u| admin_user_json(u) }
      end

      # PATCH /api/v1/users/:id
      def update
        user = User.find(params[:id])
        if user.update(params.permit(:name, :role, :status))
          render json: admin_user_json(user)
        else
          render json: { error: { code: "VALIDATION_ERROR", message: user.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/users/:id
      def destroy
        user = User.find(params[:id])
        if user.id == current_user.id
          return render json: { error: { code: "FORBIDDEN", message: "Cannot delete yourself" } }, status: :forbidden
        end
        user.destroy
        head :no_content
      end

      private

      def admin_user_json(u)
        {
          id: u.id,
          email: u.email,
          name: u.name,
          role: u.role,
          status: u.status,
          emailVerified: u.email_verified_at.present?,
          quoteCount: u.try(:quotes_count) || u.quote_requests.count,
          createdAt: u.created_at.iso8601
        }
      end
    end
  end
end
