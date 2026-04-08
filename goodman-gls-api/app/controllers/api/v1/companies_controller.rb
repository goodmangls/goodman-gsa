module Api
  module V1
    class CompaniesController < ApplicationController
      include JwtAuthenticatable

      before_action :authenticate_user!

      # GET /api/v1/company
      def show
        company = current_user.company
        unless company
          return render json: { error: { code: "NOT_FOUND", message: "No company profile" } }, status: :not_found
        end
        render json: company_json(company)
      end

      # POST /api/v1/company
      def create
        if current_user.company
          return render json: { error: { code: "CONFLICT", message: "Company already exists" } }, status: :conflict
        end

        company = current_user.build_company(company_params)
        if company.save
          render json: company_json(company), status: :created
        else
          render json: { error: { code: "VALIDATION_ERROR", message: company.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      # PATCH /api/v1/company
      def update
        company = current_user.company
        unless company
          return render json: { error: { code: "NOT_FOUND", message: "No company profile" } }, status: :not_found
        end

        if company.update(company_params)
          render json: company_json(company)
        else
          render json: { error: { code: "VALIDATION_ERROR", message: company.errors.full_messages.join(", ") } }, status: :unprocessable_entity
        end
      end

      private

      def company_params
        params.permit(:name, :country, :city, :address, :phone, :website, :company_type, :iata_code, :wca_member, :mpl_member, :ean_member)
      end

      def company_json(c)
        {
          id: c.id,
          name: c.name,
          country: c.country,
          city: c.city,
          address: c.address,
          phone: c.phone,
          website: c.website,
          companyType: c.company_type,
          iataCode: c.iata_code,
          wcaMember: c.wca_member,
          mplMember: c.mpl_member,
          eanMember: c.ean_member
        }
      end
    end
  end
end
