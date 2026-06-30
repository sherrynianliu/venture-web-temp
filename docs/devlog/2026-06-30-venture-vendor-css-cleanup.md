# Venture Vendor CSS Cleanup Devlog

## 2026-06-30

- Started branch `codex/venture-vendor-css-cleanup` from `main` after PR #9 was merged.
- Goal: continue reducing remaining template/runtime CSS baggage after `theme-main.css` removal, without changing Venture page structure, copy, schema, RFQ behavior, or entity wording.
- Scope kept narrow:
  - Remove unused runtime links for Bootstrap, Swiper, and modal-video vendor CSS from `src/app/layout.tsx`.
  - Delete the corresponding public vendor CSS files:
    - `public/venture-static/vendor/bootstrap.min.css`
    - `public/venture-static/vendor/swiper-bundle.min.css`
    - `public/venture-static/vendor/modal-video.min.css`
  - Keep `animate.min.css` because `use-venture-reveals.ts` still applies `wow` / `animate__*` classes for homepage reveal motion.

## Guardrails

- Expanded `tests/template-cleanup.test.mjs` so live app files cannot re-link:
  - `/venture-static/vendor/bootstrap.min.css`
  - `/venture-static/vendor/swiper-bundle.min.css`
  - `/venture-static/vendor/modal-video.min.css`
- Added the same three public files to the retired style path guardrail list.
- Red-state test confirmed the new checks failed before implementation on the existing layout and public vendor files.

## Implementation

- Removed the three vendor stylesheet links from `layout.tsx`.
- Deleted the three unused vendor CSS files.
- Confirmed `public/venture-static/vendor/` now only contains `animate.min.css`.

## Verification

- `node --test tests/template-cleanup.test.mjs`: passed, 10/10.
- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs`: passed, 51/51.
- `npm run build`: passed; 24 static routes generated.
- `git diff --check`: passed.
- Browser smoke on the live dev server covered desktop and mobile for `/`, `/services/`, `/quality-testing/`, `/about/`, `/official-resources/`, `/contact/`, `/request-a-quote/`, `/services/pcb-assembly-pcba/`, and `/services/ems-box-build/`.
  - No horizontal overflow.
  - No broken images.
  - No Togeto text.
  - No `bootstrap`, `swiper-bundle`, `modal-video`, or `theme-main` stylesheet links.
  - Remaining stylesheet links are `animate.min.css`, `venture-exact.css`, and `venture-overrides.css`.

## Review Notes

- Subagent review initially flagged Chinese-entity / Wei Chi wording and schema/footer changes in the working tree.
- That finding was correct for the transient local state, but those edits were unrelated entity-source drafts that had reappeared from local stash handling.
- The entity/schema/footer draft edits were stashed again under `pre-pr10-entity-edits-reappeared`.
- Final PR scope contains only vendor CSS cleanup, cleanup tests, and this devlog.

## Visual Preview Incident

- During human visual review, `/services/`, `/quality-testing/`, `/official-resources/`, and `/request-a-quote/` appeared to fail rendering in the browser.
- Server logs showed the pages had previously returned `200`, but the dev server later entered a bad local preview state: the Next process still existed, while localhost/127.0.0.1 requests could no longer connect reliably.
- Restarted the dev server and bound it explicitly to `127.0.0.1:3002`:
  - `npm run dev -- --port 3002 --hostname 127.0.0.1`
- Follow-up HTTP checks confirmed the trailing-slash URLs redirect with `308` to the canonical no-trailing-slash paths, and the final routes return `200`.
- Browser checks then successfully loaded:
  - `http://127.0.0.1:3002/services`
  - `http://127.0.0.1:3002/quality-testing`
  - `http://127.0.0.1:3002/official-resources`
  - `http://127.0.0.1:3002/request-a-quote`
- Conclusion: the reported render failure was a local dev-server/host binding state issue, not a confirmed page runtime regression from removing Bootstrap / Swiper / modal-video CSS.

## Environment Note

- Before build verification, the local `node_modules/next` install was incomplete and missing `next/dist/compiled/webpack/NodeEnvironmentPlugin.js`.
- Downloaded the exact `next@16.2.9` tarball with `npm pack`, verified the missing file existed in the tarball, and replaced only the local `node_modules/next` directory.
- No package files were changed by the dependency repair.

## Visual QA Needed

- This PR removes runtime CSS files, so browser visual review is still required even though automated tests and build passed.
- Suggested visual QA pages:
  - `/`
  - `/services/`
  - `/quality-testing/`
  - `/about/`
  - `/official-resources/`
  - `/contact/`
  - `/request-a-quote/`
  - `/services/pcb-assembly-pcba/`
  - `/services/ems-box-build/`
- Focus areas:
  - top strip and header spacing
  - button styling
  - table overflow
  - mobile menu placement
  - page-level spacing previously affected by Bootstrap defaults
