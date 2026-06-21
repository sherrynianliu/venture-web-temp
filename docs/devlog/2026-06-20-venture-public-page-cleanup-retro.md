# 2026-06-20 Venture Public Page Cleanup Retro

## Scope

This devlog records the second Venture website restructuring pass completed on branch `feat/venture-geo-lean-site-shell` after the first GEO shell pass had already landed.

PR:

- `https://github.com/JHSHdhb/venture-web-temp/pull/1`

Relevant local commit:

- `b7a1051 fix: clean Venture public page structure`

## What changed in this pass

The second pass was not a cosmetic wording sweep. It changed the public page contract:

- Removed internal review language from public page data and footer copy.
- Separated `Contact` from `Request a Quote` so the two routes no longer duplicate the same job.
- Replaced the inactive RFQ visual form with mailto-only submission guidance.
- Hid homepage modules that had no confirmed public assets:
  - catalog banner
  - factory showcase
  - fake blog/resources teaser
- Reduced homepage duplication:
  - fixed H1
  - restored both CTAs
  - removed duplicate service card logic
- Stopped mechanical reuse of the same tail blocks for every route:
  - `Related pages` now renders conditionally
  - legal and utility pages now use a plain header and no related-pages block
- Added regression tests for:
  - internal phrase deny-list
  - RFQ mailto-only behavior
  - hidden unconfirmed asset modules
  - legal and utility page layout suppression

## Why the structure changed twice

The short answer is that the first pass solved the wrong layer of the problem first.

Pass 1 optimized for:

- route alignment
- template consolidation
- shell reuse
- getting the approved sitemap into a navigable Next.js structure fast

Pass 2 optimized for:

- launch-safe public content boundaries
- page-role separation
- conditional rendering of unconfirmed assets
- legal and utility page behavior

Those are not the same acceptance criteria.

The first implementation used a generic page renderer because the fastest path to a working site shell was:

- one shared `VenturePage`
- one shared hero/sections/tail pattern
- one shared route registry in `site-data.ts`

That was structurally efficient, but it embedded assumptions that later proved false:

1. Not every page should share the same page anatomy.
2. Content-package review notes are not safe to expose as page sections.
3. `Contact` and `RFQ` are not two skins of the same intake page.
4. Asset-backed blocks must default to hidden, not placeholder-visible.

So the page structure changed twice because the first pass was a shell-and-routing implementation, while the second pass was a launch-governance correction.

## Root cause

The real root cause was missing page contracts before code generation.

Specifically, we had the sitemap, but we did not freeze these items up front:

- a page-type matrix
- a public-copy allowlist / internal-copy deny-list
- route ownership rules for `Contact` vs `RFQ`
- conditional rendering rules for unconfirmed assets
- explicit exceptions for legal, sitemap, and utility pages

Without those contracts, the implementation naturally collapsed into the simplest reusable abstraction: one generic page template plus placeholder-capable modules.

That abstraction was locally clean, but globally wrong for launch.

## What should have happened earlier

Before writing the inner-page renderer, the repo should have had a launch contract similar to:

- `service-conversion`: Services, PCBA
- `strategic-service`: EMS & Box Build
- `supporting-capability`: Sourcing, Fabrication
- `quality-process`: Quality & Testing
- `brand-resource`: About, Official Resources, Resources, Insights
- `utility-legal`: Contact, RFQ, Privacy, Terms, Sitemap, Thank You

And each type should have declared:

- whether it gets a visual hero
- whether it gets related links
- whether it can show enhancement modules
- whether it can contain downloads
- whether it may render forms

If we had encoded that first, the second restructure would have been much smaller.

## How to avoid this next time

1. Freeze page types before implementation.
   Turn sitemap IA into a render contract, not just a route list.

2. Write launch-boundary tests first.
   The deny-list and conditional-render rules should exist before page content is wired.

3. Separate internal content fields from public page schema.
   Internal review notes should live outside the object shape consumed by public React components.

4. Default uncertain modules to `hidden`, not `placeholder`.
   Catalogs, galleries, blog cards, social buttons, and badges should only appear when backed by confirmed data.

5. Treat `Contact`, `RFQ`, and legal pages as separate product surfaces.
   They should not inherit service-page behavior by default.

6. Run a launch audit before polishing visuals.
   Governance mistakes hidden inside a polished template are more expensive to unwind later.

## What improved after the second pass

The site is now materially closer to a launchable public shell:

- public copy is less likely to leak internal review language
- route purpose is clearer
- the homepage no longer pretends unconfirmed assets exist
- RFQ behavior matches the stated mailto-only launch plan
- legal and utility pages no longer inherit service-page chrome

## Follow-up confirmed

This was not part of the 2026-06-20 cleanup pass, but it was completed in the 2026-06-21 follow-up:

- the official Venture `PCB Catalog` page is `https://www.venture-mfg.com/pcb-catalog/`
- two visible English PDFs are now linked from the Resources page:
  - `https://www.venture-mfg.com/wp-content/uploads/2023/09/EN-Venture-Electronics-EMS-Catalog-2023-09-new-1.pdf`
  - `https://www.venture-mfg.com/wp-content/uploads/2023/09/EN-Venture-Electronics-PCB-Solution-09-1.pdf`

## Verification

- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs`
  - passed `16/16`
- source sensitive-phrase scan over `src`
  - no matches for the blocked internal phrases
- subagent final review
  - no issues found

## Decision

The second change was justified. The first pass created a workable shell quickly, but it was too generic for public launch constraints. The second pass corrected the contract that should have been explicit before the renderer was generalized.
