# Cole Vape Store - Next.js + Neon + Vercel

A modern, optimized e-commerce website for a vape store built with Next.js 14, Neon database, and deployed on Vercel.

## Features

- 🚀 **Next.js 14** with App Router for optimal performance
- 🗄️ **Neon Database** for serverless PostgreSQL
- 🌙 **Dark Mode** support with system preference detection
- 📱 **Fully Responsive** design with mobile-first approach
- 🔐 **Security** headers configured for Vercel deployment
- ⚡ **Optimized** for Vercel Edge Network

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Deployment**: Vercel
- **Form Handling**: Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon account (for database)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cole-vape-store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your Neon database URL:
```
DATABASE_URL="postgresql://user:password@ep-xxx.region.neon.tech/cole_vape_store?sslmode=require"
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   │   └── contact/   # Contact form endpoint
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── products/      # Products page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── components/        # React components
│   ├── Header.tsx
│   └── Footer.tsx
├── db/               # Database configuration
│   ├── index.ts
│   └── schema.ts
├── public/           # Static assets
├── drizzle.config.ts # Drizzle configuration
├── next.config.js    # Next.js configuration
├── tailwind.config.ts
└── vercel.json       # Vercel deployment config
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `DATABASE_URL`: Your Neon connection string
6. Click "Deploy"

## Neon Database Setup

1. Create a new project at [Neon Console](https://console.neon.tech)
2. Copy your connection string from the Neon dashboard
3. Add it to your Vercel environment variables as `DATABASE_URL`
4. Run migrations:
```bash
npm run db:push
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate migrations
- `npm run db:studio` - Open Drizzle Studio

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Neon PostgreSQL connection string | Yes |

## Performance Optimizations

- **Images**: Optimized with Next.js Image component
- **Fonts**: Self-hosted Google fonts via next/font
- **CSS**: Minified and optimized with Tailwind
- **Scripts**: Defer loading for faster page loads
- **Database**: Connection pooling configured for serverless

## Security

- Content Security Policy headers configured
- XSS protection enabled
- Clickjacking protection enabled
- SQL injection protection via Drizzle ORM

## License

MIT License
