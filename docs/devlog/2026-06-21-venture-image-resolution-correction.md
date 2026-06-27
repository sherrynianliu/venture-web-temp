# 2026-06-21 Venture Image Resolution Correction

## Issue

Several old-site images looked blurred after the previous image application pass.

The root cause was slot mismatch:

- Home hero backgrounds need roughly 1920px-wide source images.
- PCBA and PCB Fabrication page visual slots are displayed large enough that 500-650px source images become visibly soft.
- Some old-site files are useful as source references or small module images, but not as full hero or large page visuals.

Examples:

- The old-site SMT assembly images used in the Home hero and PCBA page were only `570x337`.
- The old-site PCB stack-up table used on the Fabrication page was `656x518` and text-heavy, so it looked fuzzy and visually weak when enlarged.

## Correction

Large display slots were restored to the previous higher-resolution public images:

- Home hero PCBA: `/hero-pcba-smt.jpg` (`1920x1247`)
- Home hero EMS: `/hero-ems-factory.jpg` (`1920x1080`)
- Home identity image: `/identity-smt-floor.jpg` (`1400x781`)
- Home final CTA: `/hero-pcba-smt.jpg`
- PCBA page visual: `/hero-pcba-smt.jpg`
- EMS page visual: `/hero-ems-factory.jpg`
- Fabrication page visual: `/factory-4.jpg`
- Quality and FAQ large media: `/capabilities-machine.jpg` and `/faq-smt-line.jpg`

The 34 reviewed old-site images remain in `public/assets/img/venture-old-site/` as an approved asset pool, but they are no longer forced into large slots where their native resolution is too low.

## Prevention

Future image replacement should classify assets by display slot before editing:

- Hero or wide background: prefer source width >= 1600px.
- Large page visual: prefer source width >= 900px, or use original high-resolution pool.
- Service card / small inline media: 500-800px source images can be acceptable if not cropped aggressively.
- Text-heavy diagrams should not be used as decorative visual slots unless the user needs to read the diagram.
