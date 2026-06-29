# Venture PR2 Core Content Depth Devlog

## 2026-06-29

- Started PR2 from latest `main` after PR #3 was squash-merged.
- Created branch `codex/venture-pr2-core-content-depth`.
- PR2 scope:
  - Add reusable buyer-facing content tables.
  - Add a Home buyer path / proof section.
  - Expand About Venture Electronics into a buyer-facing company page.
  - Expand Services Overview with a service hierarchy table.
  - Expand PCB Assembly / PCBA as the main conversion page.
  - Expand Quality & Testing into a richer testing hub.
- PR2 boundaries:
  - Do not remove remaining Togeto template source artifacts; that is a later cleanup PR.
  - Do not move Official Websites, Domains & Company Entities out of About.
  - Do not publish Wei Chi, Chinese entity wording, unconfirmed certificate scope, customer logos, fixed lead times, No MOQ promises, or always-on support claims.
  - Do not add non-canonical domains to Organization or WebSite schema.
- Implementation notes:
  - Added `content/page-types.ts` and `content/index.ts` so shared page/content types can support richer content without further expanding inline type definitions in `site-data.ts`.
  - Added `content-table` support to the shared Venture page renderer.
  - Added responsive table styling to both source and public `venture-exact.css` files.
  - Added Home buyer path content explaining buyer challenges and Venture support paths.
  - Expanded About, Services, PCB Assembly / PCBA, and Quality & Testing content with buyer-facing tables and claim-bounded wording.
  - Removed duplicated homepage enhancement blocks from Services and About after the pages received their own richer buyer-facing content.
- Verification completed:
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs` passed, 39/39 tests.
  - `npm run build` passed.
  - `git diff --check` passed.
  - Source and public `venture-exact.css` files are identical.
  - Local route smoke passed for `/`, `/about`, `/services`, `/services/pcb-assembly-pcba`, `/quality-testing`, and `/request-a-quote`.
- Subagent review:
  - Read-only pre-landing review completed with no issues found.
  - Reviewer noted the branch had not yet been committed, so review was based on working-tree changes.
  - Reviewer confirmed content-table rendering, FAQ/schema source alignment, Official Websites placement under About, removal of duplicated About/Services homepage enhancement blocks, and canonical Organization/WebSite schema.
  - Reviewer independently ran a smaller test subset, which passed 35/35; `tsc --noEmit` was interrupted by timeout and is not counted as completed verification.
- Visual review:
  - Opened the real local preview About page at `http://127.0.0.1:3002/about/` in the in-app browser for human visual acceptance.
  - Human visual review was accepted in the live local preview before PR2 commit and PR creation.
