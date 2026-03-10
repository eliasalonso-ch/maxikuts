# MAXIKUTS — Barbería & Peluquería

> Website for MAXIKUTS, a barbershop located in Coronel, Bío Bío, Chile. Built with Next.js, Sanity CMS, Cal.com, and Resend.

🌐 **Live site:** [maxikuts.vercel.app](https://maxikuts.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| CMS | [Sanity](https://www.sanity.io/) |
| Booking | [Cal.com](https://cal.com/) |
| Email | [Resend](https://resend.com/) |
| Deployment | [Vercel](https://vercel.com/) |
| Styling | CSS Modules |
| Language | JavaScript |

---

## Features

- **Booking system** — 3-step booking form connected to Cal.com with manual confirmation by the barber
- **Email notifications** — Transactional emails via Resend for booking requested, confirmed, and cancelled events
- **CMS-powered content** — Prices, services, location, hours, and lookbook photos managed through Sanity Studio
- **Lookbook** — Masonry photo grid updated by the barber through the CMS
- **Loading screen** — Functional loader wired to `window.load` with minimum display time
- **Performance** — 95 Performance, 96 Accessibility, 100 SEO on Lighthouse mobile
- **Legal pages** — Privacy Policy and Terms of Service compliant with Chilean law (Ley N.° 19.628)

---

## Project Structure

```
src/
  app/
    (main)/         # Main layout with Navbar and Footer
    api/            # API routes (bookings, contact, services, webhook)
    pages/          # About, Lookbook, Booking, Contact, Privacy Policy, Terms of Service
    studio/         # Sanity Studio embedded route
  components/       # UI components (Hero, Pricing, FAQ, BookingForm, etc.)
  hooks/            # Custom hooks (useAvailableSlots, useMonthAvailability)
  sanity/
    lib/            # Sanity client and queries
    schemaTypes/    # Sanity schemas (services, location, faq, lookbook)
```

---

## Getting Started

### Prerequisites

- Node.js 24+
- A [Cal.com](https://cal.com/) account with an event type configured
- A [Resend](https://resend.com/) account
- A [Sanity](https://www.sanity.io/) account

### Installation

```bash
# Clone the repository
git clone https://github.com/eliasalonso-ch/maxikuts.git
cd maxikuts/frontend/maxikuts

# Install dependencies
npm install

# Start the development server
npm run dev

# Start the Sanity Studio (separate terminal)
npx sanity dev
```

---

## Environment Variables

Create a `.env.local` file in `frontend/maxikuts/` with the following variables:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-09

# Cal.com
CAL_API_KEY=your_cal_api_key

# Resend
RESEND_API_KEY=your_resend_api_key
```

### Where to find these values

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | [sanity.io/manage](https://sanity.io/manage) → your project |
| `NEXT_PUBLIC_SANITY_DATASET` | Same page, usually `production` |
| `CAL_API_KEY` | Cal.com dashboard → Settings → API Keys |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |

### Cal.com Webhook

After deploying, add a webhook in Cal.com pointing to:

```
https://yourdomain.com/api/webhook
```

Subscribe to: `BOOKING_REQUESTED`, `BOOKING_CONFIRMED`, `BOOKING_CANCELLED`

---

## Sanity Studio

The studio is available at `/studio` when running locally, or deploy it for remote access:

```bash
npx sanity deploy
```

Content managed through the CMS:
- **Servicios** — service names, durations, prices, Cal.com event type IDs
- **Ubicación y Contacto** — address, hours, phone, email
- **Preguntas Frecuentes** — FAQ questions and answers
- **Lookbook** — photo gallery

---

## Deployment

The project is deployed on Vercel. Every push to `master` triggers an automatic redeployment.

Add all environment variables from `.env.local` to your Vercel project settings before deploying.

---

## Author

Developed by [Elías Alonso](https://github.com/eliasalonso-ch)
