# Spec 001: Partner Portal MVP

**Status**: Draft
**Created**: 2025-01-18
**Priority**: P1 - Critical Path

---

## Overview

### Problem Statement
Currently, partner freight forwarders must contact GOODMAN GLS via email/phone for quotes, rate sheets, and shipment tracking. This creates friction and limits scalability.

### Solution
Build a Partner Portal that enables:
- Self-service partner registration
- Authenticated access to rates and quotes
- Shipment tracking dashboard
- Account management

### Success Metrics
- Partner registration conversion rate > 60%
- Time to first quote request < 5 minutes
- Partner portal DAU/MAU > 30%

---

## User Stories

### Authentication
```
As a new partner, I want to register for an account
  So that I can access partner-exclusive features

As a registered partner, I want to log in securely
  So that I can access my dashboard

As a partner, I want to reset my password
  So that I can regain access if I forget it

As a partner, I want to verify my email
  So that my account is confirmed as legitimate
```

### Partner Dashboard
```
As a logged-in partner, I want to see my dashboard overview
  So that I can quickly access key information

As a partner, I want to submit quote requests
  So that I can get pricing for shipments

As a partner, I want to view my quote history
  So that I can reference past inquiries

As a partner, I want to update my company profile
  So that my information stays current
```

### Admin (Basic)
```
As an admin, I want to view partner registrations
  So that I can approve or review new partners

As an admin, I want to respond to quote requests
  So that partners receive pricing
```

---

## Technical Architecture

### Recommended Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Auth** | NextAuth.js v5 | Self-hosted, flexible, Next.js native |
| **Database** | PostgreSQL (Neon) | Serverless, Vercel integration, relational |
| **ORM** | Prisma | Type-safe, great DX, migrations |
| **Email** | Resend (existing) | Already configured |

### Alternative: Supabase
If you prefer an all-in-one solution:
- Supabase Auth + Database + Row Level Security
- Faster initial setup, but less flexibility

---

## Database Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============ USERS & AUTH ============

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  emailVerified DateTime?
  passwordHash  String?
  name          String?
  image         String?
  role          UserRole  @default(PARTNER)
  status        UserStatus @default(PENDING)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  company       Company?
  quotes        QuoteRequest[]
  accounts      Account[]
  sessions      Session[]
}

enum UserRole {
  PARTNER      // Freight forwarder partner
  AIRLINE      // Airline cargo customer
  ADMIN        // GOODMAN staff
  SUPER_ADMIN  // System administrator
}

enum UserStatus {
  PENDING      // Awaiting email verification
  ACTIVE       // Verified and active
  SUSPENDED    // Temporarily disabled
  INACTIVE     // Deactivated
}

// NextAuth.js required models
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// ============ COMPANY ============

model Company {
  id          String   @id @default(cuid())
  userId      String   @unique
  name        String
  country     String
  city        String?
  address     String?
  phone       String?
  website     String?

  // Business details
  companyType CompanyType
  iataCode    String?
  wcaMember   Boolean  @default(false)
  mplMember   Boolean  @default(false)
  eanMember   Boolean  @default(false)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  quotes      QuoteRequest[]
}

enum CompanyType {
  FREIGHT_FORWARDER
  SHIPPER
  AIRLINE
  NVOCC
  CUSTOMS_BROKER
  OTHER
}

// ============ QUOTES ============

model QuoteRequest {
  id            String      @id @default(cuid())
  userId        String
  companyId     String?

  // Shipment details
  serviceType   ServiceType
  shipmentType  ShipmentType
  origin        String
  destination   String
  cargoDetails  String      @db.Text
  weight        Float?
  dimensions    String?
  commodity     String?

  // Request status
  status        QuoteStatus @default(PENDING)

  // Response
  quotedRate    Float?
  currency      String?     @default("USD")
  validUntil    DateTime?
  notes         String?     @db.Text
  respondedAt   DateTime?
  respondedBy   String?

  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  user          User        @relation(fields: [userId], references: [id])
  company       Company?    @relation(fields: [companyId], references: [id])
}

enum ServiceType {
  AIR_FREIGHT
  OCEAN_FCL
  OCEAN_LCL
  PROJECT_CARGO
}

enum ShipmentType {
  IMPORT
  EXPORT
  CROSS_TRADE
}

enum QuoteStatus {
  PENDING      // Awaiting response
  QUOTED       // Rate provided
  ACCEPTED     // Partner accepted quote
  EXPIRED      // Quote validity passed
  CANCELLED    // Cancelled by partner
}
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/register     # Partner registration
POST   /api/auth/[...nextauth] # NextAuth handlers
GET    /api/auth/session      # Get current session
POST   /api/auth/verify-email # Email verification
```

### Partner Profile
```
GET    /api/partner/profile   # Get partner profile
PUT    /api/partner/profile   # Update profile
GET    /api/partner/company   # Get company details
PUT    /api/partner/company   # Update company
```

### Quotes
```
POST   /api/quotes            # Create quote request
GET    /api/quotes            # List partner's quotes
GET    /api/quotes/[id]       # Get quote details
```

### Admin (Phase 1.5)
```
GET    /api/admin/partners    # List all partners
PUT    /api/admin/partners/[id]/status  # Update partner status
GET    /api/admin/quotes      # List all quotes
PUT    /api/admin/quotes/[id] # Respond to quote
```

---

## UI/UX Design

### New Routes
```
/auth/login           # Login page
/auth/register        # Registration page
/auth/verify          # Email verification
/auth/forgot-password # Password reset request
/auth/reset-password  # Password reset form

/portal               # Partner dashboard (protected)
/portal/quotes        # Quote history
/portal/quotes/new    # New quote request
/portal/profile       # Profile settings
/portal/company       # Company settings

/admin                # Admin dashboard (protected, admin only)
/admin/partners       # Partner management
/admin/quotes         # Quote management
```

### Dashboard Layout
```
┌─────────────────────────────────────────────────────────┐
│  GOODMAN GLS    [Portal]  [Services]  [Contact]  [User]│
├─────────────────────────────────────────────────────────┤
│  Sidebar        │  Main Content                         │
│  ┌───────────┐  │  ┌─────────────────────────────────┐  │
│  │ Dashboard │  │  │  Welcome, [Partner Name]        │  │
│  │ Quotes    │  │  │                                 │  │
│  │ Tracking  │  │  │  [Stats Cards]                  │  │
│  │ ───────── │  │  │  - Active Quotes: 3             │  │
│  │ Profile   │  │  │  - Pending Response: 1          │  │
│  │ Company   │  │  │  - Shipments: 12                │  │
│  │ Settings  │  │  │                                 │  │
│  │           │  │  │  [Recent Activity]              │  │
│  │           │  │  │  [Quick Actions]                │  │
│  └───────────┘  │  └─────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Registration Flow
```
1. /auth/register
   - Email, Password, Confirm Password
   - Name, Company Name, Country
   - Company Type (dropdown)
   - Network Membership (checkboxes: WCA, MPL, EAN)
   - Terms acceptance

2. Email Verification
   - Send verification email via Resend
   - Link to /auth/verify?token=xxx

3. Verification Success
   - Redirect to /portal
   - Show welcome message
```

---

## Implementation Plan

### Phase 1A: Auth Foundation (Week 1)
```
[ ] Install dependencies (next-auth, prisma, @prisma/client)
[ ] Set up Neon PostgreSQL database
[ ] Configure Prisma schema
[ ] Run initial migration
[ ] Set up NextAuth.js configuration
[ ] Create auth API routes
[ ] Build login page UI
[ ] Build registration page UI
[ ] Implement email verification flow
[ ] Add password reset flow
```

### Phase 1B: Partner Portal (Week 2)
```
[ ] Create portal layout with sidebar
[ ] Build dashboard page
[ ] Create profile settings page
[ ] Create company settings page
[ ] Add protected route middleware
[ ] Build responsive mobile navigation
```

### Phase 1C: Quote System (Week 3)
```
[ ] Create quote request form
[ ] Build quote history page
[ ] Create quote detail view
[ ] Set up quote notification emails
[ ] Add quote status tracking
```

### Phase 1D: Admin Basics (Week 4)
```
[ ] Create admin layout
[ ] Build partner list view
[ ] Add partner approval workflow
[ ] Build quote management view
[ ] Add quote response functionality
```

---

## Environment Variables (New)

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Existing
RESEND_API_KEY="..."
CONTACT_EMAIL_FROM="..."
CONTACT_EMAIL_TO="..."
```

---

## Security Considerations

### Authentication
- [x] Use bcrypt for password hashing
- [x] Implement rate limiting on auth endpoints
- [x] Secure session cookies (httpOnly, secure, sameSite)
- [x] Email verification required before full access

### Authorization
- [x] Role-based access control (RBAC)
- [x] Protected API routes check session
- [x] Admin routes require ADMIN role
- [x] Partners can only access own data

### Data Protection
- [x] Validate all inputs with Zod
- [x] Sanitize user-generated content
- [x] Use parameterized queries (Prisma handles this)
- [x] HTTPS only in production

---

## Testing Strategy

### Unit Tests
- Auth utility functions
- Zod validation schemas
- API route handlers

### Integration Tests
- Registration flow
- Login/logout flow
- Quote submission flow

### E2E Tests (Playwright)
- Complete registration journey
- Quote request journey
- Admin approval journey

---

## Dependencies to Add

```json
{
  "dependencies": {
    "next-auth": "^5.0.0-beta.25",
    "@prisma/client": "^6.0.0",
    "bcryptjs": "^2.4.3",
    "@types/bcryptjs": "^2.4.6"
  },
  "devDependencies": {
    "prisma": "^6.0.0"
  }
}
```

---

## Decisions Made

1. **Social Login**: ❌ No - Email/password only (simpler for B2B)
2. **Approval Flow**: ✅ Auto-approve after email verification
3. **Multi-language Portal**: ✅ Yes - Bilingual (EN/KO) like main site
4. **Rate Sheets**: TBD - Future feature consideration

---

## Next Steps

1. **Review this spec** - Confirm architecture decisions
2. **Set up database** - Create Neon PostgreSQL instance
3. **Install dependencies** - Add Prisma and NextAuth
4. **Start Phase 1A** - Begin with auth foundation

Ready to proceed?
