# Venture Template Cleanup UI Copy Plan Devlog

Date: 2026-06-28

## Scope

- Created an implementation plan only.
- No website implementation changes were made in this step.
- The plan is stored at `docs/venture-content/2026-06-28-venture-template-cleanup-ui-copy-implementation-plan.md`.

## Inputs Reviewed

- User-provided review notes on remaining Togeto template artifacts.
- Current local preview behavior for `/official-resources/`.
- Existing Venture GEO implementation plan style in `docs/venture-content/`.
- Current Header, Venture page renderer, site data, CSS, package scripts, and Next config.

## Key Findings Captured

- The slow local page open is primarily a Next dev cold compile issue. The observed route request spent about 46 seconds in Next compilation while application code was about 206 ms.
- Remaining Togeto template artifacts are still a real maintenance and trust problem, but they are not the direct cause of the slow first local render.
- Public pages are cleaner than the repository internals, but old data, demo routes, documentation folders, contact/form fragments, and theme CSS still pollute search and future edits.
- Official Resources needs to read like a buyer-facing verification guide, with GEO handled through schema and clear HTML structure rather than visible AI-facing prose.
- Mobile navigation is a P0 visual/UX issue because desktop nav is hidden below 820 px without a replacement menu.

## Decisions Encoded In The Plan

- Add guardrail tests before deleting template artifacts.
- Keep Webpack as the stable local preview/build path for now.
- First improve buyer-facing Official Resources copy, compact hero presentation, and mobile navigation.
- Then remove high-risk unused template artifacts in a separate cleanup PR.
- Keep deeper CSS extraction as P2 to avoid destabilizing the currently working Venture shell.

## Open Items For User Approval

- Delete old template directories versus archive them.
- Keep current Official Resources H1 versus shorten it.
- Leave deep CSS extraction for P2 versus include it in this round.
- Rename only package metadata now versus also renaming the `togeto-next-js` folder later.

## Update: Navigation IA And RFQ Mailto Plan

Requested additions were incorporated into the implementation plan:

- Added a Chinese implementation change table covering all planned modules.
- Added a task to move `Official Websites & Domains` under About and add Contact as a top-level navigation item.
- Clarified that desktop `Request a Quote` can remain a CTA button, while mobile navigation must include it as an accessible action.
- Added a first-launch RFQ plan using a mailto composer instead of backend submission.
- Set `info@venture-mfg.com` as the planned RFQ mailto recipient for this first-launch version.
- Recorded that users must attach Gerber, BOM, CPL, drawings, and related files in their email client because mailto cannot reliably upload files from the webpage.

## Update: PR/Main Sync Check

- Checked GitHub PR status before attempting to merge.
- Found no open PR associated with `codex/venture-domain-governance-page`.
- Confirmed recent PRs were already merged:
  - PR #2 `feat: add Venture GEO structured data plan` merged into `main` at `2026-06-28T01:44:16Z`.
  - PR #1 `fix: clean Venture public page structure` merged into `main` at `2026-06-27T11:45:45Z`.
- Confirmed `main`, `origin/main`, and current HEAD were already aligned at commit `0d8eaea`.
- Switched local workspace back to `main`.
- Preserved current uncommitted implementation-plan, devlog, and page-related working-tree changes.

## Update: Core Page Content Depth Plan

- Added the user's review that current Venture pages are too skeletal for real buyer review even though they are GEO-friendly.
- Added the conclusion that content depth itself should not materially slow the site; large images, video, and complex JS are the heavier risks.
- Added a reusable buyer-facing content table task so company facts, service hierarchy, capability tables, and testing matrices can render as real tables instead of bullet dumps.
- Added P0 content expansion tasks for:
  - About Venture Electronics.
  - Services Overview.
  - PCB Assembly / PCBA.
  - Quality & Testing.
- Added a P1 backlog for EMS & Box Build, Component Sourcing / BOM / DFM, PCB Fabrication Support, Resources / RFQ Prep, Request a Quote, and Contact.
- Added claim-boundary guidance to avoid copying old-site high-risk claims such as fixed lead times, No MOQ, 24/7 support, customer logos, unconfirmed certifications, or sensitive-industry claims.
- Updated PR shape so buyer UI/RFQ/navigation, P0 content expansion, template cleanup, and P2 CSS extraction can ship as separate reviewable changes.

## Update: Plan Review Fixes

- Ran an independent subagent review of the implementation plan.
- Reviewed external ChatGPT feedback supplied by the user.
- Agreed with the major corrections:
  - Add `Task 0: Source Authority Freeze` before UI/content/schema work.
  - Centralize RFQ/general inquiry routing in `CONTACT_CHANNELS`.
  - Remove Wei Chi / Chinese entity relationship from public visible copy and schema until client confirmation.
  - Keep `/official-resources/` route but place `Official Websites, Domains & Company Entities` under About and remove it from Resources.
  - Add metadata overrides through `seoTitle` and `metaDescription`.
  - Avoid public-facing internal terms like claim boundary / avoid / public-safe.
  - Keep FAQPage schema synchronized with visible FAQ content.
  - Add PageEnhancements audit after content expansion.
  - Split page content into `content/pages/*` instead of continuing to grow `site-data.ts`.
- Separate work into five PRs: public facts/RFQ/nav, core content depth, buyer-support pages, template cleanup, CSS/runtime cleanup.
- Kept the user's preferred complete public clarification-page name: `Official Websites, Domains & Company Entities`.

## Update: GStack Plan Review Scope And Email Decision

- Invoked `gstack-plan-eng-review` to review the implementation plan before construction.
- Scope challenge initially recommended narrowing to PR1, but the user chose the full master-plan path because domain roles, RFQ path, navigation, and entity boundaries have already been confirmed across the Venture workspace, web repo, and Enterprise Brain repo.
- Rechecked local source authority:
  - `venture-geo-website-workspace/00_context/decisions.md`
  - `venture-geo-website-workspace/00_context/client-communication-service-record.md`
  - `zbot-enterprise-brain-venture/review/build-report.md`
  - `zbot-enterprise-brain-venture/sources/summaries/venture-client-replies-20260619.md`
- Locked first-launch public RFQ/general inquiry email to `info@venture-mfg.com`.
- Updated the plan to remove the `support@venture-mfg.com` fallback branch and treat `support@` as a superseded older planning value unless the client later issues a new explicit replacement decision.
- Recorded the user's scope decision: execute the full master implementation plan, but ship it as five sequential PRs with separate QA/subagent review and visual acceptance gates instead of one large PR.
- Recorded the user's template cleanup decision: delete `togeto-documentation/` and `togeto-rtl-next-js/` during the template-cleanup PR instead of archiving them inside the repo.
- Recorded the user's CSS decision: keep the current template theme dependency during P0/P1 for visual stability, then handle Venture-owned CSS extraction and `theme-main.css` removal in the final PR after desktop/mobile screenshot QA passes.
- Recorded the user's Official Resources naming decision: use `Official Websites, Domains & Company Entities` consistently for H1, About dropdown, About teaser, footer/breadcrumb labels, and metadata/schema page naming while keeping the `/official-resources/` route.
- Recorded the user's package/dir naming decision: rename only `package.json` / `package-lock.json` package metadata in this implementation plan and do not rename the `togeto-next-js/` directory during the five planned PRs.
- Recorded the user's content source decision: buyer-facing content expansion should primarily use `zbot-enterprise-brain-venture` as source authority; Venture main website, `venture-pcba.com`, product catalog, and old-site material can be used only as supplemental evidence/vocabulary and must be rewritten into human-friendly and GEO-friendly public copy.
- Added `Task 0A` to the implementation plan to create a buyer-page source map before Official Domains, core content, and buyer-support page copy expansion.
- Recorded the user's type-migration decision: Task 0 should only add `seoTitle` / `metaDescription` to the existing `PageData` type in `site-data.ts`; full `PageData` / `PageSection` / `PageFAQ` / `DomainGovernanceRecord` migration to `content/page-types.ts` belongs to Task 7 with reusable content tables.
- Recorded the user's test-reconciliation decision: PR1 must first migrate existing tests away from old `support@venture-mfg.com`, top-level `Official Websites`, and unimplemented `ItemList` expectations before adding new source-authority guardrails.
- Recorded the user's lightweight performance-gate decision: every PR should capture build duration, route timings, Next image/LCP warnings, required desktop/mobile screenshots, and any new priority-image decision; PR5 still owns deeper CSS/runtime cleanup.
- Added the `GSTACK REVIEW REPORT` as the final section of the implementation plan: Eng Review is clear with 4 folded findings, 0 unresolved decisions, and 0 critical gaps.
