## Goal

Update the Divination FAQ, turn the Amulets page into a clean migration-ready shop structure, and add the held Academic Writing page.

## Changes

### 1. Divination FAQ

- Change the section heading exactly to **“Honest Question, Honest Answers.”**
- Replace the FAQ list with the four supplied questions and answers, preserving the supplied wording and order.
- Add the new question-forming guidance and change sessions from video to a recorded phone call.

### 2. Amulets shop structure

- Treat the existing eight products as temporary demo content and remove them from the visible shop.
- Define two future catalog categories with stable slugs:
  - **Amulets**
  - **Prayer Beads / Mala Beads**
- Make the category tabs functional, accessible controls with a clear active state and an empty result state for each category.
- Add a reusable product data/card template behind the empty catalog so later WordPress/SureCart products can populate the same grid without redesigning the page.
- Keep this as frontend structure only; no SureCart connection will be attempted before the WordPress migration.
- Replace “(link to contact me page)” in the commissioned-creations paragraph with a real **Contact** link.

### 3. Academic Writing page

- Add a dedicated `/academic` page titled **“Marya Summers Complete CV.”**
- Show the CV area in a held state without inventing or linking an outdated PDF; the corrected PDF can be dropped into the prepared slot when Marya supplies it.
- Add an **Academic Writing / Complete CV** entry on the Writing page so the subpage is discoverable.
- Give `/academic` its own page title, description, Open Graph metadata, and social-card metadata consistent with the rest of the site.

## Technical details

- Keep catalog categories and products as typed data so they map cleanly to future SureCart category/product records.
- Use the existing visual language, tokens, typography, and shared link controls.
- Create the new route through the existing file-based routing system; generated route files remain untouched.

## Verification

- Check the exact Divination wording in the rendered page.
- Click both shop categories and confirm each active/empty state works.
- Confirm the commissioned-creations link opens Contact.
- Open `/academic` from Writing and confirm the held CV state has no broken PDF link.
- Check desktop and mobile layouts, then confirm the preview reports no build or browser errors.
