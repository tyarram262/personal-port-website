# Personal Website

Software engineer portfolio for Tanush Yarram. Single-page layout — nav,
hero, experience, projects, education, skills, footer — with a light/dark
toggle. Inter for UI text, JetBrains Mono for dates and tech tags. See
`docs/design.md` for the full design rationale.

All content (identity, experience, projects, education, skills) lives in
one place: `lib/site.ts`, sourced from `public/TYarram_Resume.pdf` and
public GitHub (`github.com/tyarram262`).

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Optional follow-ups

- **Headshot** — add `public/headshot.jpg` and set `identity.headshot =
  "/headshot.jpg"` in `lib/site.ts` to show a photo in the hero.
- Keep `public/TYarram_Resume.pdf` in sync if the résumé changes — the
  hero's Résumé button links straight to it.

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve a production build
- `npm run lint` — ESLint
