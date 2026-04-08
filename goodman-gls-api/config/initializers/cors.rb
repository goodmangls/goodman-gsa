Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(*ENV.fetch("CORS_ORIGINS") { Rails.env.development? ? "*" : raise("CORS_ORIGINS must be set in production") }.split(","))
    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      expose: ["Authorization"],
      credentials: false,
      max_age: 600
  end
end
