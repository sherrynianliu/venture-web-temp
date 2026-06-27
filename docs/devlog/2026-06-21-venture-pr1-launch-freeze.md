# Venture PR #1 Launch Freeze

Date: 2026-06-21

## Scope

Visual design is frozen for PR #1. No further image swaps, component swaps, module-order changes, or page-structure redesigns were made in this pass.

## Main Branch Sync

- Fetched `origin/main`.
- Checked `origin/main...HEAD`: the PR branch is ahead and not behind main.
- Ran `git merge origin/main --no-edit`; result was `Already up to date`.
- GitHub public PR API reported PR #1 as `mergeable: true` and `mergeable_state: clean` after the main sync check.
- No template demo routes were restored.

## PDF Download Migration

The Resources page no longer depends on the old WordPress `wp-content/uploads/2023/09` PDF URLs.

Downloaded and served locally:

- `/assets/downloads/venture/EN-Venture-Electronics-EMS-Catalog-2023-09-new-1.pdf`
- `/assets/downloads/venture/EN-Venture-Electronics-PCB-Solution-09-1.pdf`

Both local PDFs returned `200` in the production smoke test.

## Verification

- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs`: 23/23 passing.
- `npm run build`: passing.
- `git diff --check`: passing.
- Route smoke: approved public pages returned `200` after Next trailing-slash normalization.
- Old template checks: no Togeto/shop/portfolio/blog-detail/demo-route markers found in approved route HTML.

## GEO / SEO Checks

- Canonicals resolve under `https://www.venture-mfg.com`; Next normalizes the homepage canonical to `https://www.venture-mfg.com`, and all inner pages use `https://www.venture-mfg.com/.../`.
- `/sitemap.xml` contains only approved public routes.
- `/thank-you/` is excluded from sitemap.
- `robots.txt` disallows `/thank-you/`.
- JSON-LD has no `sameAs`, no unconfirmed social URLs, and no `venture-pcba.com` schema identity.
- Contact and Request a Quote remain separate pages.
- `/insights` returns `404`; `/blog` redirects away to the homepage and does not expose fake article cards.

## Remaining Launch Notes

- Client approval is still needed for public use of real factory/people/process images.
- Legal copy should receive final client/legal approval before production launch.
