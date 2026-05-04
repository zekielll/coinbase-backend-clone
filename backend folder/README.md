# Coinbase Clone Backend

Backend API for the Coinbase clone assignment.

## Features

- JWT-based authentication with register/login/logout
- Protected user profile endpoint
- Crypto data endpoints: all, top gainers, new listings, create
- MongoDB persistence with Mongoose
- CORS configured for frontend integration

## Setup

1. Copy `.env.example` to `.env`.
2. Configure `MONGODB_URI`, `JWT_SECRET`, and `FRONTEND_URL`.
3. Install dependencies:

```bash
npm install
```

4. Start the backend:

```bash
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Profile
- `GET /api/profile` (protected)

### Crypto
- `GET /api/crypto`
- `GET /api/crypto/gainers`
- `GET /api/crypto/new`
- `POST /api/crypto` (protected)

## Frontend integration pointers

- Use `axios` or `fetch` with `credentials: 'include'` to preserve cookies.
- The frontend should login users via `/api/auth/login`, then fetch `/api/profile`.
- Add new crypto records with `POST /api/crypto` after authentication.
- Use `FRONTEND_URL` to allow requests from your frontend domain.
