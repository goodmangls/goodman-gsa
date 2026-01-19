# GOODMAN GLS - Product Roadmap

## Phase 0: Already Completed ✅

The following features have been implemented:

### Marketing Website
- [x] **Homepage** - Hero section, trust badges, company intro, services showcase, GSA section, partner hub preview, contact section
- [x] **Services Page** - Detailed Air Freight, Ocean Freight, Project Cargo with case studies
- [x] **Network & Solutions Page** - WCA/MPL/EAN memberships, GSA/CSA airline partnerships, global coverage
- [x] **Partner Hub Page** - Agent zone, market insights, partnership benefits
- [x] **Company/About Page** - CEO message, company timeline, team, values

### Core Functionality
- [x] **Contact Form** - React Hook Form + Zod validation, Resend email integration
- [x] **Bilingual Support** - English/Korean with next-intl, language toggle
- [x] **Responsive Design** - Mobile-first, dark theme sections
- [x] **Floating Connect Widget** - WhatsApp, WeChat, Telegram, KakaoTalk, Email quick links
- [x] **SEO Optimization** - Metadata, structured content

### Technical Foundation
- [x] Next.js 16 App Router setup
- [x] TypeScript configuration
- [x] Tailwind CSS v4 styling system
- [x] Vercel deployment pipeline
- [x] Environment configuration

---

## Phase 1: Partner Portal Foundation

### Authentication & User Management
- [ ] Partner registration flow
- [ ] Email verification
- [ ] Login/logout functionality
- [ ] Password reset
- [ ] Profile management
- [ ] Role-based access (Partner, Admin, Airline)

### Partner Dashboard
- [ ] Dashboard overview with key metrics
- [ ] Shipment history list
- [ ] Quick quote request widget
- [ ] Account settings

---

## Phase 2: Rate Calculator & Quote System

### Rate Inquiry System
- [ ] Multi-service quote form (Air/Ocean/Project)
- [ ] Origin/Destination input with port/airport lookup
- [ ] Cargo details (weight, dimensions, commodity)
- [ ] Quote request submission
- [ ] Admin quote management dashboard
- [ ] Quote response email notifications

### Rate Calculator (Basic)
- [ ] Estimated rate lookup for common routes
- [ ] Fuel surcharge calculator
- [ ] Volume/weight comparison
- [ ] Rate validity display

---

## Phase 3: Shipment Tracking

### Tracking System
- [ ] Shipment tracking by tracking number
- [ ] Multi-carrier tracking integration
- [ ] Real-time status updates
- [ ] Email/SMS notifications for status changes
- [ ] Tracking history timeline
- [ ] Document access (AWB, BL, invoices)

### Partner Shipment Management
- [ ] Active shipments list
- [ ] Filter and search capabilities
- [ ] Shipment detail view
- [ ] Export shipment data

---

## Phase 4: Advanced Features

### Admin Portal
- [ ] User management
- [ ] Quote management and approval
- [ ] Rate sheet management
- [ ] Analytics dashboard
- [ ] Content management for market insights

### Enhanced Partner Features
- [ ] Tariff sheet downloads
- [ ] Booking requests
- [ ] Invoice management
- [ ] Performance reports
- [ ] API access for integration

### Content & Marketing
- [ ] Blog/News section
- [ ] Market insights subscription
- [ ] Case study management
- [ ] Resource downloads

---

## Phase 5: Integration & Scale

### Third-Party Integrations
- [ ] Carrier tracking API integrations (Korean Air, Asiana, etc.)
- [ ] Ocean tracking APIs (container lines)
- [ ] Payment gateway (if needed)
- [ ] CRM integration

### Mobile & Performance
- [ ] PWA support
- [ ] Push notifications
- [ ] Performance optimization
- [ ] CDN implementation

---

## Priority Matrix

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Partner Auth | High | Medium | P1 |
| Quote System | High | Medium | P1 |
| Shipment Tracking | High | High | P2 |
| Rate Calculator | Medium | Medium | P2 |
| Admin Portal | Medium | High | P3 |
| Blog/News | Low | Low | P4 |
