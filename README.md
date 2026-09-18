# Techids

Techids, Inc. is a student-led, adult-governed STEM education organization. This repository contains the public website and its private submission-management system.

## Stack

- React, Vite, JavaScript/JSX, CSS, React Router
- Node.js and Express
- SQLite for local development
- bcrypt password hashing and JWT-protected administrator access

## Run locally

Prerequisite: Node.js 22.5 or newer (the server uses Node's built-in SQLite module).

1. Install both applications:

   ```bash
   npm install
   npm --prefix server install
   ```

2. Copy `.env.example` to `.env`, and copy `server/.env.example` to `server/.env`.
3. In `server/.env`, set a long, unique `JWT_SECRET`. Do not commit either `.env` file.
4. Create the first administrator account:

   ```bash
   npm --prefix server run create-admin -- admin@example.org use-a-strong-password-of-at-least-12-characters
   ```

5. In separate terminals, start the API and web app:

   ```bash
   npm run server
   npm run dev
   ```

The frontend runs at `http://localhost:5173`; the API runs at `http://localhost:5001`. Sign in at `/admin/login`.

## Submission flow

Public forms post to the Express API, which validates input and stores development data in `server/data/techids.db`. Authenticated administrators can review submissions and update their status at `/admin`.

## Project notes

- The supplied archive did not include the official Techids logo or local photography. Replace the current visual placeholders and external sample images with licensed local files in `public/` before production.
- SQLite is for local development. Use a managed PostgreSQL database, HTTPS, a secure host-specific `JWT_SECRET`, backups, and tighter rate limiting before production.
- Do not commit `.env` files or a database that contains real submissions.

## GitHub workflow

Use a feature branch, test with `npm run build` and the API health endpoint, commit with a clear message, open a pull request, review, then merge. Keep `main` protected.
