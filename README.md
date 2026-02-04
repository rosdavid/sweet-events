# Sweet Events

**Professional website for a photography and video production studio.**  
Weddings, corporate events, dinners, communions, announcements, and special occasions — built with Next.js, Supabase, and modern tooling.

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Supabase setup](#supabase-setup)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [Dashboard](#dashboard)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [License](#license)

---

## Overview

Sweet Events is a marketing and lead-capture website for a photography and video production business. It showcases services and portfolio work, provides a contact form with email notifications, and includes a password-protected dashboard to manage incoming requests. The site is responsive, SEO-oriented, and ready for production deployment (e.g. on Vercel).

---

## Features

### Public site

- **Home** — Hero, stats, services preview, portfolio preview, about, testimonials, and call-to-action.
- **Services** — Detailed service offerings (weddings, corporate, dinners, communions, announcements, other).
- **Portfolio** — Bento-style grid of featured work.
- **Gallery** — Image gallery.
- **About** — Studio and team presentation.
- **Blog** — Blog listing and individual post pages (slug-based routing).
- **FAQ** — Frequently asked questions (accordion).
- **Contact** — Form with validation (name, email, phone, service, date, budget, message); submissions stored in Supabase and optional confirmation/owner emails via Resend.
- **Legal** — Privacy and terms pages.

### Back office

- **Dashboard** — Password-protected area at `/dashboard` to list, filter, and manage contact requests.
- **Request management** — View details, add internal notes, and update status (e.g. nuevo, en proceso, cerrado) when using the optional `notes` and `status` columns.

### Technical

- **SEO** — Metadata, Open Graph, and Twitter cards in the root layout.
- **Analytics** — Vercel Analytics integration.
- **Theme** — Light/dark support via Next.js and CSS variables (Instrument Serif + Space Grotesk).
- **Forms** — React Hook Form + Zod; server-side validation on the contact API.

---

## Tech stack

| Layer        | Technology                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router)                                                                           |
| UI / styling | React 19, [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Motion](https://motion.dev/) |
| Backend / DB | [Supabase](https://supabase.com/) (PostgreSQL, server-side client with service role)                                     |
| Email        | [Resend](https://resend.com/)                                                                                            |
| Analytics    | [Vercel Analytics](https://vercel.com/analytics)                                                                         |
| Validation   | [Zod](https://zod.dev/), [React Hook Form](https://react-hook-form.com/) + resolvers                                     |

---

## Getting started

### Prerequisites

- **Node.js** 18 or later
- **pnpm** (recommended), or npm / yarn

### 1. Clone and install

```bash
git clone <repository-url>
cd sweet-events
pnpm install
```

### 2. Environment variables

Create `.env.local` in the project root and set the [required variables](#environment-variables). Use `.env.example` as a template if present.

### 3. Supabase

Create a Supabase project and run the provided SQL scripts (see [Supabase setup](#supabase-setup)). Then add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.

### 4. Run the app

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Create a `.env.local` file in the project root. Variables below are used by the application.

| Variable                    | Required  | Description                                                                                                    |
| --------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`  | **Yes**   | Supabase project URL (Project Settings → API).                                                                 |
| `SUPABASE_SERVICE_ROLE_KEY` | **Yes**   | Supabase service role key (Project Settings → API). Keep secret; server-only.                                  |
| `DASHBOARD_PASSWORD`        | **Yes**   | Password for dashboard login.                                                                                  |
| `RESEND_API_KEY`            | **Yes\*** | Resend API key for sending contact confirmation and owner notification emails.                                 |
| `OWNER_EMAIL`               | No        | Email address to receive contact form submissions.                                                             |
| `RESEND_FROM_EMAIL`         | No        | Sender email for Resend (e.g. `Sweet Events <contact@yourdomain.com>`). Defaults to Resend onboarding address. |
| `NEXT_PUBLIC_SITE_URL`      | No        | Canonical site URL for metadata and links (default: `https://sweetevents.com`).                                |
| `DASHBOARD_SECRET_SALT`     | No        | Salt used for dashboard auth cookie hashing (default: `sweet-events`).                                         |

\* Without `RESEND_API_KEY`, the contact form still saves requests to Supabase; only email sending is skipped.

---

## Supabase setup

1. Create a project at [Supabase](https://supabase.com/dashboard).
2. Open **SQL Editor** and run the scripts in this repository in order:

   **a. Base table**

   - File: `supabase-contact-requests.sql`
   - Creates the `public.contact_requests` table (id, name, email, phone, service, event_date, budget, message, created_at).

   **b. Dashboard fields (optional)**

   - File: `supabase-add-notes-status.sql`
   - Adds `notes` and `status` columns for the dashboard. Run this if you use the dashboard to manage requests.

3. In **Project Settings → API**, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`  
     Do not expose the service role key to the client.

---

## Project structure

```
sweet-events/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── api/                # API routes
│   │   ├── contact/        # POST contact form → Supabase + Resend
│   │   ├── dashboard-auth/ # Dashboard login/logout
│   │   └── dashboard/requests/  # List & update requests
│   ├── blog/               # Blog index & [slug]
│   ├── contact/            # Contact page
│   ├── dashboard/          # Protected dashboard (login, requests)
│   ├── faq/                # FAQ page
│   ├── gallery/            # Gallery page
│   ├── portfolio/          # Portfolio page
│   ├── privacy/            # Privacy policy
│   ├── services/           # Services page
│   ├── terms/              # Terms of use
│   ├── layout.tsx          # Root layout, metadata, fonts
│   └── page.tsx            # Home page
├── components/
│   ├── contact/            # Contact form
│   ├── gallery/            # Gallery grid
│   ├── home/               # Home sections (hero, stats, services, etc.)
│   ├── portfolio/          # Bento grid
│   ├── ui/                 # Shared UI (Radix-based)
│   ├── navbar.tsx
│   └── footer.tsx
├── lib/
│   ├── supabase-server.ts  # Supabase admin client & types
│   ├── email.ts            # Resend (confirmation + owner email)
│   ├── dashboard-auth.ts   # Dashboard auth helpers
│   └── utils.ts            # Utilities
├── public/                 # Static assets and images
├── supabase-contact-requests.sql
├── supabase-add-notes-status.sql
└── package.json
```

---

## Architecture

### Contact flow

1. User submits the form on `/contact`.
2. Client sends a POST request to `/api/contact`.
3. API validates input and inserts a row into `public.contact_requests` (Supabase).
4. If Resend is configured: sends a confirmation email to the user and, optionally, a notification to `OWNER_EMAIL`.

### Dashboard flow

1. User visits `/dashboard`; if not authenticated, redirect to `/dashboard/login`.
2. Login form sends credentials to `/api/dashboard-auth`; server checks password (with optional salt), sets an HTTP-only cookie.
3. Dashboard pages read contact requests via `/api/dashboard/requests` and optionally update a request via `/api/dashboard/requests/[id]` (notes/status).
4. Logout clears the auth cookie.

### Security notes

- Dashboard is protected by a single shared password and a signed cookie; suitable for small teams. For multi-user or stronger security, consider Supabase Auth or another auth provider.
- Supabase is used with the **service role** only on the server (API routes); the key is never exposed to the client.

---

## Dashboard

- **URL:** `/dashboard` (redirects to `/dashboard/login` when not logged in).
- **Auth:** Set `DASHBOARD_PASSWORD` in `.env.local`; users enter this password on the login page.
- **Features:**
  - List all contact form submissions.
  - Open a request to see full details.
  - Add internal notes and set status (if `notes` and `status` columns exist; run `supabase-add-notes-status.sql`).

---

## Deployment

The project is built for deployment on [Vercel](https://vercel.com/) (or any Node.js host that supports Next.js).

1. Connect the repository to Vercel and configure the build command: `pnpm build` (or `npm run build`).
2. Set all [environment variables](#environment-variables) in the Vercel project settings (Production, Preview, etc. as needed).
3. Ensure `NEXT_PUBLIC_SITE_URL` matches your production domain for correct metadata and links.
4. Deploy; the app will use the same API routes and Supabase/Resend configuration as in development.

For other platforms, use `pnpm build` and `pnpm start` (or the npm equivalents).

---

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

---

## License

Proprietary — all rights reserved.
