# Venture Services + Quality Content Depth Devlog

## 2026-06-29

- Started a stacked content-depth patch on branch `codex/venture-services-quality-depth`.
- Branch note:
  - This branch is stacked on PR3 (`codex/venture-pr3-buyer-support-pages`) because PR3 is still open.
  - After PR3 lands, this branch should be rebased or retargeted onto the updated `main`.
- Scope:
  - Deepen Services Overview so it reads like a buyer-facing manufacturing service selection page.
  - Deepen Quality & Testing so it explains method categories, buyer inputs, records, traceability, special processes, reliability boundaries and certificate boundaries.
  - Keep current navigation, RFQ route, Official Websites placement, and schema identity rules unchanged.
- Source review:
  - Read `zbot-enterprise-brain-venture` client reply and old-site summary files.
  - Read `venture-geo-website-workspace` service record and decisions.
  - Used old Venture website vocabulary only as source material for service and quality method categories.
- Public-copy boundaries preserved:
  - No Wei Chi, Chinese entity, or unconfirmed public relationship wording.
  - No fixed lead-time, fixed response-time, No MOQ, always-on support, named customer-reference, Aerospace / Defense, IPC Class 3, IATF, BSCI, or unverified certification claims.
  - ISO / UL-related wording remains evidence-bound and not expanded into a blanket project guarantee.
- Test-driven implementation:
  - Added failing Services depth coverage test first.
  - Added failing Quality depth coverage test first.
  - Expanded Services content in `site-data.ts` with service-selection tables, buyer situations, service ownership, consolidated old-site topic mapping, scope boundaries and Services FAQ.
  - Expanded Quality & Testing content with lifecycle planning, inspection/testing method matrix, buyer-input table, records/traceability table, cleaning/coating/special-process boundaries, reliability/environmental boundaries, certificate boundaries, non-promises and Quality FAQ.
  - Adjusted risk wording so forbidden overclaim phrases do not appear in public content, even inside negative examples.
- Verification status:
  - `node --test tests/venture-site-shell.test.mjs` passed, 29/29 tests.
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs` passed, 42/42 tests.
  - `npm run build` passed.
  - `git diff --check` passed.
  - Local route smoke passed after following Next redirects for `/services/`, `/quality-testing/`, `/services/pcb-assembly-pcba/`, `/about/`, and `/services/ems-box-build/`.
  - Subagent review and live visual QA are still pending.

## Review And Visual QA Update

- Subagent source/claim/schema review completed with no blocking issues.
- Review follow-up handled:
  - Added direct runtime assertions that Services and Quality & Testing FAQPage JSON-LD is emitted from the same `page.faqs` data used by visible FAQ sections.
  - Re-ran `node --test tests/venture-site-shell.test.mjs`: passed, 29/29 tests.
  - Re-ran full suite: `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs`: passed, 42/42 tests.
  - Re-ran `git diff --check`: passed.
  - Re-ran `npm run build`: passed. One earlier build run was interrupted while it was in trace collection after a long webpack compile, so it was not counted; the final clean build completed with exit code 0.
- Visual QA performed:
  - Checked `/services` and `/quality-testing` at mobile and desktop widths.
  - No whole-page horizontal overflow found.
  - Long content tables stay inside the table container and can scroll horizontally on narrow viewports.
  - Services page now presents service-selection guidance, buyer situations, service ownership, consolidated support capabilities, scope boundaries and FAQ.
  - Quality & Testing now presents lifecycle planning, inspection/testing method matrix, buyer inputs, records/traceability, special-process boundaries, reliability/environmental boundaries, certificate boundaries, non-promises and FAQ.
  - Confirmed the apparent round "N" marker in screenshots was not a website DOM element or CSS artifact; it did not appear as page content.
- Local preview:
  - Restarted Next dev server on `http://localhost:3002`.
  - Opened `http://localhost:3002/services` for human visual acceptance.

## Four Service Detail Pages Follow-Up QA

- User asked whether the four Services dropdown detail pages should also be checked:
  - `/services/pcb-assembly-pcba`
  - `/services/ems-box-build`
  - `/services/component-sourcing-bom-dfm-review`
  - `/services/pcb-fabrication-support`
- Route smoke:
  - All four service detail pages returned `200` on local preview.
- Automated visual/layout QA:
  - Checked all four pages at desktop width and mobile width.
  - No whole-page horizontal overflow found.
  - Each page renders its H1, section headings and content table without breaking the layout.
- Content-depth judgment:
  - `PCB Assembly / PCBA` is reasonably complete for this launch: capability review, delivery models, process overview, RFQ checklist, schedule boundary and FAQ.
  - `EMS & Box Build` is also reasonably complete: scope table, fit criteria, required inputs, stabilization process and FAQ.
  - `Component Sourcing, BOM & DFM Review` is still thinner than the new Services / Quality content standard. It has a useful BOM risk table and approval boundary, but should be expanded with sourcing models, buyer inputs, DFM/DFA review areas, substitution approval workflow, records and FAQ.
  - `PCB Fabrication Support` is still thinner than the new Services / Quality content standard. It has an assembly-ready fabrication input table and consolidated-topic rationale, but should be expanded with fabrication inputs, stack-up/material/finish guidance, panelization/test-point concerns, output records and FAQ.
- Recommended next content patch:
  - Keep PCBA and EMS mostly as-is unless visual review requests small copy edits.
  - Add a focused `Sourcing + Fabrication detail-page depth patch` before treating all Services dropdown pages as equally launch-ready.

## Human Acceptance Correction: Service Detail Pages Need More Depth

- Human review clarified the content-depth bar after checking the Services dropdown detail pages.
- Updated acceptance interpretation:
  - The higher-level `/services` overview page and `/quality-testing` page now feel directionally OK in content richness.
  - However, after clicking into the child service pages from the Services dropdown, the detail pages still do not feel rich enough for final client-facing acceptance.
  - This applies especially to the service-detail experience around:
    - `PCB Assembly / PCBA`
    - `EMS & Box Build`
    - `Component Sourcing, BOM & DFM Review`
    - `PCB Fabrication Support`
- Important correction:
  - Do not treat the earlier automated layout pass as content acceptance for these child service pages.
  - Automated QA only confirmed routing, rendering and overflow behavior.
  - Human content acceptance now requires a fuller detail-page pass before these child pages should be considered launch-ready.
- Next action:
  - User will organize additional content direction/source material for these child service pages.
  - Future implementation should likely become a dedicated `service detail page depth patch`, not another broad site-wide rewrite.

## Service Detail Page Depth Patch

- User confirmed the four Services dropdown child pages also need construction now, not only a future note.
- Implementation scope:
  - Deepened `/services/pcb-assembly-pcba/` with buyer-facing explanations for PCBA meaning, delivery models, assembly methods, turnkey workflow, sourcing relationship, process flow, inspection/testing dependency, schedule boundary and EMS handoff.
  - Deepened `/services/ems-box-build/` with fit criteria, scope matrix, required inputs, PCBA-to-system workflow, system-level testing, configuration, packaging, labeling, pilot-build stabilization and boundaries.
  - Deepened `/services/component-sourcing-bom-dfm-review/` with BOM risk matrix, sourcing rules, customer-approved alternative flow, DFM/DFA review areas, RFQ-quality output, quote assumptions and non-promises.
  - Deepened `/services/pcb-fabrication-support/` with assembly-ready fabrication positioning, buyer inputs, fabrication-to-assembly impact, board capability categories, panelization, review flow, consolidation rationale and boundaries.
  - Expanded all four child pages to at least 8 buyer-facing FAQs each so visible FAQ content can drive FAQPage JSON-LD.
- Test-driven implementation:
  - Added failing tests first for service detail page section coverage, FAQ/schema sync and minimum runtime content depth.
  - Initial red state confirmed the child pages were still thin and missing the new section/FAQ expectations.
  - Implemented the content-depth patch in `site-data.ts`.
  - Updated the focused shell tests to assert the new child-page content depth and schema behavior.
- Claim boundaries preserved:
  - No Wei Chi, Chinese entity or unconfirmed entity wording.
  - No fixed lead time, No MOQ, 24/7 support, customer logos, Aerospace / Defense positioning, IPC Class 3, IATF, BSCI or other unsupported certification claims.
  - Testing, sourcing, substitution, fabrication and schedule language stays project-specific and tied to buyer input, approved files, quotation scope or acceptance criteria.
- Focused verification:
  - `node --test tests/venture-site-shell.test.mjs` passed, 32/32 tests.
- Full verification:
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs` passed, 45/45 tests.
  - `npm run build` passed and prerendered all four service child routes.
  - `git diff --check` passed.
- Browser visual QA:
  - Restarted a hung local Next preview process and relaunched `http://localhost:3002`.
  - Checked all four service child pages at desktop width and mobile width:
    - `/services/pcb-assembly-pcba`
    - `/services/ems-box-build`
    - `/services/component-sourcing-bom-dfm-review`
    - `/services/pcb-fabrication-support`
  - No whole-page horizontal overflow found on desktop or mobile.
  - Mobile tables stay contained inside horizontal table scrollers instead of widening the page.
  - H1 and section heading structures render for all four pages.
  - Captured PCBA desktop and mobile viewport screenshots for visual sanity check; page style matches the existing Venture site shell.
- Remaining before final acceptance:
  - Human visual acceptance is still required in the live browser preview.

## Post-Review Test Tightening

- Subagent review found no blocking engineering, schema or claim-boundary issues.
- Review residuals were about test strength:
  - One child-page depth test was scanning the whole `site-data.ts` source instead of binding expectations to each runtime page.
  - One depth threshold counted non-visible page-data fields.
  - FAQ schema sync checked counts, but not question and answer text identity.
- Follow-up changes:
  - Replaced the broad source scan with page-specific runtime assertions against each service child page's section titles.
  - Changed the depth guard to count visible page text: title, summary, direct answers, sections, tables, lists, links and FAQs.
  - Added FAQPage JSON-LD question and answer text equality checks against `page.faqs`.
- Focused verification:
  - `node --test tests/venture-site-shell.test.mjs` passed, 32/32 tests.
