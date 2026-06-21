# Venture GEO Content Population Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` or `superpowers:subagent-driven-development` to implement this plan task-by-task. Codex must keep the devlog updated before and after every implementation task.

**Goal:** Populate the Venture GEO website with approved, claim-safe content from frozen Markdown while preserving the existing Venture page shell and avoiding unauthorized copy generation.

**Architecture:** ChatGPT produces auditable Markdown content, a human reviewer freezes it with hashes, then Codex maps the frozen content into typed Next.js content modules. Runtime rendering stays boring: existing route/shell components read typed content, metadata and JSON-LD are generated from approved fields only, and RFQ remains mailto-only for the first launch unless a separate backend PR is approved.

**Tech Stack:** Next.js App Router, TypeScript, static content modules, Node test runner, ESLint, Next metadata, Next sitemap/robots conventions.

## 中文 Summary Page

目标：把 Venture 官网从“已做好的页面模板/骨架”推进到“已审核内容上线版”。内容判断由 ChatGPT + 人工审核完成，Codex 只负责把已冻结的 MD 内容搬进 Next.js 页面模板、补 metadata/schema/sitemap/robots，并保证测试通过。

硬门槛：

- **模板 PR 先确认**：URL、Header/Footer、PCBA 样板页、移动端、图片数量、旧 Togeto/Logistics 文案必须先审过。
- **ChatGPT 必须先完成内容 MD**：Codex 不允许根据 Enterprise Brain 自己写官网正文。
- **人工审核后内容 Freeze**：所有页面 frontmatter 必须是 `contentStatus: frozen`，并有 `_freeze-manifest.json`。
- **Codex 执行时必须记 devlog**：每个工程任务开始/结束都写入 `docs/devlog/YYYY-MM-DD-venture-content-population.md`。
- **Codex 不改写 approved copy**：只允许做字段映射、换行、列表拆分、组件适配；发现内容不适配模板时记录 devlog 并报告，不自行重写。
- **RFQ 首发只用 mailto**：除非另开后端 PR，不上线“看起来能提交但实际不能提交”的表单。
- **Legal 页面不能 placeholder 上线**：Privacy / Terms 也必须走冻结 MD；没有法律终稿时用保守版网站条款，而不是占位文案。
- **Freeze 必须可审计**：MD、manifest、TS runtime content 必须带 source path、revision、SHA-256 hash。
- **Schema 必须白名单**：未在冻结 MD 中批准的 `sameAs`、certification、foundingDate、capacity 等字段一律不输出。

当前 repo 事实：

- Next.js 项目在 `togeto-next-js/`。
- 当前页面骨架集中在 `src/components/venture-site/site-data.ts`。
- 内页使用 `RoutePage` + `VenturePage` 渲染。
- 首页使用 `HomeSixMain` 和多个定制首页 section，不应强行改成通用内页模板。
- 当前公开 sitemap 里已有 `/insights/`，所以内容 MD 清单需要包含 `insights` 页面。

推荐交付方式：

- ChatGPT 先产出 `docs/venture-content/approved-md/`。
- 人工审核并冻结。
- Codex 先用 PCBA 样板页做一次 pilot mapping，验证 MD -> TS -> Preview 链路。
- Codex 开一个工程 PR：`feat: populate Venture GEO pages from approved content`。
- Codex PR 完成后，ChatGPT 再做 Preview QA，输出 P0/P1/P2。
- Codex 只修 P0/P1，不重新发明内容。

## 1. Ownership Gates

### Gate 0: Template PR Approval

Owner: human reviewer + Codex for fixes only.

Content population must not start until this gate passes.

Approval checklist:

- Approved public routes match the sitemap.
- Header/Footer are Venture-specific.
- PCBA sample page visual is acceptable.
- Each inner page supports 1-2 images without layout breakage.
- Mobile layout has no text overflow.
- No visible Togeto, logistics, shop, cart, portfolio, or blog-demo copy on approved routes.
- Demo routes redirect away from public access.
- `npm run lint`, `npm run build`, and existing `node --test` checks pass.
- `/request-a-quote/` launch behavior is approved as either mailto-only or a separately scoped backend integration. Default: mailto-only.
- Privacy and Terms pages are not allowed to show launch-visible placeholder language.

### Gate 1: ChatGPT Content Package

Owner: ChatGPT.

ChatGPT must finish this before Codex content population starts.

Create:

```text
docs/venture-content/approved-md/
├── 00_sitewide-content-rules.md
├── 01_home.md
├── 02_services-overview.md
├── 03_pcb-assembly-pcba.md
├── 04_ems-box-build.md
├── 05_component-sourcing-bom-dfm-review.md
├── 06_pcb-fabrication-support.md
├── 07_request-a-quote.md
├── 08_quality-testing.md
├── 09_about.md
├── 10_official-resources.md
├── 11_resources.md
├── 12_insights.md
├── 13_privacy-policy.md
├── 14_terms.md
├── 15_sitemap.md
├── 16_thank-you.md
└── _freeze-manifest.json
```

Each page MD must include:

```yaml
pageId:
route:
template:
contentStatus: draft | reviewed | approved | frozen
revision:
approvedBy:
approvedAt:
sourceFiles:
evidenceAnchors:
claimRisk: low | medium | high
evidenceLevel: public-source | internal-source | needs-review | do-not-use
wordTarget:
canonical:
```

Each page body must include:

- SEO title, meta description, canonical.
- Hero eyebrow, H1, subtitle, primary CTA, secondary CTA.
- Ordered sections with headings, body, cards/bullets.
- FAQ.
- CTA block.
- Internal links with reason.
- Image guidance with alt text and avoid notes.
- Claim review: public-safe, evidence-needed, do-not-use.

`00_sitewide-content-rules.md` must include:

- `siteBaseUrl` for canonical URLs and JSON-LD IDs.
- Allowed organization identity fields.
- Allowed official contact fields.
- Schema allowlist fields.
- Banned claim phrases.
- RFQ launch behavior. Default: `mailto:info@venture-mfg.com`.
- Legal copy status. Default: conservative reviewed copy required; no placeholder language.

### Gate 2: Human Content Review + Freeze

Owner: human reviewer.

Codex must wait until this is complete.

Freeze requirements:

- Every MD page has `contentStatus: frozen`.
- `_freeze-manifest.json` lists every page file, route, revision, reviewer, freeze date, and SHA-256 source hash.
- High-risk claims are removed or marked `do-not-use`.
- No fixed response time, fixed lead time, No MOQ, capacity, factory size, customer logos, medical certification, ISO 13485, IATF, AS9100, all in-house, or all under one roof unless explicitly approved with public evidence.
- Page duplication is removed: PCBA talks PCBA, EMS talks system-level assembly, Sourcing talks BOM risk, Quality talks testing/records, About talks company identity, Official Resources talks brand/domain relationship.
- Legal pages are frozen as launch-safe content. They may be conservative, but they may not be visible placeholders.
- `siteBaseUrl` is confirmed before Codex generates canonical URLs or schema IDs.
- Schema fields are explicitly allowlisted before Codex outputs JSON-LD.

### Gate 3: PCBA Pilot Mapping

Owner: Codex, after Gate 2.

Before all-page population, Codex must map only `03_pcb-assembly-pcba.md` into TS content and Preview it.

Pilot success criteria:

- Frozen MD hash is copied into TS provenance.
- PCBA page renders hero, sections, FAQ, CTA, internal links, metadata, and JSON-LD.
- Copy is not paraphrased.
- Existing PCBA visual sample still fits desktop and mobile.
- Tests prove the MD manifest and TS provenance match.
- Devlog records the exact source MD, hash, files changed, and test commands.

Only after the pilot passes may Codex continue with the remaining pages.

## 2. Codex Engineering Implementation

Branch:

```bash
git checkout -b feat/venture-content-population
```

Devlog rule:

- Create `docs/devlog/YYYY-MM-DD-venture-content-population.md` before editing code.
- Append after every task with: inputs read, files changed, copy policy followed, commands run, test result, open issues.
- Final devlog must state that Codex did not independently rewrite approved copy.

Content model changes:

- Create `togeto-next-js/src/content/pages/types.ts`.
- Create one TS content file per MD page under `togeto-next-js/src/content/pages/`.
- Create `togeto-next-js/src/content/pages/index.ts` exporting all page content.
- Each TS page object must include `provenance: { sourceFile, revision, sourceSha256, approvedBy, approvedAt }`.
- Keep `routes`, `navItems`, `footerGroups`, and service hierarchy in `src/components/venture-site/site-data.ts`.
- Move page body copy out of `site-data.ts` into `src/content/pages/*.ts`.
- Update `VenturePage` to render approved fields: hero, sections, FAQ, CTA, related links, and image guidance where supported.
- Keep homepage on `HomeSixMain`; create a dedicated `HomePageContent` type and replace only approved homepage copy slots in the existing home components.
- Do not run a broad text search-and-replace across homepage components. Map explicit fields from `home.ts` into named components.
- Replace the RFQ visual placeholder with mailto-first launch behavior unless a separate backend integration PR is approved.

Metadata and schema:

- Update `createPageMetadata` to use approved SEO title/meta/canonical from content files.
- Add JSON-LD support for:
  - `BreadcrumbList` on all approved pages.
  - `FAQPage` when FAQ exists.
  - `Service` on service pages.
  - `Organization` / `WebSite` on home or official resources where content supports it.
- Generate JSON-LD only from approved content fields and the schema allowlist in `00_sitewide-content-rules.md`.
- Do not output `sameAs`, founding date, certifications, capacity, client logos, or official social channels unless they are explicitly frozen as public-safe.
- Add `togeto-next-js/src/app/sitemap.ts` for XML sitemap.
- Add `togeto-next-js/src/app/robots.ts`.
- Keep `/sitemap/` as the human-readable HTML sitemap page.
- Keep `/thank-you/` as `noindex`.

Copy handling rules:

- Do not query Enterprise Brain to invent missing page copy.
- Do not add new claims outside frozen MD.
- Do not paraphrase approved copy except minimal formatting needed for UI fields.
- If a paragraph is too long for the template, split into multiple allowed blocks without changing meaning.
- If content cannot fit without rewriting, stop that page, log it in devlog, and report it for ChatGPT/human revision.

### Data Flow

```text
Frozen MD + _freeze-manifest.json
  -> Codex pilot maps PCBA only
    -> TS content with provenance hashes
      -> existing HomeSixMain or VenturePage renderer
        -> metadata + JSON-LD + sitemap.xml + robots.txt
          -> automated tests + preview QA
            -> ChatGPT P0/P1/P2 review
```

## 3. Validation Plan

Automated checks:

```bash
cd togeto-next-js
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs
npm run lint
npm run build
```

Add or update tests to verify:

- Every approved route has frozen content.
- Every approved route has metadata.
- `/insights/` is covered by content.
- No approved page contains `placeholder`, `Togeto`, `logistics`, `shop`, `cart`, or disabled demo route copy.
- Banned claim phrases are absent from TS content.
- Every TS page `provenance.sourceSha256` matches `_freeze-manifest.json`.
- Every TS page `provenance.sourceFile` points to a frozen MD file.
- `siteBaseUrl` is present before canonical URLs, sitemap URLs, robots host, or JSON-LD IDs are generated.
- RFQ launch mode is mailto-only unless a backend integration flag/file is explicitly present.
- Legal pages do not contain launch-visible placeholder language.
- JSON-LD contains only allowlisted fields.
- Sitemap/robots files include approved public routes and exclude disabled demo routes.
- `/thank-you/` is noindex.
- FAQ schema only appears when FAQ content exists.

Manual QA:

- Start dev server with `npm run dev`.
- Review desktop and mobile for Home, PCBA, Services, Request a Quote, Quality, About, Resources, Official Resources.
- Confirm each inner page uses 1-2 images max unless the template explicitly requires otherwise.
- Confirm CTA paths lead to `/request-a-quote/` or approved `mailto:`.
- Confirm `/request-a-quote/` does not show a dead submit button.
- Confirm no content overflow or overlapping text.

## 4. Preview QA And Fix Loop

Owner: ChatGPT after Codex PR preview is available.

ChatGPT reviews:

- Page content and claim risk.
- GEO/SEO titles and meta.
- Internal links.
- Schema output.
- Mobile readability.
- CTA/form path.
- Image count and alt text.
- Old template copy leakage.

ChatGPT output format:

- P0: must fix before launch.
- P1: should fix before launch.
- P2: can optimize after launch.

Codex fix rule:

- Codex may fix P0/P1 engineering issues directly.
- If P0/P1 requires copy rewrite or claim judgment, Codex must wait for revised frozen MD from ChatGPT/human.
- Every fix gets a devlog entry before final verification.

## 5. NOT In Scope

- RFQ backend, uploads, CRM, email automation, or database submission. First launch uses mailto unless a separate backend PR is approved.
- Rewriting Venture brand claims after content freeze. Any copy or claim changes must go back to ChatGPT/human review and a new frozen MD revision.
- New service routes beyond the approved sitemap.
- Old blog archive migration.
- Customer logos, case studies, certifications, capacity claims, or official social links unless explicitly approved in frozen content.
- Legal advice. Codex can place reviewed conservative legal copy but cannot author legal terms independently.

## 6. What Already Exists

- `togeto-next-js/src/components/venture-site/site-data.ts` already defines routes, sitemap links, nav items, footer groups, service hierarchy, and current placeholder page data.
- `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx` already renders shared inner-page sections, related links, and CTA blocks.
- `togeto-next-js/src/views/home-6/home-6.tsx` already owns the homepage shell and should remain the homepage entry.
- `togeto-next-js/src/components/venture-site/home/*` already contains custom homepage sections; only explicit approved copy slots should be wired to `HomePageContent`.
- `togeto-next-js/tests/venture-site-shell.test.mjs` already verifies route coverage and disabled demo routes; extend it instead of creating a parallel route contract test.

## Assumptions And Defaults

- Default implementation is one Codex PR after all content is frozen.
- `docs/venture-content/approved-md/` is the only source of approved copy for Codex.
- `src/content/pages/*.ts` is the runtime content source for Next.js.
- Homepage remains custom; inner pages use shared `VenturePage`.
- No CRM, file upload, email automation, Supabase, or form backend is included in this content population PR.
- RFQ launch mode is mailto-only by default.
- Legal pages must be launch-safe reviewed copy, not visible placeholders.
- Canonical and schema URLs require a confirmed `siteBaseUrl`.
- Schema output is deny-by-default and allowlist-only.
