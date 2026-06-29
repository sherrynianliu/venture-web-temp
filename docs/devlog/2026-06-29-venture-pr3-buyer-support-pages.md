# Venture PR3 Buyer Support Pages Devlog

## 2026-06-29

- Started PR3 from latest `main` after PR #4 was merged.
- Created branch `codex/venture-pr3-buyer-support-pages`.
- PR3 scope:
  - Expand EMS & Box Build into a buyer-facing support page.
  - Expand Component Sourcing / BOM / DFM Review with clearer BOM risk and approval guidance.
  - Expand PCB Fabrication Support with assembly-ready fabrication inputs.
  - Expand Resources into a practical RFQ preparation hub.
  - Expand Contact and Request a Quote so buyers can choose the right path.
  - Improve the first-launch RFQ mailto workflow with a copyable email body fallback.
- PR3 boundaries:
  - Keep `info@venture-mfg.com` as the confirmed RFQ and general inquiry email.
  - Keep Official Websites, Domains & Company Entities under About and keep route `/official-resources/`.
  - Do not publish Wei Chi, Chinese entity wording, unconfirmed certificate scope, customer logos, fixed lead times, No MOQ promises, or always-on support claims.
  - Do not add historical, associated, candidate, redirected, or non-owned domains to Organization or WebSite schema.
  - Do not remove remaining Togeto template source artifacts in this PR.
- Implementation notes so far:
  - Added buyer-facing tables for EMS & Box Build scope, BOM risk review, assembly-ready PCB fabrication inputs, RFQ checklist, and contact path selection.
  - Reworked Resources FAQ around file readiness, test-plan readiness, BOM alternatives, large files, project-specific schedule, and EMS / Box Build inputs.
  - Added first-launch RFQ page copy explaining that the page does not upload files directly.
  - Updated the RFQ composer labels to buyer-friendly fields: Contact person, Files available, Delivery destination, Message, and Testing needs.
  - Added `Copy RFQ Details` as a fallback for buyers whose email client does not open from `mailto:`.
  - Collapsed duplicate contact email wording to `Email / RFQ` when RFQ and general inquiry emails are the same.
- Verification status:
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs` passed, 40/40 tests.
  - `npm run build` passed.
  - `git diff --check` passed.
  - Local route smoke passed for `/services/ems-box-build/`, `/services/component-sourcing-bom-dfm-review/`, `/services/pcb-fabrication-support/`, `/resources/`, `/request-a-quote/`, and `/contact/`.
  - Subagent spec-compliance review found no issues.
  - Subagent launch-risk/code-quality review found no blocking issues.
  - Addressed the non-blocking review suggestion by adding runtime `pageData` content-table shape checks for the PR3 buyer-support pages.
  - Pending human visual acceptance in live browser preview.

## Content QA note: structure is right, content depth is still thin

- Human visual/content review found that the current site structure is directionally correct, but several pages still read too thin for a real B2B manufacturing website.
- The current issue is not a new IA direction problem. The pages have the right routes, service hierarchy, RFQ path, claim boundaries, and GEO-safe structure, but the copy does not yet explain enough manufacturing context for a buyer to feel the depth of Venture Electronics' capability.
- Root cause to remember for retro:
  - The prior implementation plan focused heavily on route cleanup, template cleanup, schema safety, contact/RFQ correctness, and claim boundaries.
  - It did not define a clear content-depth acceptance bar such as minimum explanation coverage, service-specific buyer scenarios, method matrices, FAQ count, process detail, or per-page manufacturing vocabulary coverage.
  - Because no content thickness threshold was set, implementation could pass tests and subagent review while still feeling sparse to a human buyer.
- Follow-up content-depth need:
  - Services Overview needs more explanation of how PCB Assembly / PCBA, Turnkey PCBA, EMS & Box Build, Component Sourcing, BOM / DFM Review, PCB Fabrication Support, and Quality & Testing map to real buyer situations.
  - Quality & Testing needs a fuller, buyer-facing quality system explanation using conservative method categories such as supply chain and component management, IQC, SPI, FAI, AOI, X-Ray, cleaning, electrical testing, ICT, Boundary Scan, FCT, environmental / reliability testing, records, traceability, and certificate boundaries.
  - The old Venture websites and Enterprise Brain can be used as public vocabulary and evidence sources, but old strong claims must not be copied into the new site.
- Suggested next patch scope:
  - Do not restart the whole site direction.
  - Add a dedicated Services + Quality & Testing content-depth patch that expands tables, explanatory copy, FAQs, and tests.
  - Keep the same claim boundaries: no fixed lead time, no No MOQ promise, no 24/7 support, no customer logos, no Aerospace / Defense positioning, no unverified certificate scope, no IPC Class 3, IATF, BSCI, RoHS / REACH overclaims.
  - Add tests that verify the presence of the new service-selection and quality-method coverage, not just the existing route/schema shell.

## Implementation plan update

- Added a dedicated follow-up implementation plan: `docs/venture-content/2026-06-29-services-quality-content-depth-patch-plan.md`.
- Updated the master implementation plan to reference this as PR `2A` / `content: deepen Venture Services and Quality pages`.
- Plan decision:
  - Do not return to the already-merged `codex/venture-pr2-core-content-depth` branch.
  - Prefer a new branch from latest `main` after PR3 is resolved.
  - If done before PR3 merge, treat it as a stacked PR because it will also edit `site-data.ts` and `venture-site-shell.test.mjs`.
- The addendum turns the content-depth concern into explicit acceptance criteria for Services and Quality & Testing:
  - Services must explain buyer situations, service ownership, supporting capabilities, old-site topic mapping, scope boundaries, and FAQ.
  - Quality & Testing must cover lifecycle planning, method matrix, buyer inputs, records/traceability, special processes, reliability/environmental boundaries, certificate boundaries, non-promises, and FAQ.

## PR3 close-out verification

- Re-ran `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs`: passed, 40/40 tests.
- Re-ran `npm run build`: passed.
- Re-ran `git diff --check`: passed.
- Re-ran local route smoke for `/services/ems-box-build/`, `/services/component-sourcing-bom-dfm-review/`, `/services/pcb-fabrication-support/`, `/resources/`, `/request-a-quote/`, and `/contact/`: all returned `200`.
- Visual/content acceptance note for PR body:
  - PR3 buyer-support structure, RFQ flow, and claim boundaries are ready for review.
  - Human review found broader Services Overview and Quality & Testing content depth still needs a follow-up patch.
  - Do not claim the whole website content-depth issue is resolved by PR3.
