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
- **Database & Auth:** Supabase (Free Tier) - *Integrated*

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

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Copy the contents from `env.example` to `.env.local`
   - Get your Supabase credentials:
     1. Go to [Supabase](https://app.supabase.com) and create a new project (or use an existing one)
     2. Navigate to Project Settings → API
     3. Copy your `Project URL` and `anon` `public` key
     4. Paste them into `.env.local`:
        ```
        NEXT_PUBLIC_SUPABASE_URL=your_project_url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
        ```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
app/
├── page.tsx              # Landing page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
├── introduction/         # Introduction page
├── pricing/              # Pricing page
├── tutorial/             # Tutorial page
├── login/                # Login page (with Supabase auth)
├── signup/               # Sign up page (with Supabase auth)
├── dashboard/            # User dashboard (protected)
└── auth/
    ├── callback/         # OAuth callback route
    └── logout/          # Logout route
components/
└── Navigation.tsx       # Reusable navigation component with auth state
lib/
└── supabase/
    ├── client.ts         # Browser Supabase client
    └── server.ts         # Server Supabase client
```

## Features (Current Status)

### ✅ Completed
- **Sprint 0 - Landing Page**
  - Landing page with hero section
  - Navigation bar with routing
  - Footer with links
  - Responsive design with dark mode support
  - Placeholder pages for Introduction, Pricing, Tutorial

- **Sprint 1 - Authentication (Partial)**
  - Supabase integration and configuration
  - User login with email/password
  - User signup with email/password
  - OAuth login with Google and Facebook (UI ready, providers to be configured)
  - Protected dashboard route
  - Logout functionality
  - Form validation and error handling
  - Dynamic navigation based on authentication state
  - Reusable Navigation component with conditional rendering

### 🚧 In Progress
- User profile management
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

## OAuth Configuration

The application supports OAuth login with Google and Facebook. To enable these providers:

1. See `OAUTH_SETUP.md` for detailed setup instructions
2. Configure OAuth providers in your Supabase dashboard
3. Add OAuth credentials to Supabase Authentication settings

## License

Private project - All rights reserved.
