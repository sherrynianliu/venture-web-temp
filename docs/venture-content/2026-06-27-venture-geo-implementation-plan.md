# Venture GEO Implementation Plan - Post PR #1 Merge

Date: 2026-06-27

## Current Baseline

PR #1 `fix: clean Venture public page structure` has been merged into `main`.

- PR: `https://github.com/sherrynianliu/venture-web-temp/pull/1`
- Merge commit: `ce33416f40a9b2721fbc040bed2be631d2448323`
- Local `main` has been fast-forwarded to the merged commit.

This changes the implementation baseline. The site is no longer a raw template-cleanup project. Most of the launch-shell P0 work is already in `main`; the next work should focus on the remaining deltas and then move into GEO structured data.

## User Decisions Already Made

1. **Venture / Wei Chi relationship:** leave it pending for now. This needs client confirmation, and the current implementation sprint must not change Wei Chi public copy until the customer answers. Do not add Wei Chi to new schema, footer, privacy policy, RFQ/quote materials, or contract-facing content.
2. **Route policy:** if a page exists and is real, it can be exposed. If a page does not exist or is not ready, remove it from nav, footer, sitemap, CTAs, and related links.
3. **Email policy:** both `info@venture-mfg.com` and `support@venture-mfg.com` can appear publicly. The UI should make the preferred RFQ/contact path clear.
4. **RFQ first launch:** mailto-first. Do not ship fake form submission or unfinished upload backend.
5. **Capability claims:** capability, factory, equipment, testing, and certificate claims can be shown, but the next phase should still track evidence in a matrix for GEO trust and client review.

## What PR #1 Already Solved

### Launch Shell

- `/` now renders the Venture Electronics homepage.
- Root metadata is Venture-specific.
- Public App Router pages exist for the first-launch route set:
  - `/`
  - `/services/`
  - `/services/pcb-assembly-pcba/`
  - `/services/ems-box-build/`
  - `/services/component-sourcing-bom-dfm-review/`
  - `/services/pcb-fabrication-support/`
  - `/quality-testing/`
  - `/about/`
  - `/official-resources/`
  - `/resources/`
  - `/contact/`
  - `/request-a-quote/`
  - `/privacy-policy/`
  - `/terms/`
  - `/sitemap/`
  - `/thank-you/`
- Old template route files for blog, shop, cart, portfolio, team, price, wishlist, and demo home pages were removed from the App Router tree.
- `next.config.mjs` redirects disabled demo routes back to `/`.

### Navigation, Footer, and CTAs

- Header and footer now use Venture-specific route data.
- Public footer links are based on Venture route groups, not old template routes.
- Homepage hero shows `Request a Quote` as a primary CTA.
- Final homepage CTA points to RFQ and RFQ checklist, not newsletter signup.
- Unconfirmed social UI is hidden by returning `null` from the social component.

### Contact and RFQ

- Contact and Request a Quote are separate pages.
- RFQ first launch is mailto-only.
- There is no visible inactive RFQ form in the Venture route page renderer.
- RFQ page asks buyers to send Gerber / ODB++, BOM, CPL, drawings, quantity, testing needs, schedule, NDA or large-file requirements by email.

### SEO/GEO Foundation

- `robots.ts` exists.
- `sitemap.ts` exists.
- `/thank-you/` is excluded from XML sitemap and marked noindex through page data.
- Sitewide conservative `Organization` and `WebSite` JSON-LD exist.
- `sameAs` is not emitted.
- `venture-mfg.com` is used as the canonical main domain.
- `venture-pcba.com` is handled as a legacy PCBA-focused vertical asset in public copy, not as the current main site or a separate company.

## Remaining P0 Delta Before Next Deploy

These are the only launch-integrity items that should remain before moving to P1.

### P0.1 Wei Chi Public Relationship - Paused Until Customer Confirmation

Current issue:

- PR #1 still publishes Wei Chi in `site-data.ts` under About and Official Resources.
- The latest instruction is to **not touch Wei Chi yet** because the customer relationship wording still needs confirmation.

Current sprint rule:

- Do not remove or rewrite the existing Wei Chi mentions in page content during this sprint.
- Do not add new Wei Chi references to schema, footer, privacy policy, RFQ materials, or new GEO proof assets.
- Keep Organization, Service, FAQ and Breadcrumb schema free of Wei Chi until the client confirms the relationship and publishing permission.

Blocked follow-up after client confirmation:

- Confirm whether Wei Chi Technology Co., Ltd. is an affiliated company, manufacturing entity, export entity, historic name, brand operator, or another relationship.
- Confirm whether that relationship can be written publicly on the website, footer, privacy policy, Organization schema, RFQ/quote materials, or contract-facing documents.
- After confirmation, either remove the mentions or rewrite them with approved legal/operating language and add tests for the chosen rule.

### P0.2 Add Support Email Without Removing Info Email

Current issue:

- PR #1 uses `info@venture-mfg.com` as the public inquiry/RFQ path.
- Tests currently treat `support@venture-mfg.com` as forbidden.
- The latest decision says both emails can appear.

Required changes:

- Add `support@venture-mfg.com` to Contact and Request a Quote content.
- Keep `info@venture-mfg.com` visible.
- Make the preferred flow clear, for example:
  - RFQ files: `support@venture-mfg.com`
  - General/company inquiry: `info@venture-mfg.com`
  - Or state that both are monitored, if client prefers.
- Update `venture-site-shell.test.mjs` so `support@venture-mfg.com` is allowed.
- Update Organization schema email only if we want a single primary email there. If uncertain, keep schema conservative with one email and show both on pages.

Acceptance criteria:

- Contact page visibly includes both emails or clearly includes the approved primary and alternate route.
- RFQ mailto points to the chosen RFQ email.
- Tests no longer forbid `support@venture-mfg.com`.

### P0.3 Confirm Public Route Exposure Still Matches Existing Pages

Current issue:

- PR #1 route allowlist is mostly correct.
- The policy is now simpler: expose pages that exist; remove links to pages that do not exist.

Required checks:

- Verify every nav/footer/sitemap/CTA/related link resolves to an existing first-launch page or approved external asset.
- Keep Engineering, Industries, deep Testing, Blog, Shop, Portfolio and demo pages hidden unless real pages are created.

Acceptance criteria:

- No public nav/footer/sitemap/CTA link returns 404.
- Disabled template routes are not in sitemap.

### P0.4 Keep RFQ Mailto-First

Current state:

- PR #1 already uses mailto-first RFQ.

Required follow-up:

- Do not add fake forms.
- Do not add upload UI unless a real backend or file-transfer process is implemented.
- If a form-like layout is introduced later, it must either submit for real or clearly be replaced with mailto actions.

Acceptance criteria:

- RFQ page has a clear mailto action.
- No `alert(JSON.stringify(data))` is used on public Venture pages.

## P1 - GEO Structured Data Implementation

P1 should start after the P0 delta above is complete.

### P1.1 Reusable JSON-LD Generator

Add a small structured-data layer instead of hardcoding every page manually.

Suggested files:

- `togeto-next-js/src/components/venture-site/schema/StructuredData.tsx`
- `togeto-next-js/src/components/venture-site/schema/structured-data.ts`

Requirements:

- Generate schema only from approved public fields.
- Keep schema allowlisted and conservative.
- Do not emit Wei Chi.
- Do not emit `sameAs` until final social URLs are confirmed.

### P1.2 Sitewide Schema

Keep and refine:

- `Organization`
- `WebSite`

Add:

- `BreadcrumbList` for inner pages.

Organization fields allowed now:

- `name: Venture Electronics`
- `legalName: Venture Electronics Technology Ltd`
- `url: https://www.venture-mfg.com/`
- approved email value or values, depending final schema choice
- approved phone
- approved address
- logo, if final asset is approved

Do not add:

- Wei Chi
- `sameAs`
- unconfirmed social profiles
- certifications
- capacity
- awards
- customer logos

### P1.3 Service Schema

Add `Service` schema for:

- PCB Assembly / PCBA
- EMS & Box Build
- Component Sourcing, BOM & DFM Review
- PCB Fabrication Support
- Quality & Testing, if kept as a capability/service page

Recommended fields:

- `@type: Service`
- `@id`
- `name`
- `serviceType`
- `description`
- `provider: https://www.venture-mfg.com/#organization`
- `areaServed`
- `url`
- `isRelatedTo` for adjacent services

Avoid:

- price/offers
- ratings/reviews
- guarantees
- fixed lead time
- fixed response time
- certifications unless evidence-scoped

### P1.4 FAQPage Schema

Add visible FAQ blocks and matching `FAQPage` JSON-LD on:

- `/resources/`
- `/request-a-quote/`
- `/services/pcb-assembly-pcba/`
- `/services/ems-box-build/`
- homepage FAQ preview, if visible questions remain

Rules:

- FAQ schema must match visible page content.
- Do not create hidden-only schema.
- Keep answers factual and buyer-useful.

Suggested FAQ topics:

- What files are needed for a PCB Assembly quote?
- What is the difference between PCB Assembly, PCBA, and Turnkey PCBA?
- When does a project become EMS or Box Build?
- Is file upload required for an RFQ?
- How should buyers send large Gerber/BOM/CPL packages?

### P1.5 Metadata and Sitemap Verification

PR #1 already added metadata routes. P1 should harden them.

Verify:

- Every approved page has unique title and description.
- Canonicals resolve under `https://www.venture-mfg.com`.
- `/sitemap.xml` contains only approved routes.
- `/robots.txt` allows public pages and disallows `/thank-you/`.
- `/thank-you/` remains `noindex`.
- Disabled demo routes remain excluded.

## P2 - Proof and Capability Evidence Layer

The latest decision allows capability, factory, equipment, testing, and certificate claims to be public. P2 should focus on making those claims easier for customers and AI systems to trust.

### P2.1 Evidence Matrix

Create:

- `docs/venture-content/claim-evidence-matrix.md`

Suggested columns:

- Claim
- Page / section
- Public wording
- Evidence asset or source
- Evidence type
- Own capability / partner production line / project-specific support
- Client confirmation status
- Schema allowed: yes/no
- Publish status

Claim categories to map:

- SMT production
- high-speed SMT
- nitrogen / vacuum reflow
- SPI
- AOI
- FAI
- X-Ray
- ICT
- FCT
- cleaning
- conformal coating
- UV laser marking
- thermal shock
- temperature/humidity testing
- ERP / MES / barcode traceability
- certificates and standards

### P2.2 Capability Pages

Only after evidence matrix is started, add optional second-phase pages such as:

- `/capabilities/pcb-assembly-capabilities/`
- `/capabilities/quality-testing-capabilities/`
- `/capabilities/rfq-file-requirements/`

Do not expose these routes until the pages exist.

### P2.3 Certificates and Standards

Certificates can be public, but should include scope clarity:

- certificate name
- legal entity name
- validity or issue period if available
- service/process/site scope
- whether it applies to all services or only specific workflows

Do not imply all services, locations or entities are covered unless confirmed.

### P2.4 Case Studies and Downloads

Add later only with approved content:

- anonymized case studies
- RFQ checklist PDF or spreadsheet
- capability one-pagers

Do not invent customer names, industries, quantities, logos, timelines or results.

## Suggested Next Engineering Sprint

### Branch

Create a new branch from updated `main`:

```bash
git checkout main
git pull --ff-only
git checkout -b codex/venture-post-pr1-geo-delta
```

### Scope

Implement only:

1. Add/allow `support@venture-mfg.com` while keeping `info@venture-mfg.com`.
2. Update tests to match the latest decisions.
3. Add reusable schema generator.
4. Add Breadcrumb, Service, and FAQPage schema.
5. Create `claim-evidence-matrix.md` scaffold.
6. Update this plan so Wei Chi is clearly marked as a customer-confirmation blocker, not an active implementation item.

Do not:

- Change existing Wei Chi public copy until the customer confirms the relationship and publishing permission.
- Reopen hidden template routes.
- Add unfinished upload backend.
- Add fake form submission.
- Add unconfirmed social `sameAs`.
- Add new deep capability routes before pages exist.

## Verification Checklist

Run:

```bash
cd togeto-next-js
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs
npm run build
```

Content checks:

```bash
rg -n "Wei Chi|WeiChi|Togeto|international shipping|service-details|portfolio|/shop|/cart|/blog" togeto-next-js/src/app togeto-next-js/src/components/venture-site
```

Expected:

- Existing Wei Chi page-content mentions may remain until the client confirms; no new Wei Chi schema/footer/RFQ/privacy additions should be introduced.
- No Togeto or logistics template copy in public Venture route components.
- No public Venture nav/footer/sitemap/CTA link points to disabled template routes.

Schema checks:

- Organization/WebSite JSON-LD still exists.
- BreadcrumbList exists on inner pages.
- Service schema exists on service pages.
- FAQPage schema exists only where visible FAQ content exists.
- `sameAs` remains absent until final social URLs are confirmed.
- Wei Chi remains absent from schema.

Route smoke checks:

- `/`
- `/services/`
- `/services/pcb-assembly-pcba/`
- `/services/ems-box-build/`
- `/services/component-sourcing-bom-dfm-review/`
- `/services/pcb-fabrication-support/`
- `/quality-testing/`
- `/about/`
- `/official-resources/`
- `/resources/`
- `/contact/`
- `/request-a-quote/`
- `/privacy-policy/`
- `/terms/`
- `/sitemap/`
- `/sitemap.xml`
- `/robots.txt`

## 中文一页 Summary

### 现在的状态

PR #1 已经合并到 `main`。这个 PR 已经解决了大部分上线基础问题：`/` 是 Venture 首页，首发页面基本齐了，模板 App Router 页面被删除或重定向，Header/Footer/CTA 基本切到 Venture 路径，RFQ 是 mailto-first，robots/sitemap 和保守 Organization/WebSite JSON-LD 已经存在。

所以接下来不是重新做 P0，而是做 **PR #1 后的剩余差异**。

### 还需要先补的 P0 delta

1. **Wei Chi 先不动。** 现在 About 和 Official Resources 里还写了 Wei Chi，但这一项等你跟客户确认后再处理；本轮只要求不要把 Wei Chi 加进新的 schema、footer、RFQ、隐私政策或 proof 资产。
2. **把 `support@venture-mfg.com` 加回来。** 现在页面主要用 `info@venture-mfg.com`，测试还把 support 当成 forbidden。按最新决策，两个邮箱都可以放，所以要更新内容和测试。
3. **继续保持有页面才放。** PR #1 已经做得差不多，下一步只要确保 nav/footer/sitemap/CTA 没有指向不存在的页面。
4. **RFQ 继续 mailto-first。** 不做假表单，不做未接好的上传后端。

### 然后做 P1 GEO

- 加 Breadcrumb schema。
- 给核心服务页加 Service schema。
- 给可见 FAQ 区块加 FAQPage schema。
- 保持 Organization/WebSite schema 保守，不加 Wei Chi，不加未确认 `sameAs`。
- 检查 canonical、OpenGraph、robots、sitemap、`/thank-you/` noindex。

### 最后做 P2 证据层

- 建 claim evidence matrix。
- 能力、工厂、设备、测试、证书 claim 可以放，但要逐条记录证据来源和适用范围。
- 之后再做 capability pages、证书页、匿名案例和 RFQ checklist 下载。

### 推荐下一步

从 `main` 新开一个小分支，只做六件事：加 support 邮箱、更新测试、加结构化数据生成器、补 Service/FAQ/Breadcrumb schema、建 evidence matrix、把 Wei Chi 标成客户确认后再处理。这个比继续在旧 PR 上修更干净，因为 PR #1 已经合并。
