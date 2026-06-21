---
pageId: sitemap
route: /sitemap/
template: resource
contentStatus: reviewed
revision: 2026-06-20-r2
templateHeadSha: b7a10516cced88842b3b9c0bc157b6af318a189c
publishStatus: launch
navVisibility: visible
sitemapVisibility: true
approvedBy:
approvedAt:
sourceFiles:
- Venture_GEO_Sitemap_Client_Presentation_v2.html
- 2026-06-20-venture-geo-content-population-implementation-plan.md
- JHSHdhb/venture-web-temp pull/1
evidenceAnchors:
- a-geo-site-structure-services
claimRisk: low
evidenceLevel: public-source
wordTarget: 200-350
canonical: https://www.venture-mfg.com/sitemap/
---

# HTML Sitemap

## Page region contract — internal

**Launch order:** Plain Header → Grouped Public Link Directory. No hero image, FAQ, sales CTA, enhancement component or Related Pages.

Insights and Thank You remain excluded while held.

## SEO and page metadata

- **SEO title:** HTML Sitemap | Venture Electronics
- **Meta description:** Browse the public Venture Electronics company, service, quality, resource, contact and legal pages.
- **Canonical:** `https://www.venture-mfg.com/sitemap/`
- **Indexing:** index, follow
- **Recommended schema:** WebPage, BreadcrumbList

## Plain Header

- **H1:** HTML Sitemap
- **Summary:** Use this directory to find the current public Venture Electronics website pages.

## Public Link Directory

### Main

- Home → `/`
- Services → `/services/`
- Quality & Testing → `/quality-testing/`
- About Venture Electronics → `/about/`
- Official Resources → `/official-resources/`
- Resources → `/resources/`
- Contact → `/contact/`
- Request a Quote → `/request-a-quote/`

### Services

- PCB Assembly / PCBA → `/services/pcb-assembly-pcba/`
- EMS & Box Build → `/services/ems-box-build/`
- Component Sourcing, BOM & DFM Review → `/services/component-sourcing-bom-dfm-review/`
- PCB Fabrication Support → `/services/pcb-fabrication-support/`

### Legal

- Privacy Policy → `/privacy-policy/`
- Terms of Use → `/terms/`
- HTML Sitemap → `/sitemap/`

## Implementation notes — internal

- The XML sitemap is generated separately from approved indexable routes.
- Exclude disabled template demos, Insights while held and Thank You.
- Use real anchor elements rather than rendering `Label - /path/` as plain text.

## Claim review — internal

### Public-safe

Approved public route labels and paths.

### Do not use

Disabled demo routes, held routes or unapproved long-tail pages.
