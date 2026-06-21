# Venture Real Factory Evidence Images

Date: 2026-06-21

## Context

The uploaded `Venture_Real_Factory_Image_Pack_20260621.zip` did not contain the image binaries directly. It contained a manifest, browser preview/download page, a non-generative download/optimization script, a page placement list, and client collection notes.

Running the included script downloaded 16 candidate images into a temporary audit folder. The source dimensions were:

- Factory visit / people candidates: `800 x 600`.
- SMT, FAI, AOI, wave soldering, function test, and Box Build candidates: `600 x 450`.
- Generated web files: `1200 x 900` WebP, but these are upscaled optimization outputs rather than true high-resolution originals.

Decision: do not use these images as Hero or large page visuals. Use selected images only as inline evidence/context modules with strict display-size caps.

## Implemented Placement

- Home identity area: `factory-visit-05` as a small credibility/context visual.
- About: `factory-visit-03` and `factory-visit-04` after the buyer workflow section.
- PCB Assembly / PCBA: `smt-pick-and-place` and `wave-soldering` after assembly methods.
- Quality & Testing: `first-article-inspection` and `aoi-inspection` after the 6-step quality flow.
- EMS & Box Build: `box-build-assembly` and `finished-product-function-test` after scope coverage.

No factory or process images were added to Contact, Request a Quote, Privacy, Terms, Sitemap, or Thank You.

## Implementation Notes

- Added a typed UI image manifest with only render-safe fields: image path, dimensions, max display width, alt text, and buyer-facing captions.
- Moved source URLs, ownership status, and allowed-slot audit notes into a separate audit manifest that is not imported by client components.
- Added `EvidenceImageBlock` for page-specific image groups.
- Added CSS caps so Home identity renders at no more than `600px`, evidence images render at no more than `600px` or `720px` depending on the source, and evidence groups collapse to one column on mobile.
- Kept Home Hero unchanged because the package images are not true HD originals.
- Removed internal review wording from visible captions; source and permission status remain in code metadata only.

## Review Focus

- Verify the real images improve trust without making the page look like a low-resolution gallery.
- Verify no internal permission or source-review language appears in public page text.
- Verify the evidence modules do not appear on utility, legal, RFQ, or contact pages.
