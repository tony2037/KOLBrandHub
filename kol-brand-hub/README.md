# KOL Brand Hub

**KOL Brand Hub** is a platform that helps small-scale influencers (~10k followers) build their personal brand and monetize their content with zero cost, zero risk, and zero technical barriers.

This platform integrates two core features:
- **Link-in-Bio** - Personal profile page with social media links
- **Personal Store** - Group-buy funnel and e-commerce store

## Project Overview

KOL Brand Hub is built as an MVP (Minimum Viable Product) to help Taiwanese influencers start their content monetization journey. The platform provides a complete solution for creating a personal brand website and managing group-buy campaigns.

## Tech Stack

- **Frontend:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (Free Tier)
- **Database & Auth:** Supabase (Free Tier) - *To be integrated*

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kol-brand-hub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
app/
├── page.tsx              # Landing page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
├── introduction/         # Introduction page
├── pricing/              # Pricing page
├── tutorial/             # Tutorial page
├── login/                # Login page
└── signup/               # Sign up page
```

## Features (Current Status)

### ✅ Completed (Sprint 0 - Landing Page)
- Landing page with hero section
- Navigation bar with routing
- Footer with links
- Responsive design with dark mode support
- Placeholder pages for Introduction, Pricing, Tutorial, Login, and Signup

### 🚧 In Progress
- Supabase integration (Database & Auth)
- User authentication system
- Dashboard for influencers
- Link-in-Bio management
- Personal store management

## Development Roadmap

See `spec.md` for the complete project specification and development sprints.

- **Sprint 0:** Project setup & architecture ✅
- **Sprint 1:** Auth & Link-in-Bio (2 weeks)
- **Sprint 2:** Personal Store & Product Funnel (3 weeks)
- **Sprint 3:** Analytics, Polish & Closed Beta (2 weeks)

## Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the deployment

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

Private project - All rights reserved.
