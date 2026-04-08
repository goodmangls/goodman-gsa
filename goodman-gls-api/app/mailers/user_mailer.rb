class UserMailer < ApplicationMailer
  def verification(user)
    @user = user
    @verify_url = "#{ENV.fetch('FRONTEND_URL', 'http://localhost:3001')}/auth/verify?token=#{user.email_verification_token}"
    mail(to: user.email, subject: "Verify your email — GOODMAN GLS")
  end

  def password_reset(user)
    @user = user
    @reset_url = "#{ENV.fetch('FRONTEND_URL', 'http://localhost:3001')}/auth/reset-password?token=#{user.password_reset_token}"
    mail(to: user.email, subject: "Reset your password — GOODMAN GLS")
  end
end
