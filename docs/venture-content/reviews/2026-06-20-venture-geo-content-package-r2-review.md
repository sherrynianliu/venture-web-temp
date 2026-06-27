# Venture GEO Content Package r2 Review

Date: 2026-06-20

Source archive: `docs/venture-content/source-materials/Venture_GEO_Content_Package_r2_Reviewed_2026-06-20.zip`

Saved package directory: `docs/venture-content/reviewed-packages/2026-06-20-r2/`

## Review Conclusion

The r2 package is internally consistent and suitable to keep as the reviewed content planning package for the Venture GEO site. It is not ready to use as the active frozen implementation source.

The package self-identifies as `reviewed, pending human approval and freeze`, and the manifest status is `reviewed-not-frozen`. All Markdown files have `contentStatus: reviewed`, with empty `approvedBy` and `approvedAt` fields. Codex should not map this content into runtime page modules until a human-approved frozen revision is produced.

## Independent Checks

- ZIP contents include 26 files: package reports, combined Markdown, QA JSON, review templates, and 18 files under `approved-md/`.
- `_freeze-manifest.json` lists all 18 Markdown files.
- All manifest SHA-256 hashes match the extracted Markdown files.
- All page routes and canonical URLs are unique.
- Every Markdown page has exactly one H1.
- Held routes are correctly marked:
  - `13_insights.md` has `publishStatus: hold`, `navVisibility: hidden`, `sitemapVisibility: false`, `noIndex: true`.
  - `17_thank-you.md` has `publishStatus: hold`, `navVisibility: hidden`, `sitemapVisibility: false`, `noIndex: true`.
- Current repository HEAD matches the package template baseline: `b7a10516cced88842b3b9c0bc157b6af318a189c`.

## Findings

### P0 - Must Resolve Before Freeze

1. The package is reviewed, not frozen.
   - `manifestStatus` is `reviewed-not-frozen`.
   - All content files remain `contentStatus: reviewed`.
   - Approval fields are blank.

2. Template blockers documented in the package are still present in the current codebase.
   - `PageEnhancements.tsx` still renders `ProjectPathStepper` on `/request-a-quote/`.
   - `site-data.ts` still includes `/insights/` in sitemap links, resource navigation, footer links, and page data, even though the package marks Insights as held.
   - `VentureIdentityBlock.tsx` still contains decorative avatars, a plus button, and the `Engineering turnaround / DFM` pseudo-stat that the package says to remove before freeze.

3. Legal pages are not final.
   - `14_privacy-policy.md` and `15_terms.md` both have `legalReviewRequired: true`.
   - They should not be treated as client-approved legal copy without human or legal review.

4. Production domain and schema fields still need human confirmation.
   - The package uses `https://www.venture-mfg.com/` as canonical base.
   - Schema output must remain allowlist-only and should not include unapproved fields such as `sameAs`, founding date, certifications, customer names, capacity, ratings, or reviews.

### P1 - Resolve Before Launch

1. Quality content and visual quality components need de-duplication in implementation.
2. Official Resources should render buyer-facing verification guidance, not internal rationale.
3. Resources downloads, Insights CTAs, and article cards must be conditional until real approved assets/routes exist.
4. Browser visual QA is still open for desktop and mobile.
5. Images, downloads, and certificate treatment remain conditional.

## Recommended Handling

- Keep this package under `docs/venture-content/reviewed-packages/2026-06-20-r2/`.
- Keep the original zip under `docs/venture-content/source-materials/` as the immutable source snapshot.
- Do not copy the `approved-md/` folder into `docs/venture-content/approved-md/` yet, because that path should be reserved for the future frozen package used by implementation.
- After template fixes and human review, regenerate a frozen package with:
  - `contentStatus: frozen`
  - populated `approvedBy` and `approvedAt`
  - updated `_freeze-manifest.json`
  - confirmed production domain, legal copy, image/download handling, and schema allowlist
- Start implementation with the PCBA pilot mapping only after the frozen package exists.
