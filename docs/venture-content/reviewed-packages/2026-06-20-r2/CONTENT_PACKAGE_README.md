# Venture GEO Website Content Package r2

## Status

- Package status: **reviewed, pending human approval and freeze**
- Revision: `2026-06-20-r2`
- Prepared: `2026-06-20`
- Content scope only: **no Next.js implementation is included**
- Template reference: `JHSHdhb/venture-web-temp` PR `#1`
- Template head SHA: `b7a10516cced88842b3b9c0bc157b6af318a189c`

## Why r2 exists

PR #1 was updated after the first package. The current template now removes most internal planning sections, separates Contact and RFQ, uses mailto-only RFQ behavior and hides unconfirmed homepage modules. r2 remaps every page to the revised page regions and records the remaining template fixes before content freeze.

## Included files

```text
venture-geo-content-package-r2-reviewed/
├── CONTENT_PACKAGE_README.md
├── TEMPLATE_SECTION_REVIEW.md
├── PAGE_REGION_MATRIX.md
├── CHANGELOG_R1_TO_R2.md
├── REVIEW_REPORT.md
├── QA_REPORT.json
├── Venture_GEO_Content_Package_r2_Combined.md
└── approved-md/
    ├── 00_sitewide-content-rules.md
    ├── 01_home.md
    ├── 02_services-overview.md
    ├── 03_pcb-assembly-pcba.md
    ├── 04_ems-box-build.md
    ├── 05_component-sourcing-bom-dfm-review.md
    ├── 06_pcb-fabrication-support.md
    ├── 07_quality-testing.md
    ├── 08_about.md
    ├── 09_official-resources.md
    ├── 10_resources.md
    ├── 11_contact.md
    ├── 12_request-a-quote.md
    ├── 13_insights.md
    ├── 14_privacy-policy.md
    ├── 15_terms.md
    ├── 16_sitemap.md
    ├── 17_thank-you.md
    └── _freeze-manifest.json
```

## Template decision

The current PR is suitable for **content planning and r2 review**, but not yet for content freeze. The remaining fixes are narrow and explicit:

1. Remove duplicate Services selection regions.
2. Remove the Project Path enhancement from Request a Quote.
3. Prevent duplicated testing-method regions on Quality.
4. Simplify the About identity block and remove decorative pseudo-proof.
5. Hold and hide Insights until real article routes exist.
6. Replace the Official Resources rationale section with buyer-facing verification guidance.
7. Make Resources downloads and Insights CTA conditional.
8. Complete browser visual QA.

## Content status rules

- All files remain `contentStatus: reviewed`.
- `Insights` and `Thank You` are `publishStatus: hold`.
- Public copy is separated from internal region contracts, image notes and claim reviews.
- Codex must map frozen copy only after human approval and hash regeneration.

## Freeze procedure

1. Complete the template fixes in `TEMPLATE_SECTION_REVIEW.md`.
2. Complete desktop and mobile browser QA.
3. Confirm the production domain, legal copy, images, downloads and certificate treatment.
4. Edit approved Markdown only.
5. Change all launch files to `contentStatus: frozen` and add approver/date.
6. Decide whether held pages stay held or receive launch-ready content.
7. Regenerate `_freeze-manifest.json` and QA.
8. Pilot-map the PCBA page before populating all routes.
