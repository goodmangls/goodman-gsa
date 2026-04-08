admin_password = ENV.fetch("ADMIN_DEFAULT_PASSWORD", "password")

User.find_or_create_by!(email: "jhlim725@gmail.com") do |u|
  u.password = admin_password
  u.password_confirmation = admin_password
  u.role = "super_admin"
  u.status = "active"
  u.name = "Admin"
  u.email_verified_at = Time.current
end

puts "Seeded #{User.count} users."
