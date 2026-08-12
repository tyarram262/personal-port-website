# Portfolio Visual Design

## Context

The original build used an "editorial-technical" aesthetic — near-black
background, acid-lime accent, an oversized display serif, a pinned
horizontal scroll-jacking projects rail, and four invented projects
standing in for real content. That combination (near-black + one bright
accent + high-contrast serif) is one of the more recognizable AI-generated
design defaults, and the invented content meant nothing on the page was
actually true.

The site was rebuilt against a reference the user pointed at directly:
**anirudhnukala.com** — a conventional, professional single-page portfolio.
Its bundle was fetched and read directly (it's a Vite SPA; the served HTML
shell is empty, so the real structure/tokens live in the compiled JS/CSS)
to ground the rebuild in real data rather than a description of the site.

## 1. What was kept from the reference, and what was changed

**Kept:** light slate palette, Inter as the primary typeface, single-column
centered layout (`max-width: 1000px`), the section order (hero → experience
→ projects → skills → contact-in-footer), card-based project/skill/experience
presentation, a fixed translucent nav, a mobile hamburger menu.

**Changed, deliberately:**

- The reference applies the same hover-lift to every card type (skills,
  experience, projects, contact) — four different things doing one trick.
  This build restricts the lift to project cards, which are the only cards
  that are actually links.
- The reference's muted text color (`#94a3b8` on white) is ~2.6:1 contrast —
  fails WCAG AA. This build's `--text-muted` (`#55637a` light / `#9aa7b8`
  dark) measures 6.08:1 and 7.74:1 respectively (verified numerically, not
  estimated).
- The reference's blue accent (`#3b82f6`) is common; this build uses a
  deeper `#1d4ed8` (light) / lighter `#6e9bff` (dark), both chosen to clear
  6.5:1+ against their background rather than for looks alone.
- No visible focus states in the reference. This build keeps a real
  `:focus-visible` outline on every interactive element.
- JetBrains Mono is used narrowly — dates and tech tags only — rather than
  Inter everywhere, which is the one deliberate typographic accent this
  design allows itself.
- Kept the light/dark toggle from the previous build (the reference is
  light-only); light is the default.

## 2. Design tokens (`app/globals.css`)

```css
:root {                          /* light, default */
  --bg: #ffffff;
  --bg-subtle: #f8fafc;
  --bg-inset: #f1f5f9;
  --border: #e2e8f0;
  --text: #0f172a;
  --text-muted: #55637a;   /* 6.08:1 on --bg */
  --accent: #1d4ed8;       /* 6.70:1 on --bg */
  --accent-hover: #1e40af;
  --accent-soft: #eff4fe;
}

:root[data-theme="dark"] {
  --bg: #0d1117;
  --bg-subtle: #151b23;
  --bg-inset: #1c232d;
  --border: #262d38;
  --text: #e6edf3;
  --text-muted: #9aa7b8;   /* 7.74:1 on --bg */
  --accent: #6e9bff;       /* 7.03:1 on --bg */
  --accent-hover: #8fb2ff;
  --accent-soft: rgb(110 155 255 / 0.12);
}
```

Layout: `--content-max: 1000px`, `--gutter: clamp(1.5rem, 4vw, 2rem)`,
`--radius: 12px` / `--radius-sm: 8px`.

Type: Inter (400–800) for all UI text, JetBrains Mono (400/500) for dates
and tech tags only. Scale: `--text-name` (hero name, `clamp(2.5rem, 6vw,
4rem)` / 800), `--text-h2` (section headings, `clamp(1.5rem, 3vw, 2rem)` /
700), `--text-lead` (hero bio, 1.125rem / 1.75), `--text-meta` (0.8125rem,
mono).

## 3. Page architecture

Single page: fixed nav (name, section links, theme toggle, mobile
hamburger) → Hero (name, title, bio, three buttons: email / view work /
résumé) → Experience (vertical list of role cards) → Projects (card grid,
each card a full link to GitHub, tags + a "Live" pill when deployed) →
Skills (three tag-chip groups) → Footer (email / GitHub / LinkedIn, year).

`components/ui/Section.tsx` centralizes the `<section id> + <h2>` wrapper
and its accent underline bar, so section spacing is defined in exactly one
place — the reference site defines section padding in three overlapping
CSS rules.

## 4. Content — `lib/site.ts`

All identity, experience, project, and skill data lives in one typed file.
Projects and skills were seeded from the user's public GitHub
(`github.com/tyarram262`, 30 public repos) rather than invented:

- **Projects** — the six most substantial repos by README depth, with
  descriptions derived from each repo's own README, not embellished. Ledger
  Check leads (the only one with a live deployment).
- **Skills** — the actual language/framework breakdown GitHub reports
  across those repos, not an aspirational list.
- **Experience** — GitHub carries no employment history, so this is the one
  section that ships as an explicit, visibly-marked placeholder rather than
  invented content. See `README.md` → "Before you deploy".

## 5. Motion

Deliberately minimal: color/border transitions on hover and focus
(`200ms ease`), and a `translateY(-4px)` lift on project cards only,
since those are the only cards that are links. No scroll-driven animation,
no load-in sequence, no smooth-scroll library. `framer-motion` and `lenis`
were removed from `package.json` — nothing in the new design needs them,
and removing them cuts the largest chunk of client JS from the previous
build.

## 5a. Real content pass (résumé + GitHub)

The user added `TYarram_Resume.pdf` to the repo (moved to
`public/TYarram_Resume.pdf` so it's actually servable — it was previously
untracked at the repo root, which meant the Résumé button 404'd). The PDF
uses subset fonts with remapped glyph codes; it was decoded by parsing each
font's `/ToUnicode` CMap and mapping the content-stream text through it, so
`lib/site.ts` now carries the résumé's real experience, education, and
skills verbatim rather than placeholders.

Changes this pass made to the page:

- **Experience** — three real roles (Visa ×2, Diasorin) with every résumé
  bullet, rendered as a vertical timeline (a connecting rule + node per
  role) since work history genuinely is a sequence — unlike the numbered
  markers this design intentionally avoided elsewhere.
- **Projects** — six cards: the résumé's three projects plus three of the
  strongest GitHub repos. Two résumé projects (Auto-Aim Optimization,
  AI-Powered Career Guidance Platform) have no public repo, so their cards
  render as plain, non-interactive `<div>`s — no hover lift, no link-out
  icon, no pointer cursor — rather than dead links.
- **Education** — new section: both degrees with coursework and GPA, plus
  the AERA 2026 publication.
- **Skills** — replaced the GitHub-derived list with the résumé's own four
  groups (Languages / Frameworks & libraries / Technologies /
  Methodologies) and added a Certifications block.
- **Nav** — gained an Education link; **Section** components alternate
  `--bg`/`--bg-subtle` bands now that the page has five sections.
- **Bug fix** — anchor links (`#experience` etc.) scrolled their target
  heading underneath the fixed nav, since `scroll-behavior: smooth` was set
  globally with no compensating offset. Fixed with `scroll-margin-top:
  5rem` on every section target.
- Phone number from the résumé is intentionally not shown as page text
  (scraping risk) — email, GitHub, and LinkedIn only.

## 6. Verification performed

- `npm run lint` and `npm run build` — both clean.
- Production server (`npm run start`), SSR HTML grepped to confirm: all six
  real project names render, all section `h2`s render, the résumé link
  renders, and the previous build's fabricated strings (`Orbital`,
  `Halcyon`, `Meridian`, `Vantage`, `UTC-8`, `fintech`, `hello@example.com`)
  are entirely absent.
- Compiled CSS chunk grepped to confirm the `[data-theme="dark"]` rule and
  its token values are actually emitted, not silently dropped.
- Compiled JS chunks grepped to confirm `framer-motion` and `Lenis` no
  longer appear anywhere in the client bundle.
- Every text/background color pair recomputed numerically (WCAG relative
  luminance), not estimated — see §2 for the actual ratios.

**Not verified (no browser automation available in this environment) — do
before shipping:**
- Visual review at 1440 / 1024 / 768 / 390px.
- The mobile hamburger menu's open/close behavior and focus handling.
- The theme toggle's visual result in both themes.
- Cross-browser check (Chrome + Safari at minimum).
- Lighthouse pass.
