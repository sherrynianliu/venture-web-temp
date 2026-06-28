# Venture Claim Evidence Matrix

Date: 2026-06-27

Purpose: keep public GEO/SEO claims tied to evidence before they are expanded into stronger homepage, service-page, schema, or sales-material wording.

## Claim Level Definitions

| Claim level | Meaning | Public wording rule |
| --- | --- | --- |
| Confirmed Venture-owned capability | Client confirms Venture directly owns or operates this capability and can provide supporting photos, process records, certificates, or equipment details. | May use direct wording such as "Venture supports..." or "Venture performs..." with scoped details. |
| Approved production-line resource | Capability is available through approved production-line resources, partner lines, or project-specific coordination, but ownership or exact site is not final. | Use scoped wording such as "project-specific support", "approved production-line resources", or "can be reviewed by project". |
| Project-specific or outsourced support | Capability may depend on customer files, fixture, standard, sample count, or third-party lab involvement. | State dependencies clearly; avoid universal availability, fixed lead time, or guaranteed coverage. |
| Pending proof | Claim appears in draft content or legacy material but lacks current evidence mapping. | Keep conservative, remove from schema, or hold for client confirmation. |

## Evidence Matrix

| Public claim area | Claim level | Source / evidence needed | Current public wording rule | Notes |
| --- | --- | --- | --- | --- |
| SMT assembly | Approved production-line resource | Production-line photos, machine list, process description, or client confirmation. | Say SMT assembly can be reviewed for PCB Assembly / PCBA projects. Avoid exact capacity unless confirmed. | Existing service copy is acceptable if kept project-scoped. |
| Through-hole / wave / selective / manual soldering | Approved production-line resource | Process photos, equipment list, or sample work instruction. | Say through-hole and mixed assembly requirements are reviewed from current files. | Do not imply every process is in-house until confirmed. |
| SPI / AOI / FAI / X-Ray | Approved production-line resource | Inspection equipment photos, QC flow, report examples, or client confirmation. | Say relevant inspection methods are applied according to project needs and agreed scope. | X-Ray should remain scoped to hidden-joint or project-specific requirements. |
| ICT / FCT | Project-specific or outsourced support | Fixture requirement, firmware/test procedure, sample report, and confirmation of who performs the test. | Say electrical or functional testing depends on fixtures, firmware, acceptance criteria, and quotation scope. | Avoid universal "100% ICT/FCT" wording. |
| First article inspection and traceability | Approved production-line resource | FAI records, barcode/ERP/MES screenshots, traveler examples, or client confirmation. | Say project-level records may include revision, batch, inspection, test, and shipment records. | Unit-level barcode traceability must be confirmed by project. |
| Three-proof coating / conformal coating | Project-specific or outsourced support | Coating process photos, material spec, standard, masking/work instruction, and inspection method. | Say coating requirements can be discussed when material, area, standard, and acceptance criteria are provided. | Do not publish as a blanket standard process without evidence. |
| UV laser marking / labels / serial numbers | Project-specific support | Marking photos, label examples, serialization workflow, customer spec. | Say marking, labels, or serial-number requirements are handled when included in the approved scope. | Keep schema free of serialization claims. |
| Thermal shock / temperature-humidity / reliability testing | Project-specific or outsourced support | Test conditions, chamber photos or lab report, third-party lab boundary, sample count. | Say reliability or environmental testing requires agreed standards, conditions, samples, duration, and report expectations. | State whether Venture performs, coordinates, or prepares samples once confirmed. |
| Box build / final assembly | Approved production-line resource | Assembly photos, work instruction, system BOM examples, test flow. | Say EMS and Box Build may include enclosure, cable/harness, system checks, labels, packaging, and delivery support when included in the quote. | Do not imply finished consumer-product certification unless confirmed. |
| Component sourcing / BOM alternatives | Confirmed process capability | BOM review examples, approved-alternative workflow, purchasing rules. | Say alternatives may be proposed for customer approval before use. | Keep customer approval explicit. |
| Certificates and standards | Pending proof | Certificate copies, entity name, scope, issuing body, validity date, site coverage. | Do not publish certificate schema or broad compliance claims until certificate scope is verified. | Certificates and standards need exact scope binding. |
| Factory photos / facility wording | Pending proof | Client confirmation of photo source, site, ownership, and allowed use. | Prefer "production environment", "process context", or "approved production-line resources" unless ownership is confirmed. | Avoid "our factory" for placeholder or unconfirmed imagery. |
| Legal or operating entity relationship | Pending proof | Client confirmation of the legal/operating relationship and whether it can be public. | Do not publish legal relationship claims until the customer confirms what can be public. | Current sprint does not change unconfirmed entity-relationship content. |

## Schema Guardrails

- Organization schema should stay conservative: Venture Electronics, Venture Electronics Technology Ltd, venture-mfg.com, approved email, phone, address, and logo only.
- Do not add `sameAs` until LinkedIn/YouTube and any other social URLs are final.
- Do not add certificates, ratings, reviews, awards, fixed capacity, fixed lead time, or guaranteed response time to schema without evidence.
- Service and FAQ schema should only mirror visible page content.

## Next Client Confirmation Questions

1. Which capabilities are Venture-owned versus partner-line or project-specific support?
2. Which equipment photos are approved for public use, and what should each caption say?
3. Which certificates are current, what legal entity and site do they cover, and can they be published?
4. Which reliability tests are performed directly, coordinated externally, or only supported through sample preparation?
5. Which legal or operating entity relationships are allowed to appear in public website, schema, RFQ, or sales-document materials?
