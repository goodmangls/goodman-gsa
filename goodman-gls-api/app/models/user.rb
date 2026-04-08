class User < ApplicationRecord
  has_secure_password

  has_one  :company, dependent: :destroy
  has_many :quote_requests, dependent: :nullify

  ROLES = %w[partner airline admin super_admin].freeze
  STATUSES = %w[pending active suspended inactive].freeze

  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :role, presence: true, inclusion: { in: ROLES }
  validates :status, presence: true, inclusion: { in: STATUSES }
  validates :password, length: { minimum: 8 }, if: :password_required?

  before_save :downcase_email
  before_create :generate_verification_token

  scope :active, -> { where(status: "active") }
  scope :admins, -> { where(role: %w[admin super_admin]) }

  def admin?
    role.in?(%w[admin super_admin])
  end

  def verified?
    email_verified_at.present?
  end

  private

  def downcase_email
    self.email = email.downcase.strip
  end

  def password_required?
    new_record? || password.present?
  end

  def generate_verification_token
    self.email_verification_token = SecureRandom.urlsafe_base64(32)
  end
end
