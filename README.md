# Rafeeq landing page

Next.js App Router, React, TypeScript and GSAP with ScrollTrigger.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open the Local URL printed in the terminal.

## Validate and build

```sh
npm run typecheck
npm run build
```

Run `npm start` after building to preview the production site at http://127.0.0.1:3017.

The production site is exported to `out/`, ready for static hosting. The project can also be imported into Vercel as a Next.js project.

## Edit

- `app/page.tsx` assembles the landing page.
- `components/landing-motion.tsx` owns GSAP timelines, ScrollTrigger pinning, the reminder handoff and responsive cleanup.
- `lib/content.ts` contains the Arabic content, features, routines and FAQs.
- `app/globals.css` contains the existing design tokens and responsive styles.
- `public/` contains the original screenshots and Tajawal fonts.

The routine demo runs locally in the browser. Store availability copy and dialog content live in `components/download-section.tsx`.
# Rafeeq-next
