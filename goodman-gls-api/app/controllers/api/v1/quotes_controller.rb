module Api
  module V1
    class QuotesController < ApplicationController
      include JwtAuthenticatable

      before_action :authenticate_user!, except: [:create_public]

      # GET /api/v1/quotes
      def index
        quotes = if current_user.admin?
                   QuoteRequest.all
                 else
                   current_user.quote_requests
                 end

        quotes = quotes.by_status(params[:status]) if params[:status].present?
        quotes = quotes.order(created_at: :desc).page(params[:page]).per(params[:per_page] || 20)

        render json: {
          quotes: quotes.map { |q| quote_json(q) },
          meta: { total: quotes.total_count, page: quotes.current_page, pages: quotes.total_pages }
        }
      end

      # GET /api/v1/quotes/:id
      def show
        quote = find_quote
        render json: quote_json(quote)
      end

      # POST /api/v1/quotes
      def create
        quote = current_user.quote_requests.build(quote_params)
        quote.company = current_user.company

        if quote.save
          render json: quote_json(quote), status: :created
        else
          render json: { error: { code: "VALIDATION_ERROR", message: quote.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      # POST /api/v1/quotes/public — guest (no auth)
      def create_public
        quote = QuoteRequest.new(guest_quote_params.merge(is_guest: true))

        if quote.save
          render json: quote_json(quote), status: :created
        else
          render json: { error: { code: "VALIDATION_ERROR", message: quote.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      # PATCH /api/v1/quotes/:id
      def update
        quote = find_quote
        if quote.update(update_params)
          render json: quote_json(quote)
        else
          render json: { error: { code: "VALIDATION_ERROR", message: quote.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/quotes/:id
      def destroy
        unless current_user.admin?
          return render json: { error: { code: "FORBIDDEN", message: "Admin only" } }, status: :forbidden
        end
        quote = QuoteRequest.find(params[:id])
        quote.destroy
        head :no_content
      end

      private

      def find_quote
        if current_user.admin?
          QuoteRequest.find(params[:id])
        else
          current_user.quote_requests.find(params[:id])
        end
      end

      def quote_params
        params.permit(:service_type, :shipment_type, :origin, :destination, :cargo_details, :weight, :dimensions, :commodity)
      end

      def guest_quote_params
        params.permit(:service_type, :shipment_type, :origin, :destination, :cargo_details, :weight, :dimensions, :commodity, :guest_name, :guest_email, :guest_company, :guest_phone)
      end

      def update_params
        if current_user.admin?
          params.permit(:status, :notes, :quoted_rate, :currency, :valid_until, :responded_by)
        else
          params.permit(:status, :notes)
        end
      end

      def quote_json(q)
        {
          id: q.id,
          referenceNo: q.reference_no,
          serviceType: q.service_type,
          shipmentType: q.shipment_type,
          origin: q.origin,
          destination: q.destination,
          cargoDetails: q.cargo_details,
          weight: q.weight,
          dimensions: q.dimensions,
          commodity: q.commodity,
          status: q.status,
          quotedRate: q.quoted_rate,
          currency: q.currency,
          validUntil: q.valid_until&.iso8601,
          notes: q.notes,
          isGuest: q.is_guest?,
          guestName: q.guest_name,
          guestEmail: q.guest_email,
          createdAt: q.created_at.iso8601,
          updatedAt: q.updated_at.iso8601
        }
      end
    end
  end
end
