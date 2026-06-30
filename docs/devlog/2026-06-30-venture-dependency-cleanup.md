# Venture Dependency Cleanup Devlog

## 2026-06-30

- Started branch `codex/venture-dependency-cleanup` after PR #10 was merged.
- Goal: remove package-level Togeto/template dependency residue after runtime template CSS and source cleanup, without changing Venture public copy, page structure, schema, RFQ behavior, footer, navigation, or entity wording.
- Scope kept narrow:
  - Remove unused template-era dependencies from `togeto-next-js/package.json`.
  - Recompute `togeto-next-js/package-lock.json` so the lockfile matches the reduced runtime manifest.
  - Remove unused GSAP/WOW helper source files that no live Venture page imports.
  - Remove the obsolete `resolve-wow-constructor` unit test because the helper it covered is no longer part of the app.

## Why This Was Needed

- Previous cleanup PRs removed live template pages, source modules, runtime CSS links, and public vendor CSS files.
- `package.json` still listed template packages such as Bootstrap, Swiper, GSAP, Redux, react-hook-form, modal-video, toast, pagination, tabs, Sass, WOW, and Yup even though the live app no longer imported them.
- Keeping those dependencies made the project look heavier than the actual Venture site and made future audits harder because unused packages could be mistaken for active architecture.

## Implementation

- Reduced runtime dependencies to:
  - `next`
  - `react`
  - `react-dom`
- Removed the following unused helper sources:
  - `src/plugins/gsap-scroll-to-plugin.js`
  - `src/plugins/gsap-scroll-trigger.js`
  - `src/plugins/gsap-split-text.js`
  - `src/plugins/index.js`
  - `src/utils/resolve-wow-constructor.mjs`
  - `tests/resolve-wow-constructor.test.mjs`
- Kept `public/venture-static/vendor/animate.min.css` and its layout link because homepage reveal classes still rely on the committed static stylesheet.

## Guardrails

- Added `tests/template-cleanup.test.mjs` coverage that:
  - Fails if template-only runtime dependencies return to `package.json`.
  - Requires live runtime dependencies to stay limited to the Next/React app runtime.
  - Fails if removed GSAP/WOW helper files are reintroduced.
- Red-state verification was run before implementation:
  - The new dependency test failed against the old manifest.
  - The new helper-source test failed while the old GSAP/WOW files still existed.

## Verification Notes

- Initial `npm uninstall ...` attempt hung without output and was interrupted.
- Switched to a safer two-step flow:
  - Edit `package.json`.
  - Run `npm install --package-lock-only --ignore-scripts --no-audit --no-fund --prefer-offline`.
- `package-lock.json` may still include package names such as `sass` in transitive optional/peer metadata, but the project no longer declares those as direct runtime dependencies.
- `npm ls --depth=0` also hung without output in this local environment and was interrupted; dependency verification used `package.json`, lockfile regeneration, source search, tests, and production build instead.
- Subagent review found no blocking runtime/build issues. It did catch two stale references introduced by removing the WOW helper:
  - Updated `togeto-next-js/README.md` verification command to remove the deleted `tests/resolve-wow-constructor.test.mjs`.
  - Updated `togeto-next-js/tsconfig.json` to remove the deleted `src/utils/resolve-wow-constructor.mjs` include entry.
- Verification completed:
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs`: passed, 49/49.
  - `npm run build`: passed; 24 static routes generated.
  - `git diff --check`: passed.
  - Public entity denylist search in `togeto-next-js/src`: no matches.

## Visual QA

- No new human visual QA is required for this PR because it does not change page copy, JSX rendering, CSS links, public CSS files, images, layout, navigation, or schema.
- Existing live pages should render the same as after PR #10.
