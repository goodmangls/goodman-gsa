class ContactMailer < ApplicationMailer
  def notification(contact_message)
    @msg = contact_message
    mail(
      to: ENV.fetch("CONTACT_EMAIL_TO", "info@goodmangls.com"),
      subject: "[GOODMAN GLS] New Contact: #{@msg.subject}"
    )
  end
end
