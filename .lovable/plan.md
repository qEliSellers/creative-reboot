## Goal

Refresh the site's visual layer to match the v2 design system in the uploaded zip. Tokens, fonts, and brand imagery only — no route/content restructuring, no backend work.

## What changes

### 1. Design tokens (`src/styles.css`)
Recalibrate to v2's cooler, more editorial palette (currently warmer/greener):

- **Neutrals** → cooler linen scale: page `#F1EFEA`, card `#FAF9F5`, panel `#E8E4DB`.
- **Forest** softened: primary `#3A4634` (was oklch ~#34432D), deep `#2B3627`.
- **Gold** softened: `#B0904E` primary, `#97793C` strong, `#DCC79B` soft.
- **New teal accent** (`--teal-500..700`, semantic `--brand-emphasis` = `#235568`) — italic emphasis words (e.g. *wholly*) and Divination pathway shift from sage-green to teal.
- **Ink** warm charcoal `#24231E` / muted `#6A6557`.
- **Shadows** replaced with v2's warm charcoal-green tinted scale (`--shadow-card`, `--shadow-md`, `--shadow-lg`).
- Keep the existing `@theme inline` shadcn mapping; just update the underlying `--cream/--forest/--gold/--ink/...` variables and add `--teal` + `--brand-emphasis`.

### 2. Typography
- Swap body font from **Work Sans → Jost** (display stays Cormorant Garamond).
- Load via `<link>` in `src/routes/__root.tsx` head (per project rules — no remote `@import` in styles.css).
- Update `--font-sans` in styles.css.

### 3. Italic emphasis color
Add a small utility so italic emphasis words in display headings render in `--brand-emphasis` (teal). Apply to existing spots that already use `<em className="italic">` (home hero, contact header, etc.) — swap the class, no copy changes.

### 4. Imagery refresh
Replace current hero/pathway/band imagery with the v2 assets from the zip (better fidelity, match mockup). Upload via `lovable-assets` and replace the `.asset.json` pointers:

- `hero-spiral` → `assets/imagery/hero-spiral.jpg`
- `spiral-writing` → `path-writing.jpg`
- `spiral-divination` → `path-divination.jpg`
- `spiral-amulets` → `path-amulets.jpg`
- `spiral-creativity` → `path-mentorship.jpg`
- `spiral-air/water/earth/fire` → v2 versions (already present but updated crops)
- Add `band-spiral-book.jpg` for the "Story. Symbol. Intention. Creation." dark band on home.

Old assets deleted via `lovable-assets delete` once references are swapped.

### 5. Component polish (visual only)
- `Buttons.tsx`: keep pill shape; ensure gold outline hover → gold fill matches spec (already close).
- `PathwayCard.tsx`: verify shadow tokens now resolve to the warmer values automatically via CSS vars (no code change expected).
- `SiteHeader.tsx` / `SiteFooter.tsx`: no structural changes; they inherit the new tokens.

## Out of scope

- No new routes, no copy rewrites, no contact-form backend work (that's the separate task from earlier).
- No shadcn component overhauls.
- SKILL.md/design-guide HTML from the zip is reference only — not copied into the repo.

## Verification

Run `bun run build`; visit `/`, `/about`, `/writing`, `/amulets`, `/work-with-me`, `/contact` in Playwright and screenshot each to confirm palette, font, italic teal emphasis, and new imagery match the mockup.
