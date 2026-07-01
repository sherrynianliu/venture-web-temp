# 2026-06-30 Venture Entity Canon, V-CST Role, Customer References, and RFQ Layout Changelist

Status: implemented in branch `codex/venture-entity-rfq-faq-update` for PR review.

## 中文简短变更总表

| 优先级 | 模块 | 要改什么 | 目的 |
| --- | --- | --- | --- |
| P0 | 公司实体口径 | 将公开英文实体改为 `Venture Electronics Tech Ltd`。 | 修正旧实体名，统一官网与客户最新确认口径。 |
| P0 | 香港中文名 | 只在澄清页受控使用 `威驰科技有限公司`。 | 说明香港公司中文名，同时避免全站过度扩散。 |
| P0 | 错误深圳威驰 | 明确 `深圳市威驰科技有限公司` 与 Venture 无关。 | 防止搜索、AI、买家把错误工商主体关联到 Venture。 |
| P0 | V-CST | 将 `v-cst.com` 解释为深圳出口 / 供应链支持相关资产。 | 说明其角色，但不把它当成主站或询盘入口。 |
| P0 | Official Resources | 重写公司实体、域名、询盘路径澄清内容。 | 让买家和 AI 都能理解主站、实体、历史域名和安全联系路径。 |
| P0 | About | 只放简短实体摘要和澄清页入口。 | 保持 About 给真实买家看，不变成复杂法务表。 |
| P0 | Footer / Contact / RFQ | 继续只显示 `venture-mfg.com` 和 `info@venture-mfg.com`。 | 保持公开询盘路径简单、可信、无混淆。 |
| P0 | Schema | Organization 只用主站和确认实体，不加历史/候选/关联域名。 | 保证 GEO 结构化数据不会把非主站误标成官方身份。 |
| P0 | 测试 | 收窄旧的 Wei Chi 禁止规则，新增错误实体和 schema 边界测试。 | 让测试跟随客户最新确认，而不是继续使用旧假设。 |
| P1 | 客户 reference | 可保守加入 VTech、Nokia、Mindray、Johnson Electric、Honeywell 文本引用。 | 增强可信度，但不做 logo、案例或合同暗示。 |
| P1 | RFQ 页面 | 将 `Request a PCB Assembly, EMS, sourcing or fabrication quote.` 项目类型表格前置。 | 让买家先判断项目类型，再填写长表单。 |
| P1 | Buyer FAQ | 去重首页和内页重复 FAQ，并重新分工。 | 避免真实买家看到重复内容，同时保留 GEO 价值。 |

Source basis:

- Latest client correction preserved in `docs/venture-content/source-materials/2026-06-30-company-entity-and-profile-update/venture-company-entity-customer-reference-update-20260630.md`.
- Current website implementation on `main` still uses older entity wording in About, Official Websites / Domains, footer copyright, and Organization schema.
- User visual note from local RFQ page screenshot: the project-type guidance/table headed around `Request a PCB Assembly, EMS, sourcing or fabrication quote.` should be moved to an earlier, more prominent position.
- User visual note from homepage / Buyer FAQ screenshots: the buyer FAQ content appears duplicated across the homepage buyer-questions block and another Buyer FAQ section, creating repeated questions instead of a clear page-level FAQ hierarchy.

## Change List

| Area | Current issue | Required change | Public wording boundary | Priority |
| --- | --- | --- | --- | --- |
| Company canonical entity | Site still uses `Venture Electronics Technology Ltd` in public copy/schema/footer. | Update approved public English entity to `Venture Electronics Tech Ltd`. | Do not invent additional legal names. | P0 |
| Hong Kong Chinese name | Prior guardrail kept all Wei Chi / Chinese entity wording out of public copy. | Allow the client-confirmed Hong Kong Chinese name `威驰科技有限公司` only in controlled entity clarification context. | Make clear the name does not include `深圳市`. | P0 |
| Incorrect Shenzhen Wei Chi match | Search/registry/AI may confuse `深圳市威驰科技有限公司` with Venture. | Add a clarification on the Official Websites, Domains & Company Entities page that `深圳市威驰科技有限公司` is not Venture-owned and has no relationship with Venture Electronics. | Do not repeat this on About/footer/contact; keep it on the clarification page. | P0 |
| V-CST role | `v-cst.com` is currently described as pending / relationship unclear. | Reclassify `v-cst.com` as `Shenzhen V-CST Tech Co., Ltd. / 深圳市纬创斯通科技有限公司` registry-linked / Shenzhen export and supply-chain support context. | Do not present it as the current buyer-facing Venture Electronics website or main RFQ route. | P0 |
| Official Resources page | Entity facts are still too generic and outdated. | Update “Company entity and inquiry source of truth” with brand, Hong Kong entity, Chinese name boundary, current website, RFQ email, V-CST support-role note, and false-match note. | Keep this page human-readable, not a raw internal fact sheet. | P0 |
| About page | About currently contains a company facts table with old entity name. | Keep About concise: brand, buyer-facing / Hong Kong entity, current website, and a link to the full entity/domain clarification page. | Do not place full domain/entity tables on About. | P0 |
| Footer | Footer copyright still uses old entity name. | Update copyright entity to `Venture Electronics Tech Ltd`. | Footer should not mention V-CST, historical domains, or candidate domains. | P0 |
| Contact / RFQ path | Public buyer path should remain simple. | Keep `info@venture-mfg.com` as RFQ/general inquiry email and `venture-mfg.com` as current main website. | Do not add V-CST or historical domains to contact/RFQ/footer. | P0 |
| Organization schema | Schema legalName is outdated. | Update `Organization.legalName` to `Venture Electronics Tech Ltd`. | Organization/WebSite URL remains only `https://www.venture-mfg.com/`; no `sameAs`; no `v-cst.com`, `venture-pcba.com`, historical, candidate, or non-owned domains. | P0 |
| Domain ItemList schema | Domain-status ItemList can explain non-canonical domains. | Allow `v-cst.com` and other domain roles only inside the Official Resources page-level ItemList / clarification context. | Do not promote any non-canonical domain into Organization/WebSite identity. | P0 |
| Tests | Existing tests still broadly block `Wei Chi` / Chinese entity wording. | Narrow guardrails: forbid `深圳市威驰科技有限公司` as related entity, forbid non-canonical domains in Organization/WebSite schema, but allow `威驰科技有限公司` in approved clarification context. | Tests should reflect new client confirmation, not old uncertainty. | P0 |
| Customer references | Client has approved named customer references for GEO site. | Add conservative proof wording such as `Client-approved customer references include VTech, Nokia, Mindray, Johnson Electric, and Honeywell.` | Text references only unless logo-use approval is separately confirmed; no project details, current-contract implication, volume, testimonial, or case claim. | P1 |
| About / Home proof placement | Site can now use a light credibility signal. | Consider placing the conservative customer-reference sentence in About and/or a homepage proof section. | Avoid logos and detailed customer/project claims. | P1 |
| Devlog / source notes | Older devlogs mention “no Wei Chi / Chinese entity wording” as a blanket rule. | Add a new devlog note explaining the guardrail change: incorrect Shenzhen Wei Chi remains blocked; confirmed Hong Kong Chinese name may be used in controlled context. | Do not rewrite old history; append the updated decision. | P1 |
| RFQ page layout | The RFQ form begins with fields before the buyer sees enough project-type guidance. | Move the section/table headed around `Request a PCB Assembly, EMS, sourcing or fabrication quote.` to a more prominent, earlier position before the long form fields. | The page should help buyers choose PCB Assembly / EMS / sourcing / fabrication scope before filling detailed fields. | P1 |
| RFQ wording | RFQ still needs to stay email-first. | Keep mailto / email-first flow; make the project-type guidance clearer and closer to the top. | No backend upload promise; users still attach Gerber, BOM, CPL, drawings manually in their email client. | P1 |
| Buyer FAQ duplication | The homepage `Answers to common PCBA & EMS planning questions` block overlaps with the visible `Buyer FAQ` cards shown elsewhere, including repeated RFQ-file, BOM alternatives, testing, schedule, and EMS / Box Build questions. | Audit all visible FAQ sources, deduplicate repeated questions, and assign each FAQ set a distinct role: homepage = high-level buyer confidence preview; Resources / RFQ = practical RFQ preparation; service pages = page-specific service questions. | Keep FAQPage schema synced with visible FAQs after dedupe; do not remove important GEO answers, but avoid showing the same question set twice to a human buyer. | P1 |

## Proposed PR Scope

Recommended next PR: `Entity Canon + RFQ Guidance Placement`.

Include:

- About entity wording update.
- Official Websites, Domains & Company Entities update.
- V-CST role clarification.
- Organization schema legalName update.
- Footer copyright update.
- Test updates for the new entity boundary.
- Devlog update.
- RFQ project-type guidance/table moved earlier on the Request a Quote page.
- Buyer FAQ dedupe across homepage, Resources / FAQ, RFQ, and service pages, with visible FAQ and FAQPage schema kept in sync.

Defer unless explicitly approved:

- Customer logos.
- Detailed customer case studies.
- Capacity, factory size, employee count, fixed lead time, No MOQ, Aerospace / Defense, IPC Class 3, IATF, BSCI, broad RoHS / REACH or other unsupported certification claims.
- Any change that makes `v-cst.com` an official buyer-facing Venture Electronics website.

## Implementation Notes

- Updated public English entity wording to `Venture Electronics Tech Ltd` in visible copy, footer copyright, and Organization schema.
- Kept `威驰科技有限公司`, `深圳市纬创斯通科技有限公司`, and `深圳市威驰科技有限公司` limited to the Official Websites, Domains & Company Entities clarification context.
- Kept Organization / WebSite schema canonical to `https://www.venture-mfg.com/` only, with no `sameAs` expansion and no V-CST / historical / candidate / legacy domain promotion.
- Reclassified `v-cst.com` as a Shenzhen export / supply-chain support company site, not the current buyer-facing Venture Electronics website, and left it as plain text rather than an active official link.
- Added conservative text-only customer references: VTech, Nokia, Mindray, Johnson Electric, and Honeywell.
- Moved RFQ project-type guidance into the first Request a Quote page content table before the email composer.
- Removed duplicated homepage FAQ rendering from Resources and renamed the Resources RFQ FAQ question so homepage, Resources, and RFQ FAQ sets do not repeat the same visible question.
