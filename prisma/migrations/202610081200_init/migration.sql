# ARUSHA HUB

ARUSHA HUB is a local travel platform focused on Arusha, Tanzania. This MVP focuses on two core services:

- Accommodation
- Car rental

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma

## Local setup

1. Copy `.env.example` to `.env`.
2. Update the environment variables.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Push the Prisma schema:
   ```bash
   npx prisma db push
   ```
5. Seed sample data:
   ```bash
   npm run db:seed
   ```
6. Run the app:
   ```bash
   npm run dev
   ```

## Production notes

- Keep database credentials in environment variables.
- Configure admin credentials securely before launch.
- Only approved property and vehicle submissions should become public listings.
- Use booking request flows for V1 rather than fake live inventory.

## Key pages

- `/`
- `/stays`
- `/cars`
- `/property/[slug]`
- `/car/[slug]`
- `/list-your-property`
- `/list-your-car`
- `/admin`

## Admin status model

Requests are stored in the database and assigned a status such as `Pending`, `Confirmed`, or `Cancelled`.

## Deployment

Deploy this app to a managed Node.js environment with PostgreSQL. Set the production env vars and run Prisma migrations before launch.
