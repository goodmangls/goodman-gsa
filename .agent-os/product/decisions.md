# GOODMAN GLS - Technical & Product Decisions

## Architecture Decisions

### ADR-001: Next.js App Router

**Status**: Accepted
**Date**: December 2024

**Context**: Need a modern React framework for a B2B logistics website with SSR/SSG capabilities.

**Decision**: Use Next.js 16 with App Router.

**Rationale**:
- Server Components for better performance
- Built-in API routes for contact form
- Static generation for marketing pages
- Easy Vercel deployment
- React 19 support

**Consequences**:
- Need to understand Client/Server component boundaries
- Some libraries may need 'use client' wrapper

---

### ADR-002: Tailwind CSS v4

**Status**: Accepted
**Date**: December 2024

**Context**: Need a styling solution for rapid UI development.

**Decision**: Use Tailwind CSS v4 with PostCSS.

**Rationale**:
- Utility-first approach speeds development
- v4 offers improved performance
- Good dark mode support
- Easy responsive design

**Consequences**:
- Custom CSS variables for brand colors
- Component-level styling in className

---

### ADR-003: next-intl for Internationalization

**Status**: Accepted
**Date**: December 2024

**Context**: Site needs to support English and Korean languages.

**Decision**: Use next-intl for i18n.

**Rationale**:
- Native Next.js App Router support
- Simple JSON translation files
- Good TypeScript integration
- Context-based translation access

**Consequences**:
- Translation files in `/messages/`
- LanguageContext for client components
- Need to maintain both language files

---

### ADR-004: Resend for Email

**Status**: Accepted
**Date**: January 2025

**Context**: Contact form needs to send email notifications.

**Decision**: Use Resend as email service provider.

**Rationale**:
- Simple API integration
- Good deliverability
- React email templates support
- Generous free tier for starting

**Consequences**:
- Need to verify sending domain
- API key in environment variables
- HTML email templates in API route

---

### ADR-005: Zod + React Hook Form for Validation

**Status**: Accepted
**Date**: December 2024

**Context**: Need form validation for contact and future quote forms.

**Decision**: Combine Zod schemas with React Hook Form.

**Rationale**:
- Schema-based validation is reusable
- Client and server validation with same schema
- Good TypeScript inference
- Lightweight and performant

**Consequences**:
- Validation schemas in `/lib/validations/`
- Shared between client components and API routes

---

## Product Decisions

### PD-001: Bilingual Only (EN/KO)

**Status**: Accepted
**Date**: December 2024

**Context**: Decide which languages to support initially.

**Decision**: Support English and Korean only.

**Rationale**:
- Primary markets are Korea and English-speaking partners
- Limited resources for translation maintenance
- Can expand later (Chinese, Japanese)

**Consequences**:
- Two translation files to maintain
- Language toggle in navigation

---

### PD-002: Dark Theme for Hero Sections

**Status**: Accepted
**Date**: December 2024

**Context**: Visual design direction for the website.

**Decision**: Use dark gradient backgrounds (#070612) for key sections.

**Rationale**:
- Premium, professional appearance
- Differentiates from typical logistics websites
- Good contrast for CTAs (orange accent)

**Consequences**:
- Consistent dark palette across hero sections
- Orange (#FF6B35) as primary accent
- Glass-morphism effects for cards

---

### PD-003: Floating Connect Widget

**Status**: Accepted
**Date**: December 2024

**Context**: Need easy access to contact options for international visitors.

**Decision**: Implement floating button with multiple messaging options.

**Rationale**:
- Different regions prefer different messaging apps
- WhatsApp for international, KakaoTalk for Korea, WeChat for China
- Lower friction than email form

**Consequences**:
- FloatingConnect component always visible
- Multiple messaging platform links

---

## Future Decision Areas

### FD-001: Authentication Provider

**Options to evaluate**:
- NextAuth.js (self-hosted)
- Clerk (managed)
- Custom JWT implementation

**Considerations**:
- B2B partner accounts need role management
- Airline customer accounts
- Integration with future admin portal

---

### FD-002: Database Selection

**Options to evaluate**:
- PostgreSQL (Vercel Postgres, Supabase, Neon)
- PlanetScale (MySQL)
- MongoDB

**Considerations**:
- Relational data for quotes, shipments, users
- JSON flexibility for tracking data
- Managed vs self-hosted

---

### FD-003: Tracking API Integration

**Options to evaluate**:
- Direct carrier APIs
- Aggregator services (17Track, AfterShip)
- Hybrid approach

**Considerations**:
- Korean airline API availability
- Real-time update frequency
- Cost per tracking query
