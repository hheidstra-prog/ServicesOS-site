# Servible Public REST API — Documentation

> Base URL: `https://servible.app/api/v1` (or your admin app domain)
> Last updated: 2026-03-05

---

## Authentication

All endpoints require a Bearer token in the `Authorization` header:

```
Authorization: Bearer sk_live_<64-hex-chars>
```

API keys are managed in **Settings → API Keys** in the admin app.

**Error response** (401):
```json
{ "success": false, "error": "Invalid or missing API key" }
```

**CORS**: All endpoints return `Access-Control-Allow-Origin: *` and support `OPTIONS` preflight.

---

## Contacts

### `POST /api/v1/contacts`

Create a lead (client + contact + activity event).

**Request body:**
```json
{
  "name": "John Smith",           // required
  "email": "john@acme.com",       // required
  "phone": "+31612345678",        // optional
  "company": "Acme Corp",         // optional
  "message": "Interested in...",  // optional
  "source": "contact_form",       // optional → stored as "api:contact_form"
  "title": "Early bird signup"    // optional → event title (default: "Contact form submission")
}
```

**Response** (201):
```json
{
  "success": true,
  "clientId": "clx...",
  "contactId": "clx..."
}
```

**Errors:**
- `400` — "Name and email are required"
- `400` — "Invalid email address"

**Behavior:**
- Client deduped by `email + organizationId` (reuses existing client)
- Creates Contact, Event (with source/phone/company in metadata), and Notification

---

## Bookings

### `GET /api/v1/bookings/config`

Get the org's public booking configuration.

**Response** (200):
```json
{
  "success": true,
  "config": {
    "organizationName": "My Business",
    "title": "Intro Call",
    "durations": [15, 30],
    "buffer": 30,
    "requiresConfirmation": true
  }
}
```

---

### `GET /api/v1/bookings/available-days`

Get which days of the week have availability.

**Response** (200):
```json
{
  "success": true,
  "days": [1, 2, 3, 4, 5]
}
```

Day numbers: `0` = Sunday, `1` = Monday, ..., `6` = Saturday.

---

### `GET /api/v1/bookings/available-slots`

Get available time slots for a specific date.

**Query parameters:**
| Param | Required | Example | Description |
|-------|----------|---------|-------------|
| `date` | yes | `2026-03-15` | YYYY-MM-DD format |
| `duration` | yes | `30` | Duration in minutes |

**Response** (200):
```json
{
  "success": true,
  "date": "2026-03-15",
  "duration": 30,
  "slots": [
    { "time": "09:00", "available": true },
    { "time": "09:30", "available": false },
    { "time": "10:00", "available": true }
  ]
}
```

**Errors:**
- `400` — "date query param is required (YYYY-MM-DD)"
- `400` — "duration query param is required (minutes)"

**Behavior:**
- Slots generated in 30-min intervals within availability hours
- Unavailable if: conflicting booking (incl. buffer), or in the past

---

### `POST /api/v1/bookings`

Create a booking.

**Request body:**
```json
{
  "durationMinutes": 30,          // required
  "date": "2026-03-15",           // required, YYYY-MM-DD
  "time": "14:00",                // required, HH:mm (24h)
  "name": "John Smith",           // required
  "email": "john@acme.com",       // required
  "phone": "+31612345678",        // optional
  "notes": "Looking forward to it", // optional
  "source": "schedule_call"       // optional → stored as "api:schedule_call"
}
```

**Response** (201):
```json
{
  "success": true,
  "bookingId": "clx...",
  "status": "PENDING"
}
```

Status is `PENDING` if org requires confirmation, otherwise `CONFIRMED`.

**Errors:**
- `400` — "durationMinutes, date, time, name, and email are required"
- `400` — "Date must be YYYY-MM-DD format"
- `400` — "Time must be HH:mm format"
- `400` — "Invalid email address"
- `409` — "This time slot is not available"

**Behavior:**
- Validates slot availability against org's availability rules + existing bookings + buffer
- Creates Client (deduped), Contact, Booking, Event, Notification
- Sends confirmation email async (i18n based on org locale)

---

## Blog

### `GET /api/v1/blog/posts`

List published blog posts (paginated).

**Query parameters:**
| Param | Required | Default | Description |
|-------|----------|---------|-------------|
| `page` | no | `1` | Page number (min 1) |
| `limit` | no | `12` | Posts per page (max 50) |
| `category` | no | — | Filter by category slug |
| `locale` | no | — | Filter by translation locale (e.g. `en`, `nl`) |

**Response** (200):
```json
{
  "success": true,
  "posts": [
    {
      "id": "clx...",
      "title": "My Blog Post",
      "slug": "my-blog-post",
      "excerpt": "A short summary...",
      "locale": "en",
      "availableLocales": ["en", "nl"],
      "featuredImage": "https://res.cloudinary.com/...",
      "featuredImageAlt": "Description",
      "publishedAt": "2026-03-05T10:00:00.000Z",
      "createdAt": "2026-03-01T10:00:00.000Z",
      "author": {
        "name": "Hylke",
        "imageUrl": "https://..."
      },
      "categories": [
        { "id": "clx...", "name": "AI", "slug": "ai" }
      ]
    }
  ],
  "total": 42,
  "page": 1,
  "totalPages": 4
}
```

**Behavior:**
- Only published posts with `publishedAt <= now`
- Without `locale`: returns primary locale translation for each post
- With `locale`: only posts that have a translation in that locale
- Ordered by `publishedAt` descending

---

### `GET /api/v1/blog/posts/[slug]`

Get a single blog post by slug.

**Query parameters:**
| Param | Required | Description |
|-------|----------|-------------|
| `locale` | no | Locale code (e.g. `en`, `nl`) |

**Response** (200):
```json
{
  "success": true,
  "post": {
    "id": "clx...",
    "title": "My Blog Post",
    "slug": "my-blog-post",
    "excerpt": "A short summary...",
    "content": { "type": "doc", "content": [...] },
    "locale": "en",
    "availableLocales": [
      { "locale": "en", "slug": "my-blog-post" },
      { "locale": "nl", "slug": "mijn-blog-post" }
    ],
    "metaTitle": "My Blog Post | Servible",
    "metaDescription": "SEO description...",
    "featuredImage": "https://res.cloudinary.com/...",
    "featuredImageAlt": "Description",
    "publishedAt": "2026-03-05T10:00:00.000Z",
    "createdAt": "2026-03-01T10:00:00.000Z",
    "updatedAt": "2026-03-05T10:00:00.000Z",
    "author": {
      "name": "Hylke",
      "imageUrl": "https://..."
    },
    "categories": [
      { "id": "clx...", "name": "AI", "slug": "ai" }
    ],
    "tags": [
      { "id": "clx...", "name": "automation", "slug": "automation" }
    ]
  }
}
```

**Errors:**
- `404` — "Post not found"

**Behavior:**
- With `locale`: looks up by `BlogPostTranslation` (organizationId + locale + slug)
- Without `locale`: looks up by `BlogPost.slug` (legacy), uses primary locale translation
- `content` is TipTap JSON (rich text structure)
- `availableLocales` includes slug per locale for building language switcher links

---

### `GET /api/v1/blog/categories`

List all blog categories.

**Response** (200):
```json
{
  "success": true,
  "categories": [
    {
      "id": "clx...",
      "name": "AI",
      "slug": "ai",
      "description": "Articles about AI"
    }
  ]
}
```

---

## Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/contacts` | POST | Create lead |
| `/api/v1/bookings` | POST | Create booking |
| `/api/v1/bookings/config` | GET | Booking settings |
| `/api/v1/bookings/available-days` | GET | Which weekdays are available |
| `/api/v1/bookings/available-slots?date=&duration=` | GET | Time slots for a date |
| `/api/v1/blog/posts?locale=&category=&page=&limit=` | GET | List posts |
| `/api/v1/blog/posts/[slug]?locale=` | GET | Single post |
| `/api/v1/blog/categories` | GET | List categories |

## Integration Examples (servible.ai)

```js
// Contact form
await fetch("https://servible.app/api/v1/contacts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer sk_live_..."
  },
  body: JSON.stringify({
    name: "John Smith",
    email: "john@acme.com",
    message: "I'm interested in your services",
    source: "contact_form"
  })
});

// Schedule a call
await fetch("https://servible.app/api/v1/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer sk_live_..."
  },
  body: JSON.stringify({
    durationMinutes: 30,
    date: "2026-03-15",
    time: "14:00",
    name: "John Smith",
    email: "john@acme.com",
    source: "schedule_call"
  })
});

// Fetch blog posts in Dutch
const res = await fetch(
  "https://servible.app/api/v1/blog/posts?locale=nl&limit=6",
  { headers: { "Authorization": "Bearer sk_live_..." } }
);

// Get available slots
const slots = await fetch(
  "https://servible.app/api/v1/bookings/available-slots?date=2026-03-15&duration=30",
  { headers: { "Authorization": "Bearer sk_live_..." } }
);
```
