# ARUSHA HUB - Development Guide

## Project Structure

```
arusha-hub/
├── app/                    # Next.js app directory
│   ├── admin/              # Admin pages
│   ├── api/                # API routes
│   ├── property/           # Property details
│   ├── car/                # Car rental pages
│   ├── stays/              # Search & list stays
│   ├── cars/               # Search & list cars
│   ├── list-your-*/        # Business submission forms
│   ├── about/              # Info pages
│   ├── booking-*/          # Booking confirmation
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
├── lib/                    # Utilities & helpers
├── prisma/                 # Database schema
├── public/                 # Static assets
├── middleware.ts           # Auth middleware
└── package.json
```

## Database Models

### Property
- Basic info: name, slug, type, location
- Relationships: rooms, images, bookings

### Room
- Belongs to Property
- Price per night and capacity

### Vehicle
- Basic info: name, type, brand, model, year
- Pricing: pricePerDay
- Relationships: images, bookings

### Booking
- Universal booking/request model
- Used for both stays and car rentals
- Status: Pending, Confirmed, Cancelled, Completed

### PropertySubmission & VehicleSubmission
- Pending Review status
- Admin must approve before listing goes live

## API Routes

### Public
- `POST /api/book-property` - Submit stay booking request
- `POST /api/book-car` - Submit car rental request
- `POST /api/list-property` - Submit property for review
- `POST /api/list-car` - Submit vehicle for review

### Admin (Protected)
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/bookings` - List all bookings
- `PATCH /api/admin/bookings` - Update booking status
- `GET /api/admin/properties` - List properties
- `POST /api/admin/properties` - Create property
- `GET /api/admin/vehicles` - List vehicles
- `POST /api/admin/vehicles` - Create vehicle
- `GET /api/admin/submissions` - List pending submissions
- `PATCH /api/admin/submissions` - Approve/reject submission

## Adding a New Feature

1. **Update Prisma schema** if needed
2. **Create database migration** (handled by `db push`)
3. **Add API route** in `/app/api`
4. **Create UI components** in `/components`
5. **Add page** in `/app`
6. **Test locally** before committing

## Form Validation

All forms use Zod for schema validation:

```typescript
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
```

## Error Handling

- Try/catch blocks in API routes
- JSON error responses with status codes
- User-friendly error messages on frontend
- Console error logging for debugging

## Security Practices

- Never expose secrets in frontend code
- Always validate input on server
- Use httpOnly cookies for admin session
- Middleware protects `/admin` routes
- Password hashing with SHA-256

## Testing Locally

1. User registration flow (list-your-property, list-your-car)
2. Booking request submission
3. Admin login and dashboard
4. Update booking status
5. Search and filter functionality

## Common Issues

### Import errors
Check that paths are relative or use `@/` alias (configured in `tsconfig.json`)

### Database errors
Ensure DATABASE_URL is set and PostgreSQL is running

### Build errors
Run `npm install` and `npx prisma generate`

## Performance Tips

- Use `Suspense` for async components
- Optimize images with Next.js Image component
- Fetch data on server side when possible
- Avoid unnecessary re-renders
