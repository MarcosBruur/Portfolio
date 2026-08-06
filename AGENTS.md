# Repository Guide

## Commands
- Use npm with the committed `package-lock.json`: `npm run dev`, `npm run build`, and `npm run lint`.
- `npm run build` is the full TypeScript check (`tsc -b`) followed by the Vite production build; no test script or test suite is configured.
- Use `npx eslint src` for a focused client lint. `npm run lint` scans the repository except `dist`; generated `.netlify/functions-serve` files can produce missing-rule errors, and `netlify/functions/hello.ts` currently has unused-parameter errors.

## Application Structure
- `src/main.tsx` mounts `AppRouter`; define client routes in `src/router.tsx`. All routes render inside `src/layout/Layout.tsx` through its `Outlet`.
- Page components are in `src/views/`, reusable UI is in `src/components/`, and portfolio content is centralized in `src/data/index.ts`.
- Styling uses Tailwind CSS v4 through `@tailwindcss/vite`. Global custom theme tokens, the `.dark` variant, and shared animations live in `src/index.css`.

## Netlify Email Function
- Netlify deploys functions from `netlify/functions` as configured in `netlify.toml`.
- `npm run dev` starts Vite only; it does not serve `/.netlify/functions/*`. The contact form needs a Netlify-served environment or deployment for end-to-end testing.
- The contact form calls `/.netlify/functions/sendEmail`; `sendEmail.js` requires the server-side `RESEND_API_KEY`. Do not expose that key through Vite client variables.
- `tsc -b` checks only `src` and `vite.config.ts`; changes under `netlify/functions` need separate verification.
