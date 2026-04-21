# CLAUDE.md — BRANDSBAKERY Marketing Site

Public-facing marketing website for **Brands Bakery®** (brandsbakery.com).
Separate from the SaaS app (`agency-ai-os`). Managed by Fouad Ramsis.

- **Live site**: https://brandsbakery.com
- **SaaS app**: https://app.brandsbakery.com
- **GitHub**: fouadr/BRANDSBAKERY (private, SSH auth)
- **Server**: same Ubuntu VPS — 37.59.97.38
- **Process manager**: PM2 — process name `brandsbakery`

---

## Tech stack

- **Frontend**: React 19, Vite 5, TypeScript, Tailwind CSS, shadcn/ui (Radix primitives)
- **Routing**: React Router v6 (`BrowserRouter`)
- **Backend**: FastAPI + MongoDB (Motor async driver) — minimal, only `/api/status` used
- **Build output**: `frontend/dist/` (static, served by nginx)

---

## Directory structure

```
BRANDSBAKERY/
├── frontend/
│   ├── src/
│   │   ├── App.tsx               # Route definitions
│   │   ├── pages/                # Index, About, Blog, Careers, Contact,
│   │   │                         #   Changelog, Integrations, Privacy, Terms,
│   │   │                         #   Security, NotFound
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── PricingSection.tsx   # Plan cards — Starter/Growth/Scale
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── ComplianceSection.tsx
│   │   │   ├── ContactSalesModal.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   └── ui/               # shadcn/ui primitives
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── assets/
│   ├── dist/                     # Production build output (served by nginx)
│   └── package.json
├── backend/
│   ├── server.py                 # FastAPI — /api/status only
│   └── requirements.txt
└── tests/
```

---

## Pricing plans (PricingSection.tsx)

| Plan    | Price    | CTA            | ctaHref                                    |
|---------|----------|----------------|--------------------------------------------|
| Starter | €99/mo   | Get Started    | https://app.brandsbakery.com/sign-up       |
| Growth  | €249/mo  | Get Started    | https://app.brandsbakery.com/sign-up       |
| Scale   | Contact  | Contact Sales  | opens ContactSalesModal (no href)          |

Annual toggle applies 20% discount. Add-ons are configurable per card with qty steppers.

---

## Development commands

```bash
# Build for production
cd /home/ubuntu/projects/BRANDSBAKERY/frontend
npm run build

# Restart production server
pm2 restart brandsbakery

# Full deploy after changes
cd /home/ubuntu/projects/BRANDSBAKERY/frontend && npm run build && pm2 restart brandsbakery

# Local dev server
npm run dev

# Deploy via git
git push origin main
```

---

## Deploy rule

**Always end every task with:**
```bash
cd /home/ubuntu/projects/BRANDSBAKERY/frontend && npm run build && pm2 restart brandsbakery
```

Never consider a task done until this has run successfully.
