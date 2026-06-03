# GOODMAN GLS — Korea's Leading GSSA

![GOODMAN GLS](/public/images/logo/logo-white.svg)

> **Small Giant. Big Impact.** — Your Strategic Partner in Korea & Beyond

## About

**GOODMAN GLS** is a leading Korean GSSA (General Sales & Service Agent) specializing in airline cargo sales representation. Founded in 2004, we represent 15+ airlines across 6 GSSA groups, connecting 50+ countries through our MPL and EAN network memberships.

This repository — **`goodmangls/goodman-gsa`** — is GOODMAN GLS's **GSSA-focused site**. It is the sibling of **[`goodmangls/goodman`](https://github.com/goodmangls/goodman)**, which hosts the company's **Integrated Logistics** site. One company, two business sites. This repo contains the GSSA marketing website (Next.js) and the colocated Rails API backend (`goodman-gls-api/`).

---

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js 16 (App Router) | Framework |
| React 19 + TypeScript 5 | UI + Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| react-hook-form + Zod | Form validation |

### Backend (`goodman-gls-api/`)
| Technology | Purpose |
|------------|---------|
| Rails 8 API-only | REST API |
| Ruby 3.4.5 | Runtime |
| PostgreSQL | Database |
| JWT (bcrypt + jwt) | Authentication |
| rack-cors + rack-attack | CORS + Rate limiting |
| Action Mailer + SendGrid | Email |

---

## Features

### Marketing Website
- GSSA-first landing page with video hero
- "Why GSSA?" value proposition + 4 service pillars
- 15 airline partner showcase grid
- Animated stats counters (20+ years, 15+ airlines, 50+ countries)
- EAN certification widget + MPL badge
- Bilingual (EN/KO)
- Dark premium theme (`#070612` + `#FF6B35`)

### Partner Portal
- JWT authentication (register, login, email verification, password reset)
- Quote request system (authenticated + guest)
- Role-based access (Partner, Airline, Admin, Super Admin)

### API Endpoints
- Auth: login, register, refresh, verify-email, forgot/reset-password
- Quotes: CRUD + public guest endpoint
- Contact: form submission + email notification
- Companies: partner company profile
- Users: admin management

---

## Getting Started

### Prerequisites
- Node.js 20+
- Ruby 3.4+
- PostgreSQL

### Installation

```bash
# Clone
git clone https://github.com/goodmangls/goodman-gsa.git
cd goodman-gsa

# Frontend
npm install
npm run dev          # http://localhost:3000

# Backend
cd goodman-gls-api
bundle install
bin/rails db:prepare
bin/rails server     # http://localhost:3000 (API)
```

### Environment Variables

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Backend** (Render):
```env
DATABASE_URL=        # PostgreSQL
SECRET_KEY_BASE=     # JWT secret
CORS_ORIGINS=        # Allowed origins (required in production)
FRONTEND_URL=        # For email links
SENDGRID_API_KEY=    # Email service
```

---

## Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | goodman-gsa.vercel.app |
| Backend | Render | goodman-gls-api.onrender.com |

```bash
# Frontend (auto-deploy on push, or manual)
npx vercel --prod

# Backend (auto-deploy via Render GitHub integration)
```

---

## Project Structure

```
/                              # Frontend (Next.js)
  src/
    app/                       # Pages (landing, auth, portal)
    components/                # HeroSection, WhyGSSA, Stats, GSA, Footer
    contexts/                  # AuthContext, LanguageContext
    lib/                       # apiClient, authStorage, validations
  messages/                    # i18n (en.json, ko.json)
goodman-gls-api/               # Backend (Rails 8)
  app/controllers/api/v1/      # Auth, Quotes, Contact, Companies, Users
  app/models/                  # User, Company, QuoteRequest, ContactMessage
  app/mailers/                 # UserMailer, ContactMailer
  config/initializers/         # cors.rb, rack_attack.rb
```

---

## License

(c) 2026 GOODMAN Global Logistics Service. All Rights Reserved.
