class Rack::Attack
  # Throttle login attempts: 5 per minute per IP
  throttle("auth/login", limit: 5, period: 60) do |req|
    req.ip if req.path == "/api/v1/auth/login" && req.post?
  end

  # Throttle registration: 3 per minute per IP
  throttle("auth/register", limit: 3, period: 60) do |req|
    req.ip if req.path == "/api/v1/auth/register" && req.post?
  end

  # Throttle password reset: 3 per minute per IP
  throttle("auth/forgot-password", limit: 3, period: 60) do |req|
    req.ip if req.path == "/api/v1/auth/forgot-password" && req.post?
  end

  # Throttle contact form: 3 per minute per IP
  throttle("contact", limit: 3, period: 60) do |req|
    req.ip if req.path == "/api/v1/contact" && req.post?
  end

  # Custom response for throttled requests
  self.throttled_responder = lambda do |_req|
    [429, { "Content-Type" => "application/json" },
     [{ error: { code: "RATE_LIMITED", message: "Too many requests. Please try again later." } }.to_json]]
  end
end
