# Venture CI and Repo Hygiene Devlog

## 2026-06-30

- Started branch `codex/venture-ci-repo-hygiene` after PR #12 was merged into `main`.
- Goal: make the verification pipeline repeatable in GitHub and reduce local visual-QA noise in `git status`.
- This PR does not change Venture page UI, public copy, schema, navigation, RFQ behavior, footer, images, or CSS.

## Why This Was Needed

- Source tests, production build, and runtime route smoke checks were being run manually.
- Local visual QA produces screenshots, `.playwright-mcp/`, and `output/` directories that should not appear as PR candidates.
- A CI workflow makes future PRs safer by running the same checks before merge.

## Implementation

- Added root `.gitignore` entries for:
  - `.DS_Store`
  - `.playwright-mcp/`
  - `output/`
  - `togeto-next-js/output/`
  - `venture-*.png`
- Added `.github/workflows/venture-verification.yml`.
- Added `npm run test:source`.
- Updated README verification commands to use:
  - `npm run test:source`
  - `npm run build`
  - `npm run smoke:routes`
- Added `tests/repo-hygiene.test.mjs` so CI wiring and root ignore rules are covered by automated tests.
- Subagent review found no public app copy/schema/navigation changes. It requested two hygiene clarifications:
  - Keep untracked entity/source-material materials out of this PR.
  - Verify ignore behavior with `git check-ignore` and cover app-directory screenshots as well as root screenshots.
- Updated `.gitignore` to include `/togeto-next-js/venture-*.png`.
- Updated `tests/repo-hygiene.test.mjs` to assert actual `git check-ignore` behavior for root screenshots, app-directory screenshots, output folders, Playwright artifacts, and `.DS_Store`.

## Verification

- Red-state verification:
  - `node --test tests/repo-hygiene.test.mjs` failed before implementation because root `.gitignore` and the workflow file did not exist.
- Implementation verification:
  - `node --test tests/repo-hygiene.test.mjs`: passed, 2/2.
  - `npm run test:source`: passed, 52/52.
  - `npm run build`: passed; 24 static routes generated.
  - `npm run smoke:routes`: passed; 15 canonical routes checked, plus derived trailing-slash redirects and `/thank-you` redirect.
  - `git diff --check`: passed.
  - `git check-ignore -v .playwright-mcp/ output/ togeto-next-js/output/ venture-home-desktop.png togeto-next-js/venture-home-desktop.png docs/.DS_Store`: all expected local artifacts are ignored.
  - Public entity denylist search in `togeto-next-js/src`: no matches.
- Remote CI note:
  - PR #13 triggered the new `Venture verification` workflow, but GitHub did not allocate a runner.
  - Check-run annotation: `The job was not started because your account is locked due to a billing issue.`
  - This is an account/billing blocker, not a failure in the workflow commands. The equivalent local commands passed.

## Visual QA

- No human visual QA is required for this PR because it only adds CI, repo hygiene, tests, and documentation.
