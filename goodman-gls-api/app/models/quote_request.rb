class QuoteRequest < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :company, optional: true

  SERVICE_TYPES = %w[air_freight ocean_fcl ocean_lcl project_cargo].freeze
  SHIPMENT_TYPES = %w[import export cross_trade].freeze
  STATUSES = %w[pending quoted accepted expired cancelled].freeze

  validates :service_type, presence: true, inclusion: { in: SERVICE_TYPES }
  validates :shipment_type, presence: true, inclusion: { in: SHIPMENT_TYPES }
  validates :origin, :destination, :cargo_details, presence: true
  validates :status, inclusion: { in: STATUSES }
  validates :guest_name, :guest_email, presence: true, if: :is_guest?

  before_create :generate_reference_no

  scope :by_status, ->(s) { where(status: s) if s.present? }

  private

  def generate_reference_no
    year = Date.current.year
    last = QuoteRequest.where("reference_no LIKE ?", "GQ-#{year}-%").maximum(:reference_no)
    seq = last ? last.split("-").last.to_i + 1 : 1
    self.reference_no = format("GQ-%d-%04d", year, seq)
  end
end
