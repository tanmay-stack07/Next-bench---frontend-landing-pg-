# Next Bench Dashboard

An interactive full-screen Spline animation built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- @splinetool/react-spline for 3D background

## Getting Started

Prerequisites:
- Node.js 18+
- npm 9+

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx        # Root layout and metadata
  page.tsx          # Renders full-screen Spline scene
  globals.css       # Tailwind layers and base styles
components/
  Dashboard.tsx     # Full-screen Spline component
public/             # (optional) static assets
```

## Notes on Spline

- The Spline component is imported from `@splinetool/react-spline` and rendered client-side.
- The scene URL is configured in `components/Dashboard.tsx`.

If you encounter export or module errors after upgrading packages, try:

1. Delete the `.next/` folder
2. Restart the dev server: `npm run dev`

## Scripts

- `dev`: Start Next.js in development
- `build`: Create an optimized production build
- `start`: Start production server (after build)
- `lint`: Run Next.js ESLint

## Tailwind

Configuration is in `tailwind.config.ts`. Content globs scan `app/` and `components/`.

## Deployment

This app can be deployed to platforms supporting Next.js (Vercel, Netlify, etc.).

- Ensure environment variables (if any) are defined in the platform settings.
- Set build command to `npm run build` and output as managed by Next.js.

## License

MIT
