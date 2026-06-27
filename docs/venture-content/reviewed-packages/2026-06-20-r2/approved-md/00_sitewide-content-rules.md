---
pageId: sitewide-content-rules
route: sitewide
template: sitewide-rules
contentStatus: reviewed
revision: 2026-06-20-r2
templateHeadSha: b7a10516cced88842b3b9c0bc157b6af318a189c
publishStatus: internal
navVisibility: hidden
sitemapVisibility: false
approvedBy:
approvedAt:
sourceFiles:
- Venture_GEO_Sitemap_Client_Presentation_v2.html
- 2026-06-20-venture-geo-content-population-implementation-plan.md
- canonical-taxonomy.md
- .enterprise-brain/source-registry.json
- .enterprise-brain/evidence-anchors.json
- wiki/zh-CN/phase2/company-canon/confirmed-company-facts.md
- wiki/zh-CN/phase2/geo-content-expression/claim-boundaries.md
- wiki/zh-CN/phase2/geo-content-expression/english-writing-context.md
evidenceAnchors:
- a-confirmation-brand-positioning
- a-confirmation-service-priority
- a-20260619-contact-domain-roles
- a-20260619-certification-boundary
- a-confirmation-capability-boundaries
- a-geo-site-structure-services
- a-internal-claim-boundaries
claimRisk: high
evidenceLevel: internal-source
wordTarget: not-applicable
canonical: not-applicable
---

# Venture Electronics Sitewide Content Rules — r2

## 1. Package and template status

This package is a **reviewed content package**, not a human-frozen release.

- Template reference: `JHSHdhb/venture-web-temp` PR `#1`
- Template head SHA: `b7a10516cced88842b3b9c0bc157b6af318a189c`
- Content revision: `2026-06-20-r2`
- Proposed `siteBaseUrl`: `https://www.venture-mfg.com`
- Base URL status: **human confirmation required before freeze**
- Launch RFQ mode: **mailto-only**
- Primary inquiry address: `info@venture-mfg.com`
- Insights launch status: **hold until real article routes exist**
- Thank-you launch status: **hold / redirect until a real form workflow exists**
- Legal pages: conservative reviewed drafts; client or legal review is still required

Only text inside each page file's **Public content regions**, **FAQ**, and **Final CTA** may be rendered publicly. Region contracts, claim reviews, image notes, and implementation notes are internal instructions.

## 2. Approved page-region model

The shared inner-page shell should support these region types:

| Region type | Purpose |
|---|---|
| Hero | One stable H1, direct answer, concise role line and CTA |
| Intro / direct answer | 40–90 words that answer the page's main buyer question |
| Card grid | Service choices, delivery models or scope categories |
| Steps / flow | Project path, approval process or testing sequence |
| Checklist | Files, requirements or buyer inputs |
| Evidence / capability | Specific process, inspection or record information with boundaries |
| FAQ | Natural buyer questions with independently understandable answers |
| Final CTA | One clear next action after the informational content |
| Related links | Only pages that answer the next distinct buyer question |
| Conditional asset | Downloads, articles, certifications or images shown only after approval |

Do not force every route into the same sequence. Service, quality, brand, resource, contact, legal and utility pages have different tasks.

## 3. Public organization identity allowlist

| Field | Public value | Usage rule |
|---|---|---|
| Brand | Venture Electronics | Consistent public brand name |
| English entity | Venture Electronics Technology Ltd | Use in detailed company or contact facts only |
| Chinese entity | 威驰科技有限公司 | Use only where a bilingual entity reference is useful |
| Positioning | China-based PCB Manufacturing, PCB Assembly and EMS Manufacturing partner | Use `manufacturing partner`, not pure-factory language |
| Current main website | `venture-mfg.com` | Reconfirm if production launches on a different domain |
| Legacy vertical website | `venture-pcba.com` | Describe as a legacy PCBA-focused web asset, not a separate company |
| Email | `info@venture-mfg.com` | Single public inquiry and RFQ route for first launch |
| Telephone | `+86 755 8529 6692` | International display format |
| Fax | `+86 755 2397 7408` | Secondary contact only |
| Address | Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, GuangDong, China | Preserve until postal formatting is approved |

## 4. Service hierarchy and page ownership

| Page | Owns | Must not duplicate |
|---|---|---|
| Home | Identity, four service routes, project path, quality preview, concise FAQ | Detailed specifications, full RFQ checklist or long brand history |
| Services | One service-selection region and how service lines connect | A second duplicate service matrix |
| PCB Assembly / PCBA | Delivery models, assembly scope, board-level workflow and RFQ inputs | Full sourcing, quality or fabrication explanations |
| EMS & Box Build | Integration beyond the PCBA, NPI, system-level scope and packaging | General PCBA definitions repeated in full |
| Sourcing / BOM / DFM | BOM risk, availability, alternatives and manufacturability review | Claims that every part is available or authentic |
| PCB Fabrication Support | Bare-board inputs and fabrication-to-assembly coordination | Unverified numeric capability tables |
| Quality & Testing | Inspection, test-plan inputs, records, traceability and reliability boundaries | Two repeated test-method regions |
| About | Company identity, project fit and working approach | Full domain-history explanation or decorative pseudo-proof |
| Official Resources | Brand, entity, domain and official-channel relationship | A second About page or internal rationale |
| Resources | RFQ checklist, buyer FAQ and approved conditional assets | Generic navigation filler or an old blog archive |
| Contact | Verified contact facts and brief general-inquiry routing | Full RFQ checklist and workflow |
| Request a Quote | Files, project-type additions, email guidance and next steps | A dead form or repeated full project-path component |
| Insights | Real published article inventory | Proposed topics presented as live content |
| Legal / utility | Clear legal or navigation task | Sales modules, hero imagery or related-page promotion |

## 5. GEO writing rules

Public pages should follow these rules without turning every route into a long-form blog article:

1. Put the answer in the H1 and the first 40–90 words.
2. Use headings that match buyer questions or state a direct answer.
3. Name the entity and service precisely: Venture Electronics, PCB Assembly, PCBA, Turnkey PCBA, EMS Manufacturing, Box Build, BOM Review, DFM/DFA and Quality & Testing.
4. Make important sentences understandable without the surrounding paragraph.
5. Explain the buyer input, Venture's review action and the project-dependent boundary.
6. Use lists, comparison cards, process steps and FAQs where they improve extraction and human scanning.
7. Avoid keyword stuffing, slogan-led openings and vague corporate language.
8. Keep promotional language concentrated in the final CTA rather than throughout the body.
9. Use evidence only when it is publicly supportable; do not fabricate numbers to increase evidence density.
10. Blog-specific rules such as author schema, external citations and article-length targets apply to future Insight articles—not to Contact, RFQ, Legal or Sitemap pages.

## 6. Banned or restricted claims

Do not publish these claims without a new evidence review and explicit public-use approval:

- founding year or experience duration
- fixed response-time or turnaround promise
- one universal lead time or MOQ
- best, fastest, guaranteed, zero-defect or universal testing language
- all components in stock or absolute counterfeit detection
- pure factory, all under one roof or all capabilities in-house
- factory area, employee count, line count or capacity figures
- named customers, logos, testimonials, project photos or case details without permission
- unsupported IPC, RoHS, REACH, IATF, BSCI, ISO 13485, medical-grade or automotive certification statements
- Aerospace, defense or military positioning
- unconfirmed social, messaging or video accounts as official channels

## 7. Certification treatment

Venture-owned ISO 9001:2015 and UL Product iQ `E520518` files are recorded in the Enterprise Brain. They remain conditional in this content revision.

- Do not output certification JSON-LD yet.
- Do not display certificate badges until entity name, scope, wording and public-download treatment are approved.
- Keep an internal conditional slot on Quality or Resources.
- Do not treat a partner factory certificate as a Venture-owned certificate.

## 8. RFQ launch behavior

- Primary RFQ action: `mailto:info@venture-mfg.com`
- Recommended subject: `RFQ – [Company] – [Project Name]`
- No website file uploader, dead submit button, CRM acknowledgement or database-submission claim
- Sensitive files, NDA discussion and large attachments start by email; the preferred transfer route is then confirmed
- `/request-a-quote/` owns the detailed checklist and next-step flow
- `/contact/` owns general inquiries and confirmed contact facts
- `/thank-you/` is not part of the mailto workflow

## 9. Conditional modules

| Module | Launch rule |
|---|---|
| Catalog / downloads | Render only after file title, version, URL and public-use approval are confirmed |
| Facility gallery | Render only after image provenance, ownership and captions are approved |
| Insight article cards | Render only for real article detail routes with reviewed copy |
| Social channels | Render only after account ownership and URL confirmation |
| Certificate badges or downloads | Render only after wording and scope approval |
| Application Areas | May render as a lightweight homepage region; do not imply verified customer cases or industry certifications |

## 10. Metadata and schema allowlist

- One unique SEO title, meta description, canonical and stable H1 per indexable page.
- Home may rotate supporting text or imagery but not its H1.
- Insights is `noindex` while held.
- Thank You is `noindex` and excluded from navigation and sitemap.
- Schema is deny-by-default.

Allowed first-release schema fields:

- `Organization` / `WebSite`: type, ID, name, legalName, URL, email, telephone, address and approved logo
- `Service`: type, ID, name, description, URL and approved provider ID
- `BreadcrumbList`: approved labels and canonicals
- `FAQPage`: exact frozen FAQ questions and answers

Do not output `sameAs`, founding date, employee count, capacity, customer names, awards, certifications, ratings or reviews without a new approved revision.

## 11. Internal-link and image rules

- Link only when the destination answers the next distinct buyer question.
- Avoid generic `click here` anchor text.
- Inner pages use one primary image; a second image only when it explains a process or evidence item.
- Do not present stock imagery as a Venture-owned factory, machine or customer project.
- Do not show confidential boards, BOMs, drawings, customer products or logos without authorization.
- Alt text describes what is actually visible and does not insert unsupported claims.

## 12. Freeze gates

Before changing any file to `contentStatus: frozen`, a human reviewer must confirm:

1. Final production domain and canonical base.
2. Template fixes listed in `TEMPLATE_SECTION_REVIEW.md`.
3. Browser visual QA on desktop and mobile.
4. Legal entity spelling and postal address format.
5. Privacy and Terms wording.
6. Image ownership and captions.
7. Catalog/download files and versions.
8. Certificate wording and download treatment.
9. Official social and messaging links.
10. Whether Insights launches with real article routes or remains held.
