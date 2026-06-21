# 2026-06-21 Venture Old-Site Image Application Devlog

## Scope

Apply the reviewed old-site image set to the live Venture GEO site after the 50 downloaded images were moved into this repo.

Source archive:

- `togeto-next-js/_incoming/old-site-curated-source-images/`
- This archive is kept local and ignored by git because it contains the 16 images that should not be published through the PR.

Public reviewed image pool:

- `togeto-next-js/public/assets/img/venture-old-site/`

## Asset Decision

- 50 total old-site images were reviewed from the moved source archive.
- 34 images were approved for public use and copied into the public image pool.
- 16 images were kept out of `public` because they are not recommended for direct publication.

The excluded group includes customer-visit photos, visible people or team-room photos, consumer or IoT customer-product case images, a text-heavy reverse-engineering graphic, a niche package diagram, and close-up face/testing photos. They remain in `_incoming` for audit context but are not served by the website.

## Live Replacement

The current live image slots now use reviewed old-site assets instead of the previous root-level placeholder/generic image pool.

| Slot | Replacement source |
|---|---|
| Home hero PCBA | `smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-1.jpg` |
| Home hero EMS | `box-build/venture-electronics-box-build-ems-box-build-assembly-3.jpg` |
| Home identity background | `factory/venture-electronics-factory-china-pcba-factory-1.jpg` |
| Home final CTA | `smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-2.jpg` |
| Core Services - PCBA | `smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-1.jpg` |
| Core Services - EMS | `box-build/venture-electronics-box-build-ems-box-build-assembly-2.jpg` |
| Core Services - BOM / DFM | `communication-equipment/venture-electronics-communication-equipment-rf-pcb-4.png` |
| Core Services - Fabrication | `pcb-fabrication/venture-electronics-pcb-fabrication-12-layer-pcb-stackup-2.webp` |
| Home Quality evidence | `pcba-testing/venture-electronics-pcba-testing-aoi-pcb-inspection.png` |
| Home FAQ | `pcba-testing/venture-electronics-pcba-testing-manual-visual-inspection-of-pcb.png` |
| Services page visual | `factory/venture-electronics-factory-china-pcba-factory-1.jpg` |
| PCBA page visual | `smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-2.jpg` |
| EMS page visual | `box-build/venture-electronics-box-build-ems-box-build-assembly-3.jpg` |
| Sourcing page visual | `automation-control/venture-electronics-automation-control-controlled-impedance-pcb-3.jpg` |
| Fabrication page visual | `pcb-fabrication/venture-electronics-pcb-fabrication-pcb-layer-stackup.jpg` |
| Quality page visual | `pcba-testing/venture-electronics-pcba-testing-boundary-scan-testing.png` |
| About page visual | `factory/venture-electronics-factory-pcba-manufacturing-floor.jpg` |
| Resources page visual | `pcba-testing/venture-electronics-pcba-testing-pcb-assembly-visual-inspection.png` |
| Contact page visual | `automation-control/venture-electronics-automation-control-ldi-machine.jpg` |
| RFQ page visual | `smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-3.jpg` |

The remaining approved public images are kept as a reviewed pool for future article, resource, or service-module expansion. They were not forced into pages where the image would weaken the page task.

## Guardrails Added

- The Venture shell test now checks that active image slots point to `/assets/img/venture-old-site/`.
- The test rejects old root-level placeholder image names in active Venture components and CSS.
- The test scans the public old-site image pool and confirms only 34 approved files are served.
- The test blocks the rejected categories and filenames from being published.

## Verification

- `git diff --check` passed.
- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs` passed 21/21.
- `npm run build` passed with the Next.js production build.
- `http://127.0.0.1:3009/` returned `200`.
- The sampled public image URL returned `200`.
- Visual QA screenshots were captured from the production build:
  - `togeto-next-js/output/playwright/venture-old-site-images-home-desktop-mcp.png`
  - `togeto-next-js/output/playwright/venture-old-site-images-home-mobile-mcp.png`
  - `togeto-next-js/output/playwright/venture-old-site-images-pcba-desktop-mcp.png`

Visual review found the Home hero, Core Services cards, Home quality module, Home FAQ media, and PCBA page visual slots rendering with the reviewed old-site images. No blank image slots, horizontal mobile overflow, or text overlap were observed in the sampled desktop and 390px mobile views.

## Why The Previous Image Replacement Did Not Succeed

The earlier pass replaced visible slots with the small image pool already in `public/`, not with the 50 old-site images. That happened because the source images were still in a `Tobedeleted` project folder outside the active repo scan path, and the implementation treated the existing public images as the confirmed final asset inventory.

There were also two process gaps:

- We did not build a source-to-live-slot manifest before editing.
- We did not add a public-image deny-list test, so rejected asset categories were not mechanically protected.

## How To Avoid This Next Time

- Start image work by locating every candidate source folder, including archived or to-be-deleted repos.
- Classify assets into `public now`, `conditional`, and `do not publish` before touching page code.
- Create the public asset pool first, then map page slots from that pool.
- Add a deny-list test for rejected categories before visual QA.
- Treat CSS background images as live image slots, not secondary styling details.
- Record a live slot manifest in devlog so future replacements can be audited quickly.
