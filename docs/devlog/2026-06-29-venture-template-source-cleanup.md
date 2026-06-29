# Venture Template Source Cleanup Devlog

## 2026-06-29

- Started branch `codex/venture-template-source-cleanup` from updated `main` after PR #5 and PR #6 were merged.
- Scope for this PR:
  - Remove repo-level Togeto template directories that were no longer needed for the Venture launch site.
  - Remove demo-only template source chains that were still polluting search results and future Codex review.
  - Keep current Venture UI, content, RFQ flow, schema and navigation behavior unchanged.
  - Do not attempt P2 CSS/theme extraction in this PR.

## TDD Red State

- Added cleanup guardrail tests before deleting files.
- Initial `node --test tests/template-cleanup.test.mjs` failed as expected because:
  - `togeto-documentation` still existed.
  - `togeto-rtl-next-js` still existed.
  - `src/data/menu-data.ts` and other retired template files still existed.
- Expanded the cleanup guardrail after source review showed additional demo-only chains still contained logistics copy and fake form alerts.
- The expanded test failed as expected on `src/components/about`, proving the test was checking real remaining template source, not a false pass.

## Removed

- Removed repo-level template directories:
  - `togeto-documentation/`
  - `togeto-rtl-next-js/`
- Removed high-risk old source from the active Next project:
  - old `src/data/*` template data
  - old demo views except `src/views/home-6`
  - old template component groups such as service, faq, shop, portfolio, wishlist, forms, hero, blog, testimonial, etc.
  - old Redux, layout and hook chains used only by removed demo surfaces
- Preserved live Venture source:
  - `src/components/venture-site/`
  - `src/components/venture-home/`
  - `src/components/top-bar/`
  - `src/views/home-6/`

## Subagent Review Follow-Up

- Ran read-only subagent review for cleanup scope, live-route risk, guardrail tests and devlog accuracy.
- Fixed follow-up items before commit:
  - Removed unused `src/app/store-provider.tsx`, which imported the deleted Redux store.
  - Removed unused template helpers `src/components/item-not-found.tsx` and `src/components/error-msg.tsx`.
  - Removed stale `src/layouts/wrapper.tsx` from `tsconfig.json`.
  - Cleaned remaining template-name comments from active Venture source.
  - Narrowed cleanup guardrail tests from generic future directories such as `src/hooks`, `src/layouts`, `src/redux` and `src/components/ui` to the specific retired template files that should not return.

## Verification

- `node --test tests/template-cleanup.test.mjs`: passed, 7/7 tests.
- `node --test tests/template-cleanup.test.mjs tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs`: passed, 47/47 tests.
- `npm run build`: passed.
- Build signal after cleanup:
  - webpack compile completed in about 1.0-1.2s on the recorded runs.
  - all 24 static pages generated successfully.
- Active-source denylist search:
  - `Transport & Logistics`, `Global Shipping`, `Ocean Freight`, `Long Distance Moves`, and `alert(JSON.stringify` now appear only inside tests, not live source.
- Visible source component root now contains only:
  - `top-bar`
  - `venture-home`
  - `venture-site`
- UI smoke check on the live dev server:
  - Checked desktop and mobile for `/`, `/services`, the four service child pages, `/quality-testing`, `/about`, `/official-resources`, `/contact`, `/request-a-quote`, and `/resources`.
  - No missing H1, missing header/footer/main, broken image or horizontal overflow was detected in that smoke pass.

## TypeScript Gate

- Ran `npx tsc --noEmit` before and after broader template-source cleanup.
- In both attempts, the command produced no output and did not complete within the allotted window, so it was interrupted.
- Ran `npx tsc --noEmit --pretty false` again after removing the stale `store-provider.tsx` and `src/layouts/wrapper.tsx` include; it still produced no output and did not complete within about 90 seconds, so it was interrupted.
- Because standalone TypeScript did not complete cleanly, this PR does not change `next.config.mjs` or disable `ignoreBuildErrors`.
- Current build still passes because the project already uses Next build with TypeScript validation skipped.

## Remaining

- P2 still owns CSS/theme extraction and `theme-main.css` removal.
- Next config TypeScript strictness should be revisited only after `npx tsc --noEmit` can complete with actionable output.

## Follow-up Cleanup: Source-Only Styles, Types and Utilities

- Started branch `codex/venture-css-theme-audit` from `main` after PR #7 was merged.
- Kept the scope intentionally narrow:
  - Remove unused source-only Togeto SCSS and auxiliary CSS files.
  - Remove unused old template utility/type files.
  - Remove the public `company-report.txt` template artifact.
  - Keep `public/assets/css/theme-main.css` loaded for current first-launch visual stability.
  - Do not attempt full Venture-owned CSS extraction or runtime theme replacement in this branch.
- Added guardrail tests so removed files do not return:
  - `src/app/globals.scss`
  - `public/assets/scss/`
  - unused `custom-animation.css`, `font-awesome-pro.css`, `spacing.css`
  - unused `src/utils/*` template helpers except the retained WOW constructor resolver
  - unused old `src/types/*`
  - public `company-report.txt`
- Synchronized the source and static copies of `venture-overrides.css` and updated comments so they reference `theme-main.css` as a transitional base CSS file, not Togeto/Transport branding.
- Cleaned the top comment in `theme-main.css` to describe it as a transitional base theme dependency for Venture, while leaving the runtime CSS content unchanged.

## Follow-up Verification

- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs`: passed, 51/51 tests.
- `npm run build`: passed; all 24 static routes generated.
- `git diff --check`: passed.
- Active source/runtime residue scan for Togeto/logistics copy, fake form alerts, `support@venture-mfg.com`, Wei Chi/Chinese entity wording, deleted SCSS/type paths and old aliases found matches only in test assertions.
- Browser MCP route smoke passed for:
  - `/`
  - `/services/`
  - `/quality-testing/`
  - `/contact/`
  - `/services/pcb-assembly-pcba/`
- Browser smoke returned correct Venture page titles for the checked routes.
- Additional browser overflow smoke at a 1200px viewport passed for `/`, `/services/`, `/quality-testing/`, `/contact/`, and all four service child pages:
  - no horizontal page overflow detected
  - no broken images detected
  - each checked page returned a visible H1
- Console entries during browser smoke were Next dev Fast Refresh/HMR messages only; no page runtime error was observed in those logs.
- Playwright CLI screenshot smoke was attempted, but the wrapper tried to download `@playwright/cli` from npm and was blocked by restricted network access. Chrome headless also failed in this desktop sandbox, so this follow-up does not claim a full screenshot-based visual QA pass.

## Follow-up Remaining

- `theme-main.css` is still a runtime dependency and should remain until a separate P2 visual-regression pass extracts the needed styles into Venture-owned CSS.
- Full mobile visual QA is still a human/browser review task if the future PR removes or rewrites runtime theme CSS.
