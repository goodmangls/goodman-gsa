class Company < ApplicationRecord
  belongs_to :user
  has_many :quote_requests, dependent: :nullify

  TYPES = %w[freight_forwarder shipper airline nvocc customs_broker other].freeze

  validates :name, :country, presence: true
  validates :company_type, presence: true, inclusion: { in: TYPES }
  validates :user_id, uniqueness: true
end
