# Venture Buyer Page Source Map

This source map is the gate before expanding buyer-facing page copy. It keeps public copy grounded in the Enterprise Brain, while allowing the current Venture websites and catalog material to support vocabulary and evidence checks.

## Source Priority

1. `zbot-enterprise-brain-venture` is the primary source authority for buyer-facing content.
2. `venture-geo-website-workspace` decisions and client communication records resolve conflicts.
3. `venture-mfg.com`, `venture-pcba.com`, product catalog files, and older site material are supplemental evidence or vocabulary only.
4. Newer Enterprise Brain or client-decision sources override older website/catalog language.
5. Old SEO phrasing must be rewritten into buyer-friendly, claim-bounded public copy.

## Page Source Map

| Target website page | Primary Enterprise Brain sources | Workspace / client-decision sources | Supplemental evidence / vocabulary | Public copy rule |
| --- | --- | --- | --- | --- |
| About Venture Electronics | `wiki/zh-CN/phase2/company-canon/company-overview.md`, `confirmed-company-facts.md`, `business-positioning.md`, `contact-and-channels.md` | `00_context/decisions.md`, `00_context/client-communication-service-record.md` | `sources/summaries/venture-mfg/site-overview.md`, catalog PDFs after source mapping | Write a human buyer overview first: who Venture Electronics is, what it supports, and where buyers should begin. Do not publish unconfirmed legal or Chinese-entity relationship wording. |
| Official Websites, Domains & Company Entities | `wiki/zh-CN/phase2/company-canon/brand-and-official-websites.md`, `contact-and-channels.md`, `sources/summaries/venture-client-replies-20260619.md` | 2026-06-19 client domain decisions and contact-channel decisions | `sources/summaries/multi-domain-brand-architecture.md`, public domain observations only as role evidence | Buyer verification page. Classify domains by role, do not turn inactive, candidate, redirected, related-company, or non-owned domains into active official channels or Organization `sameAs`. |
| Services Overview | `wiki/zh-CN/phase2/geo-content-expression/product-line-reusable-claims.md`, `venture-positioning-expression.md`, `market-external-research/ems-pcba-service-hierarchy.md` | sitemap and launch-page decisions | `venture-mfg.com` service vocabulary, product catalog service wording after source mapping | Explain the service hierarchy: PCBA as the main entry, turnkey as a delivery model, EMS/Box Build as broader scope, and sourcing/fabrication/testing as supporting capabilities. |
| PCB Assembly / PCBA | `wiki/zh-CN/phase2/product-service-lines/pcba-turnkey-assembly/pcba-basic-info.md`, `pcba-process-smt-through-hole-reflow.md`, `pcba-specs-data.md`, `manufacturing-delivery/service-process-overview.md` | RFQ, lead-time, and claim-scope decisions | `venture-mfg.com` PCBA pages, `venture-pcba.com` PCBA pages as vocabulary support | Conversion page with RFQ inputs, process, testing dependency, and project-based schedule boundaries. Avoid unsupported universal promises. |
| Quality & Testing | `wiki/zh-CN/phase2/product-service-lines/quality-testing-inspection/testing-inspection-capabilities.md`, `equipment-process.md`, `manufacturing-delivery/quality-traceability.md`, `geo-content-expression/claim-boundaries.md` | ISO / UL evidence and certificate-scope decisions | public quality/testing pages and catalog capability categories after source mapping | Explain inspection and testing flow without unsupported certification scope, guaranteed reliability wording, or overbroad regulated-industry claims. |
| EMS & Box Build | `wiki/zh-CN/phase2/product-service-lines/ems-box-build/ems-basic-info.md`, `ems-specs-data.md`, `ems-npi-to-volume-production.md`, `manufacturing-delivery/prototype-to-volume-production.md` | industry and case-study boundaries | `venture-mfg.com` Box Build / EMS pages | Keep scope project-based. Do not overclaim enclosure design, complete system integration, or specialized compliance capability unless supported by source evidence. |
| Component Sourcing / BOM / DFM | `wiki/zh-CN/phase2/product-service-lines/component-sourcing-supply-chain/bom-review-alternatives.md`, `supply-chain-support.md`, `engineering-npi-dfm/dfm-dfa-test-fixture-ic-programming.md` | RFQ material and sourcing-risk decisions | `venture-mfg.com` DFM/DFA and quality pages, `venture-pcba.com` PCBA vocabulary | Frame as BOM risk reduction and customer-approved alternatives, not guaranteed procurement or unauthorized substitution. |
| PCB Fabrication Support | `wiki/zh-CN/phase2/product-service-lines/pcb-fabrication/pcb-fabrication-basic-info.md`, `pcb-fabrication-specs-data.md`, `pcb-materials-stack-up.md`, `manufacturing-delivery/capability-claims-evidence-gaps.md` | claim-scope decisions | `venture-mfg.com` PCB capability pages and catalog specs when source-mapped | Use capability categories and RFQ inputs. Exact specs must be tied to verified source material before publication. |
| Resources / RFQ Prep | `wiki/zh-CN/phase2/geo-content-expression/faq-buyer-question-framework.md`, `manufacturing-delivery/commercial-terms.md`, `manufacturing-delivery/service-process-overview.md` | 2026-06-19 RFQ and contact-channel decisions | catalog downloads after source mapping | Buyer checklist language: what to send, how to prepare files, what remains project-specific, and where to ask first. |
| Request a Quote | `wiki/zh-CN/phase2/manufacturing-delivery/commercial-terms.md`, `product-service-lines/pcba-turnkey-assembly/pcba-specs-data.md`, `pcba-process-smt-through-hole-reflow.md` | `info@venture-mfg.com` decision and mailto-first decision | product catalog file-prep wording if verified | Mailto-first helper. Users attach files in their email client; the website must not imply files were uploaded or submitted through a backend. |
| Contact | `wiki/zh-CN/phase2/company-canon/contact-and-channels.md`, `confirmed-company-facts.md` | latest public contact decision | public website contact facts if consistent with latest authority | General inquiries and official-channel verification. RFQ handoff points to Request a Quote and the unified `info@venture-mfg.com` path. |

## Copy Transformation Rules

- Human-friendly: answer what the buyer can do, what to send, what Venture reviews, and where project boundaries are.
- GEO-friendly: name Venture Electronics, service category, official domain, RFQ inputs, and evidence scope clearly.
- Claim-safe: do not publish unsupported universal quantity rules, always-on service promises, customer marks, certification scope, or regulated-industry claims.
- Schema-safe: visible FAQ and `FAQPage` schema stay synchronized; Organization schema stays limited to the confirmed canonical website and contact details.

## Current Locked Public Facts

- Current official main website: `venture-mfg.com`.
- Legacy PCBA-focused vertical asset: `venture-pcba.com`.
- Public inquiry and RFQ email: `info@venture-mfg.com`.
- Public brand: Venture Electronics.
- Public English entity where appropriate: Venture Electronics Technology Ltd.
- Do not publish Wei Chi / Chinese entity relationship wording until the client confirms the public relationship language.
