# Venture Live Image Selection Pass

Date: 2026-06-21

## Goal

Replace weak or abstract live-site visuals with buyer-relevant Venture image assets while avoiding unconfirmed ownership claims.

## Asset Boundary

The safe image pool for this pass is the identifiable Venture image set in:

- `togeto-next-js/public/`
- `togeto-next-js/public/assets/img/venture-home/`

The larger `assets/img/*` template library is not used for live Venture page replacement because those images are not confirmed as Venture-owned or old-site assets.

## Selection Rules

- Use real production, PCB detail, equipment or catalog visuals over abstract globe/technology artwork.
- Do not imply every resource is Venture-owned. Alt text and captions describe context rather than using phrases such as "our factory".
- Avoid repeating the same close-up image in the same first-viewport service grid.
- Keep catalog imagery only on Official Resources / resource contexts.

## Current Live Mapping

| Slot | Image | Reason |
|---|---|---|
| Home hero PCBA | `/hero-pcba-smt.jpg` | Primary PCB Assembly / PCBA visual |
| Home hero EMS | `/hero-ems-factory.jpg` | EMS production-floor context |
| Core PCBA card | `/hero-pcba-smt.jpg` | SMT / board assembly visual |
| Core EMS card | `/hero-ems-factory.jpg` | EMS / box-build route visual |
| Core sourcing card | `/identity-smt-floor.jpg` | Production-floor support visual for BOM / sourcing work before production, with stronger card density than white-background equipment artwork |
| Core fabrication card | `/identity-pcb-closeup.jpg` | Board-detail visual for fabrication-to-assembly support |
| Services overview | `/identity-smt-floor.jpg` | Production-floor overview instead of abstract globe |
| Sourcing page | `/identity-pcb-closeup.jpg` | Component and board detail for BOM review |
| Fabrication page | `/factory-4.jpg` | Board-level detail for fabrication support |
| Quality page | `/capabilities-machine.jpg` | Neutral production-equipment context for quality and testing planning |
| About page | `/identity-smt-floor.jpg` | Company manufacturing context |
| Resources FAQ | `/faq-smt-line.jpg` | SMT line context for buyer preparation |
| Contact page | `/factory-2.jpg` | General production-floor context |
| RFQ page | `/factory-1.jpg` | Production-line context for quote preparation |
| Official Resources | `/venture-catalog.webp` | Catalog and official-resource context |

## Verification

- Guardrail tests assert the live service grid does not use `hero-circuit-globe`.
- Guardrail tests assert no `our factory` / `our EMS factory` wording appears in live Venture image copy.
- Local file-existence check passed for every live image path.
