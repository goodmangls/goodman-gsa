# GOODMAN GLS - Technology Stack

## Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | Full-stack React framework with App Router |
| **React** | 19.2.3 | UI component library |
| **TypeScript** | ^5 | Type-safe JavaScript |

## Styling & UI

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | v4 | Utility-first CSS framework |
| **@tailwindcss/postcss** | ^4 | PostCSS integration |
| **Framer Motion** | (peer) | Animation library |
| **Google Fonts** | - | Inter (sans), Playfair Display (serif) |

## Internationalization

| Technology | Version | Purpose |
|------------|---------|---------|
| **next-intl** | ^4.6.1 | i18n for Next.js |

**Supported Languages:**
- English (en) - Primary
- Korean (ko) - Secondary

**Translation Files:**
- `messages/en.json`
- `messages/ko.json`

## Forms & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| **react-hook-form** | ^7.69.0 | Form state management |
| **@hookform/resolvers** | ^5.2.2 | Validation resolvers |
| **zod** | ^4.3.3 | Schema validation |

## Email & Notifications

| Technology | Version | Purpose |
|------------|---------|---------|
| **Resend** | ^6.6.0 | Transactional email service |

**Email Configuration:**
- Contact form submissions
- HTML email templates
- KST timezone formatting

## Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | ^9 | Code linting |
| **eslint-config-next** | 16.1.1 | Next.js ESLint rules |

## Deployment & Infrastructure

| Service | Purpose |
|---------|---------|
| **Vercel** | Hosting and deployment |
| **Environment Variables** | `.env.local` configuration |

**Environment Variables:**
```
RESEND_API_KEY=         # Resend email service API key
CONTACT_EMAIL_FROM=     # Sender email address
CONTACT_EMAIL_TO=       # Recipient email address
```

## Project Structure

```
goodman-gls/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/contact/        # Contact form API
│   │   ├── company/            # Company page
│   │   ├── network-solutions/  # Network page
│   │   ├── partner-hub/        # Partner hub page
│   │   ├── services/           # Services page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components
│   │   ├── ClientLayout.tsx    # Client-side layout wrapper
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── FloatingConnect.tsx # Floating contact widget
│   │   ├── Footer.tsx          # Site footer
│   │   ├── HeroSection.tsx     # Homepage hero
│   │   ├── Navigation.tsx      # Site navigation
│   │   └── ...                 # Other components
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.tsx # i18n context
│   ├── content/                # Content data
│   └── lib/                    # Utilities
│       ├── utils.ts            # Helper functions
│       └── validations/        # Zod schemas
│           └── contact.ts      # Contact form schema
├── messages/                   # i18n translation files
│   ├── en.json                 # English
│   └── ko.json                 # Korean
├── public/                     # Static assets
├── .agent-os/                  # Agent OS documentation
└── package.json                # Dependencies
```

## Future Stack Considerations

### Authentication (Phase 1)
- **NextAuth.js** or **Clerk** - Authentication solution
- **Prisma** or **Drizzle** - Database ORM
- **PostgreSQL** - Primary database

### Tracking & Integrations (Phase 3)
- **Carrier APIs** - Korean Air, Asiana, Ocean carriers
- **Redis** - Caching layer
- **Background Jobs** - For tracking updates

### Admin Portal (Phase 4)
- **React Admin** or custom admin UI
- **AWS S3** - File storage for documents
