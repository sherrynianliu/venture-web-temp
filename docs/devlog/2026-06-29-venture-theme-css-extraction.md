# Venture Theme CSS Extraction Devlog

## 2026-06-29

- Started branch `codex/venture-theme-css-extraction` from `main` after PR #8 was merged.
- Goal: remove the remaining runtime dependency on the old template base theme CSS while keeping the current Venture first-launch UI stable.
- Scope kept intentionally narrow:
  - Remove `/assets/css/theme-main.css` from `src/app/layout.tsx`.
  - Replace the top contact strip's template / Bootstrap / Font Awesome classes with Venture-owned classes and inline SVG icons.
  - Replace `it-btn-orange` on error and 404 pages with the existing Venture CTA button classes.
  - Move the top strip and utility-page styling into synchronized Venture override CSS.
  - Delete the now-unlinked `public/assets/css/theme-main.css` and `public/assets/fonts/` Font Awesome assets.
- Not in scope:
  - Removing Bootstrap / animate / swiper / modal-video vendor CSS.
  - Redesigning header, navigation, service pages, or content sections.
  - Changing RFQ, schema, Official Websites page, or public entity wording.

## TDD / Guardrails

- Added red-state cleanup assertions before implementation:
  - live app files must not link `/assets/css/theme-main.css`
  - live app files must not use old `it-header-*`, `it-btn-orange`, `black-bg`, or `fa-light` classes
  - retired public styles now include `public/assets/css/theme-main.css`
  - retired public assets now include `public/assets/fonts`
  - override CSS must stay synchronized and must not mention `theme-main.css`
- Initial test run failed as expected on:
  - layout theme CSS link
  - topbar old classes
  - error / 404 button class
  - remaining public theme CSS file
  - override CSS comment mentioning `theme-main.css`

## Implementation

- `TopBarArea` now uses:
  - `CONTACT_CHANNELS` for phone and email values
  - Venture-owned `venture-top-strip__*` classes
  - inline SVG phone, email and location icons
  - proper `rel="noopener noreferrer"` on the map link
- `layout.tsx` no longer links `theme-main.css` and no longer exposes `--it-ff-*` template font variables.
- `error.tsx` and `not-found.tsx` now use `cta-button cta-button--primary`.
- `venture-overrides.css` now owns:
  - top contact strip layout and responsive hiding rules
  - utility-page layout for 404 / error
  - small scoped heading/paragraph inheritance normalization
- Source and public static copies of `venture-overrides.css` remain byte-for-byte synchronized.

## Verification

- `node --test tests/template-cleanup.test.mjs tests/venture-site-shell.test.mjs`: passed, 43/43.
- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs`: passed, 51/51.
- `npm run build`: passed; all 24 static routes generated.
- Active source/runtime scan for `theme-main.css`, `/assets/css/theme-main`, `assets/fonts`, old Font Awesome classes, old `it-header-*` classes, `it-btn-orange`, `black-bg`, template logistics copy, fake form alerts, unapproved email, Wei Chi / Chinese entity wording found matches only inside test guardrails.
- Browser MCP smoke covered desktop 1200px and mobile 390px for:
  - `/`
  - `/services/`
  - `/quality-testing/`
  - `/about/`
  - `/official-resources/`
  - `/contact/`
  - `/request-a-quote/`
  - `/services/pcb-assembly-pcba/`
  - `/services/ems-box-build/`
  - `/missing-page-for-404`
- Browser smoke result:
  - no horizontal overflow
  - no broken images
  - visible H1 on every checked route
  - top strip height is 40px on normal pages
  - header top offset is 40px on normal pages
  - no `theme-main.css` stylesheet link remains
- Console note:
  - The only error observed was the expected browser 404 for the intentionally missing route.
  - Other console messages were Next dev Fast Refresh / HMR and a non-blocking LCP hint.
- `git diff --check` against the entire diff crashed locally with exit code 139 while this branch deletes the large `theme-main.css` file.
- Path-limited `git diff --check --no-ext-diff` over all modified non-deleted source, CSS and test files passed.

## Human Visual QA Needed

- This PR removes a runtime CSS file, so human visual acceptance is still needed even though automated smoke passed.
- Recommended visual QA pages:
  - `/`
  - `/services/`
  - `/quality-testing/`
  - `/about/`
  - `/official-resources/`
  - `/contact/`
  - `/request-a-quote/`
  - `/services/pcb-assembly-pcba/`
  - `/services/ems-box-build/`
  - a missing URL such as `/missing-page-for-404`
- Pay special attention to:
  - top contact strip spacing and icon appearance
  - header vertical offset under the strip
  - mobile header / hamburger placement
  - CTA button styling on normal pages and 404 / error page
  - table overflow behavior on content-heavy pages
