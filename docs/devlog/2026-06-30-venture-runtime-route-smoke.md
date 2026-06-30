# Venture Runtime Route Smoke Devlog

## 2026-06-30

- Started branch `codex/venture-runtime-route-smoke` after PR #11 was merged to `main`.
- Goal: add a runtime route smoke check so core pages are verified by HTTP responses, not only by source scans and production build output.
- This is a process/productization PR. It does not change Venture page UI, public copy, schema, navigation, RFQ behavior, footer, images, or CSS.

## Why This Was Needed

- During earlier visual review, pages such as `/services/`, `/quality-testing/`, `/official-resources/`, and `/request-a-quote/` appeared to fail in the local browser.
- The root cause was a bad local dev-server state and trailing-slash redirects, not a confirmed page regression.
- A runtime smoke command gives future development a quick way to distinguish a real route rendering regression from a local preview/server issue.

## Implementation

- Added `npm run smoke:routes`.
- Added `tests/runtime-route-smoke.test.mjs`.
- The smoke script:
  - requires an existing production build,
  - starts `next start` on an available `127.0.0.1` port,
  - checks 15 canonical public routes for HTTP `200` and route-specific text,
  - derives trailing-slash redirect checks from the canonical route list,
  - verifies `/thank-you` as a controlled redirect to `/`,
  - fails on obvious runtime error text such as `Application error` or `Internal Server Error`.
- Updated `README.md` with a short runtime smoke section.
- Added a `template-cleanup` guardrail so the smoke script and README entry cannot disappear silently.
- Subagent review found no public copy/schema/navigation changes. It requested two improvements before PR:
  - Start the Next server directly instead of through `npm run start`, then terminate the process group to reduce orphan-process risk.
  - Derive slash redirect checks from the canonical route list instead of checking only the four previously problematic URLs.

## Verification

- Red-state verification:
  - `node --test tests/template-cleanup.test.mjs` failed before implementation because `smoke:routes` did not exist.
- Implementation verification:
  - `node --test tests/template-cleanup.test.mjs`: passed, 13/13.
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs`: passed, 50/50.
  - `npm run build`: passed; 24 static routes generated.
  - `npm run smoke:routes`: passed; 15 canonical routes checked, plus derived trailing-slash redirects and `/thank-you` redirect.
  - `git diff --check`: passed.
  - Public entity denylist search in `togeto-next-js/src`: no matches.

## Visual QA

- No human visual QA is required for this PR because it only adds verification tooling and documentation.
