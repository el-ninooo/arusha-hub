# ARUSHA HUB - Deployment Guide

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 12+
- A hosting provider (Vercel, Railway, AWS, Digital Ocean, etc.)

## Local Development

### 1. Setup Environment

```bash
cp .env.example .env
```

Update `.env` with your local PostgreSQL URL and settings.

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Database

```bash
npx prisma db push
npm run db:seed
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

- Admin login: `admin@arusha-hub.com` / `change-me`

## Production Deployment

### 1. Environment Variables

Set these securely in your hosting provider:

```
DATABASE_URL=your_production_database_url
NEXTAUTH_SECRET=generate_a_random_32_character_string
NEXTAUTH_URL=your_production_domain
ADMIN_EMAIL=your_secure_admin_email
ADMIN_PASSWORD=your_secure_admin_password
NODE_ENV=production
```

### 2. Database Setup

```bash
npx prisma migrate deploy
npm run db:seed
```

### 3. Build the App

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Add PostgreSQL (Railway, Neon, or Supabase)
5. Set environment variables
6. Deploy

## Security Checklist

- [ ] Change default admin credentials
- [ ] Enable HTTPS (auto on Vercel)
- [ ] Set secure NEXTAUTH_SECRET
- [ ] Use environment variables for secrets
- [ ] Enable database backups
- [ ] Set up rate limiting
- [ ] Monitor error logs
- [ ] Implement request validation
- [ ] Enable CSRF protection (Next.js default)
- [ ] Regularly update dependencies

## Monitoring

- Monitor error logs in your hosting dashboard
- Set up email alerts for critical errors
- Track database performance
- Monitor uptime

## Troubleshooting

### Database Connection Issues

Verify DATABASE_URL is correct and includes the schema:

```
postgresql://user:password@host:port/database?schema=public
```

### Prisma Errors

If you see Prisma errors, try:

```bash
npx prisma generate
npx prisma db push --skip-generate
```

## Performance Optimization

- Enable image optimization in Next.js
- Use CDN for static assets
- Implement caching strategies
- Optimize database queries
- Monitor Core Web Vitals
