# Venture Template Cleanup, UI Trust, and Human-Friendly GEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current Venture site from a mostly-clean public template adaptation into a maintainable, customer-review-ready website with cleaner runtime behavior, fewer Togeto artifacts, stronger mobile UX, and visible copy that helps real buyers while still supporting GEO/schema extraction.

**Architecture:** Keep the current first-launch Venture App Router surface intact. Add guardrail tests first, then remove or isolate unused template artifacts, improve the shared Venture shell/header/page renderer, and keep GEO facts in structured data or buyer-friendly visible modules rather than internal/AI-facing prose.

**Tech Stack:** Next.js 16 App Router, React 18, Node 22/24 local runtimes, Webpack dev/build mode, local `node --test` test suite, shared Venture page data in `src/components/venture-site/site-data.ts`, shared page renderer in `src/components/venture-site/pages/VenturePage.tsx`.

---

## 一页结论

1. **为什么一直卡：不是 Official Resources 页面本身卡，也不能直接归因于 remaining Togeto template artifacts。**
   - 真实 Next dev server 第一次请求 `/official-resources` 时记录为 `GET /official-resources 200 in 46s (next.js: 46s, application-code: 206ms)`。
   - 后续同一路由热启动后约 `55ms-233ms` 返回。
   - 结论：主要是本地 Next 16 App Router 冷启动/首次编译慢，页面业务代码本身不是 46 秒瓶颈。
   - 但模板残留仍会拖慢长期维护、lint/type/build 扫描、AI/Codex 搜索准确性，并增加误用旧代码风险。

2. **模板残留要清，但要分阶段。**
   - 当前公开页面已经 Venture 化，旧 demo routes 也被 redirect。
   - 主要问题在 repo / unused code：`togeto-documentation/`、`togeto-rtl-next-js/`、旧 `src/data/*`、旧 shop/portfolio/price/contact/redux/template views、`theme-main.css` 和 package 命名。
   - P0 先加测试护栏和删除高风险 copy-bearing 文件；P1 再做大规模未使用组件/数据清理；P2 再抽离全局模板 CSS。

3. **视觉上当前最需要修的是人类验收体验，不是单纯 GEO 结构。**
   - Official Resources 页首屏 hero 过高，Quick Answer 虽然在首屏边缘露出，但不够“一眼得到答案”。
   - Hero 图片是 catalog brochure，和“official domains/company entities”主题关联弱。
   - 移动端 `main-nav` 在 `820px` 以下直接 `display: none`，目前没有替代菜单，这是 P0 UX 问题。
   - Next dev 日志提示 `/venture-catalog.webp` 是 LCP 图，若继续放在首屏，需要明确 `priority` 或更轻的视觉方案。

4. **文案上要把“给 AI 的事实结构”变成“采购/工程/合规人员能读懂的验证指南”。**
   - `FAQPage`、`WebPage`、`BreadcrumbList` schema 继续保留；`ItemList` 只有实现后才能写入验收范围。
   - 可见文案里不要写 “This page also helps search engines and AI systems...”，这类句子应改成买家友好说法。
   - 推荐把 visible copy 写成 buyer questions、safe inquiry path、verification steps；把 AI/GEO 结构放在 JSON-LD 和清晰 HTML 结构里。

5. **Official Websites, Domains & Company Entities 要放进 About，而不是作为孤立一级导航。**
   - 目标导航结构：Home、Services、Quality & Testing、About、Resources、Contact、Request a Quote。
   - About 下拉包含 `About Venture Electronics` 和 `Official Websites, Domains & Company Entities`。
   - 桌面端 `Request a Quote` 可以继续用按钮形态作为最后一级行动入口；移动端菜单里也必须能访问。

6. **RFQ 第一版采用 mailto 表单，不做后端提交。**
   - 用户在网页填写 RFQ 表单后点击 `Prepare RFQ Email`。
   - 页面自动打开邮件客户端，收件人、标题、正文预填。
   - 用户自己检查附件并点击 Send。
   - 该方案适合 Venture 当前第一版静态站，但页面必须提示用户在邮件客户端中手动附上 Gerber、BOM、CPL、drawings 等文件。
   - RFQ 收件人不能在组件里散落硬编码，必须先由 Task 0 锁定事实源，再全站统一。

7. **核心页面不能只保留 GEO 骨架，要补成真实买家能读的制造商页面。**
   - 旧站内容不能照抄，但旧站的内容类型有价值：公司故事、服务范围、项目流程、能力表、质量说明、FAQ、RFQ 文件要求。
   - 第一轮内容加厚页面：Home、About、Quality & Testing、PCB Assembly / PCBA、Services Overview、Official Websites, Domains & Company Entities。
   - 第二轮内容加厚页面：EMS & Box Build、Component Sourcing / BOM / DFM、PCB Fabrication Support、Resources / RFQ Prep、Request a Quote、Contact。
   - 内容加厚不应引入固定交期、No MOQ、24/7 support、客户 logo、IPC/IATF/RoHS/REACH/BSCI 等未确认或高风险 claim。

## 中文施工变更总表

| 模块 / 位置 | 当前状态 | 计划改法 | 主要文件 | 优先级 | 验收标准 |
| --- | --- | --- | --- | --- | --- |
| 本地预览 | 首次打开 `/official-resources` 容易看起来卡住 | 明确使用 Webpack dev/build，并在 README 记录冷编译行为 | `togeto-next-js/package.json`, `togeto-next-js/README.md` | P0 | 首次慢有说明，热启动明显变快，预览命令统一 |
| 测试护栏 | 旧模板和 AI-facing copy 主要靠人工发现 | 新增 live app denylist、mobile nav、template cleanup 测试 | `togeto-next-js/tests/template-cleanup.test.mjs`, `togeto-next-js/tests/venture-site-shell.test.mjs` | P0 | 测试能拦住 Togeto、物流模板、假表单、AI/search engine 可见文案 |
| Source authority | RFQ email、general email、Wei Chi、sameAs、schema、tests 有冲突风险 | 新增 Task 0，先冻结 public facts，再施工 UI/content/schema | `contact-channels.ts`, `site-data.ts`, `structured-data.ts`, tests | P0 blocker | Contact、RFQ、Footer、Official Domains、schema、tests 事实一致 |
| 主导航 IA | `Official Resources` 已在 About，但命名不完整且 Resources 下有重复入口风险 | 改为 Home、Services、Quality & Testing、About、Resources、Contact、Request a Quote；About 下放完整 `Official Websites, Domains & Company Entities`；Resources 下移除 | `site-data.ts`, `Header.tsx`, tests | P0 | 桌面和移动端都能看到 About 子项、Contact、RFQ 入口；Resources 不重复挂域名澄清页 |
| About 页面关系 | About 只做简短说明，Official Resources 容易像孤立页面 | About 保留 teaser，按钮进入完整 Official Websites, Domains & Company Entities 页面 | `site-data.ts` | P0 | About 不放完整域名表，只提供清晰入口 |
| Official Resources 文案 | 有些内容偏内部事实清单和 AI/GEO 说明 | 改成 buyer verification guide，公开标题用 `Official Websites, Domains & Company Entities` | `site-data.ts` | P0 | 可见文案不再说这是给 AI/search engine 看，也不放未确认实体关系 |
| Official Resources 视觉 | Hero 偏高，Quick Answer 不够快露出，图片主题弱 | 压缩 hero，Quick Answer 做首屏锚点，减少“内部清单感” | `VenturePage.tsx`, `venture-exact.css` | P0 | 1440x1000 首屏能快速看到 Quick Answer；移动端不拥挤 |
| RFQ 首发路径 | 当前以静态 mailto panel 为主，未形成用户填写流程 | 做 mailto-first RFQ 表单，按钮生成预填邮件到 `CONTACT_CHANNELS.rfqEmail` | `RfqEmailComposer.tsx`, `contact-channels.ts`, page content | P0 | 不需要后端；点击后打开邮件客户端；正文包含用户填写内容和附件提醒；收件人与全站事实源一致 |
| RFQ 文件上传 | mailto 不能可靠上传文件 | 不做网页上传，明确提示用户在邮件客户端附 Gerber/BOM/CPL/drawings | `RfqEmailComposer.tsx`, `site-data.ts` | P0 | 用户不会误以为文件已通过网页上传 |
| 通用内容表格 | 现在只有 quick answer/domain table，普通页面缺少可读表格 | 新增 reusable content table，用于 company facts、capability、testing matrix、service hierarchy | `site-data.ts`, `VenturePage.tsx`, 两份 `venture-exact.css` | P0 | 表格桌面可扫读、移动端不溢出，schema 不被错误塞入 Organization |
| 内容拆分 | `site-data.ts` 已承担 nav/footer/FAQ/page copy，继续塞大表格会难维护 | 新增 `content/` 目录，按页面拆分；`site-data.ts` 只聚合 export | `content/navigation.ts`, `content/contact-channels.ts`, `content/page-types.ts`, `content/pages/*.ts` | P0/P1 | 每个页面内容可单独 review，不再把所有长文案堆进一个文件 |
| Metadata override | 当前 metadata 主要来自 `page.label | Venture Electronics` 和 summary | 在当前 `PageData` 增加 `seoTitle` / `metaDescription`；完整 type migration 放到 Task 7 | `site-data.ts`, `page-metadata.ts`, page content files | P0 | 核心页面有独立 SEO/GEO title 和 description，PR1 不做半迁移 |
| Home 内容深度 | 首页结构完整但“为什么买家选 Venture”的解释还偏散 | 新增 “A clearer path from PCB files to assembled electronics” 区块，解释买家挑战和 Venture 支持 | `HomeBuyerPathBlock.tsx`, `home-six-content.tsx`, 两份 `venture-exact.css` | P0 | 首页能回答 PCBA/EMS、BOM 风险、测试、域名、RFQ 文件这些买家问题 |
| About 内容深度 | 页面偏薄，只像 GEO fact sheet | 加 Direct answer、company facts、what we support、buyer workflow、project fit、quality boundary、official domains teaser | `site-data.ts`, existing approved images | P0 | 买家能理解 Venture 是谁、做什么、不做什么、怎么开始合作 |
| Services Overview 内容深度 | 服务层级不够清楚 | 加 service hierarchy table，说明 PCBA 主入口、turnkey 模式、EMS 高层级、fabrication/sourcing/testing 支撑关系 | `site-data.ts` | P0 | 客户一眼看懂应该从哪个服务页开始 |
| PCB Assembly / PCBA 内容深度 | 核心转化页需要更像能力页 | 加 capability table、delivery model、RFQ checklist、assembly flow、testing dependency、schedule boundary | `site-data.ts`, evidence images | P0 | 不出现固定 lead time、No MOQ、IPC Class 3 等未确认 claim |
| Quality & Testing 内容深度 | “depends on scope” 太薄 | 加 inspection/testing matrix、equipment examples、test input checklist、records/traceability、FAQ | `site-data.ts`, evidence images | P0 | 能解释 SPI/AOI/X-Ray/ICT/FCT/FAI 适用条件和买家输入 |
| Services + Quality 内容厚度补丁 | PR2/PR4 结构正确，但人类验收仍觉得 Services 与 Quality 解释厚度不足 | 追加专门 content-depth patch，扩展 Services buyer-situation/service-ownership/old-site-topic mapping，扩展 Quality lifecycle/method/input/records/certificate-boundary/FAQ | `2026-06-29-services-quality-content-depth-patch-plan.md`, `site-data.ts`, tests | P0 follow-up | 不是只补几句文案；必须通过内容覆盖测试、视觉验收和 subagent review |
| P1 页面内容深度 | EMS/Sourcing/Fabrication/Resources/RFQ/Contact 仍偏骨架 | 第二轮补 EMS scope、BOM risk、fabrication input、RFQ checklist、mailto helper、contact routing | `site-data.ts`, `RfqEmailComposer.tsx` | P1 | P0 风格确认后再扩展，仍保持 claim-safe wording |
| 图片策略 | 图片不能堆，也不能缺少真实感 | 每个核心页少量使用已批准 WebP 真实图；Quality 可用 4-6 张小图 | `image-manifest.ts`, `EvidenceImageBlock.tsx`, existing assets | P0/P1 | 不用客户 logo，不用未授权 social proof，图片不拖慢 LCP |
| Claim 风险边界 | 旧站有强承诺和证书风险 | 明确排除 Since 2010、24/7、固定交期、No MOQ、未确认认证、客户 logo、敏感行业 claim | `site-data.ts`, tests | P0 | denylist 测试能拦截高风险旧站说法 |
| Inner page duplication | `PageEnhancements.tsx` 会在加厚页面后继续插入 homepage blocks | 内容加厚后审计 PageEnhancements，删掉重复 block 或改成轻 CTA | `PageEnhancements.tsx`, tests, screenshots | P0/P1 | About/Services/PCBA/Resources 不像模板拼接，不重复展示同类内容 |
| 移动端导航 | `820px` 以下隐藏桌面 nav，但没有替代菜单 | 增加 mobile menu toggle/panel，并复用同一套导航 IA | `Header.tsx`, 两份 `venture-exact.css` | P0 | 390x844 可打开菜单，About 子项、Contact、RFQ 都可访问 |
| 模板目录 | Repo 仍有 Togeto documentation 和 RTL template | 删除旧模板目录，不归档到 repo 内 | `togeto-documentation/`, `togeto-rtl-next-js/` | P1 | `rg` 不再被旧文档大量污染 |
| 高风险旧源码 | 旧 service/contact/faq/price/shop/portfolio 等仍在 repo | 先删 copy-bearing 且未被当前页面使用的旧文件 | `src/data/*`, `src/components/contact`, `src/components/price` 等 | P1 | 当前 Venture 页面 build/test 不受影响，旧物流文案不在 active source |
| 项目身份 | `package.json` 仍叫 `togeto-next-js` | 改成 Venture 站点名；目录改名放 P2 | `package.json`, `package-lock.json` | P1 | package metadata 不再显示 Togeto |
| TypeScript/build | 因旧模板遗留仍忽略 TS build errors | 清理后尝试关闭 `ignoreBuildErrors` | `next.config.mjs` | P1 | build 通过则关闭；不通过要记录具体失败文件 |
| CSS/theme | 仍依赖模板主题 CSS | P2 再抽离 Venture 自有 CSS，避免本轮大面积破坏视觉 | `theme-main.css`, `venture-exact.css` | P2 | 当前视觉稳定后再做，需完整截图 QA |
| Subagent review | 需要施工后独立复核 | 完成后跑 subagent review，重点看视觉、人类文案、模板清理、schema 风险 | devlog + review output | P0 | review 发现的问题处理或记录风险 |

## 当前证据

### 运行卡顿证据

- 真实源码启动地址：`http://localhost:3002/official-resources`
- 首次编译结果：`GET /official-resources 200 in 46s (next.js: 46s, application-code: 206ms)`
- 热启动后结果：`GET /official-resources 200 in 55ms-233ms`
- 结论：
  - 冷编译慢来自 Next dev 编译层。
  - Official Resources 的 React/render 代码不是核心瓶颈。
  - 模板残留不会直接解释“打开一次页面一直白屏”，但会解释项目长期变慢、误扫、lint/build/TS 负担重。

### 已确认的模板残留

- `togeto-next-js/package.json` 仍是 `"name": "togeto-next-js"`。
- `togeto-documentation/` 仍包含 Togeto template documentation。
- `togeto-rtl-next-js/` 仍是完整 RTL 模板项目。
- `togeto-next-js/src/data/menu-data.ts` 仍有 `Home 01`、`/service-details/1`、`/portfolio` 等旧模板导航。
- `togeto-next-js/src/data/service-data.tsx` 仍有 `Long Distance Moves`、`Global Shipping`、`Ocean Freight`、`Togeto specializes in international shipping`。
- `togeto-next-js/src/data/faq-data.ts` 仍有 Togeto/logistics/lorem-like FAQ。
- `togeto-next-js/src/components/price/` 仍有物流 pricing template。
- `togeto-next-js/src/components/contact/` 和 `src/components/form/contact-form-three.tsx` 仍保留旧 contact / fake alert form。
- `public/assets/css/theme-main.css` 和 SCSS header 仍包含 `Togeto - Transport & Logistics Next Js Template` 注释与 shop/portfolio sections。

### 已确认的视觉/UX问题

- `src/app/(homes)/home-6/venture-exact.css` 在 `@media (max-width: 820px)` 下隐藏 `.main-nav`。
- `Header.tsx` 没有 mobile menu button/panel。
- Official Resources 页 hero 当前偏“内页 marketing hero”，而不是“快速验证/官方入口”工具页。
- Quick Answer 应该成为用户首屏视觉锚点，而不是被大 hero 推到屏幕底部。
- Hero image 对 domain/entity page 解释力弱。
- 可见文案中存在面向 AI/search engine 的表达，应改为人类采购/合规语境。

## 已拍板

1. **施工范围与 PR 节奏**
   - 执行完整 master plan，但按 5 个顺序 PR 交付，每个 PR 单独 QA、subagent review、视觉验收和回滚。

2. **RFQ / General inquiry email**
   - 锁定 `info@venture-mfg.com` 作为首发公开询盘与 RFQ 邮箱。
   - `support@venture-mfg.com` 视为旧规划口径残留，除非客户之后明确发布新的替换决定。

3. **旧模板目录**
   - 删除 `togeto-documentation/` 和 `togeto-rtl-next-js/`，不在 repo 内归档。
   - 理由：git history 可恢复，保留或移动到 `archive-template/` 仍会污染 `rg`、AI review、template cleanup 测试和维护判断。

4. **CSS 清理做到哪一层？**
   - P0 推荐：不动 `theme-main.css` 依赖，只修当前 UI 和加测试。
   - PR5 / P2 再逐步抽出 Venture 所需 CSS，最终在截图 QA 通过后移除 template theme dependency。

5. **Official Resources 页面公开名称**
   - 统一使用 `Official Websites, Domains & Company Entities`。
   - H1、About dropdown、About teaser、footer、breadcrumb、metadata/schema 页面名称都使用这个完整名称。

6. **Services + Quality 内容厚度补丁**
   - 2026-06-29 人类验收发现：Services Overview 和 Quality & Testing 结构正确，但解释厚度仍不够像真实 B2B 制造商官网页面。
   - 这不是重新开大方向，也不是重做 IA。
   - 已新增专项计划：`docs/venture-content/2026-06-29-services-quality-content-depth-patch-plan.md`。
   - 该补丁应作为独立 follow-up PR 从最新 `main` 开分支施工；不建议回到已 merge 的 `codex/venture-pr2-core-content-depth` 老分支继续改。
   - 如果和当前 PR3 并行开发，必须明确这是 stacked PR，因为两者都会改 `site-data.ts` 和 `venture-site-shell.test.mjs`。
   - 路由仍保留 `/official-resources/`，避免本轮增加路由 churn。

6. **package / directory naming**
   - 本轮只改 `togeto-next-js/package.json` 和 `togeto-next-js/package-lock.json` 的 package name。
   - 不在这轮 5 个 PR 内重命名 `togeto-next-js/` 目录，避免 docs、devlog、命令、截图输出和本地脚本路径 churn。

7. **Content source map gate**
   - 内容加厚以 `zbot-enterprise-brain-venture` 为主要 source authority。
   - `venture-mfg.com`、`venture-pcba.com`、product catalog、旧站页面可以作为补充 evidence / vocabulary source，但不能照抄旧 SEO 文案、强 claim 或目录结构。
   - 所有公开 copy 必须转译成同时适合真实买家阅读和 GEO/schema 抽取的文案：人能扫读，AI 能识别实体、服务边界、RFQ 输入和证据范围。

8. **Type migration boundary**
   - Task 0 只在当前 `site-data.ts` 的 `PageData` 上增加 `seoTitle` / `metaDescription`。
   - 完整 `PageData` / `PageSection` / `PageFAQ` / `DomainGovernanceRecord` 迁移到 `content/page-types.ts` 放到 Task 7，和 content table model 一起做。

9. **Existing tests reconciliation**
   - PR1 先把现有测试从旧口径迁到新口径，再加新 guardrails。
   - 必须移除旧 `support@venture-mfg.com`、top-level `Official Websites`、未实现 `ItemList` schema 的测试断言。

10. **Light performance gate**
   - 每个 PR 都记录轻量性能信号：build duration、route curl timing、Next image/LCP warning、desktop/mobile screenshots、是否新增 priority image。
   - PR5 再做更完整 CSS/runtime extraction 和 `theme-main.css` 移除。

## 施工前仍需拍板

None. GStack plan review decisions D1-D11 are resolved above.

## File Map

### Guardrails and tests

- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify or create: `togeto-next-js/tests/template-cleanup.test.mjs`
- Modify: `togeto-next-js/tests/home-6.test.mjs`
- Modify: `togeto-next-js/package.json`
- Modify: `togeto-next-js/package-lock.json`

### Runtime and build configuration

- Modify: `togeto-next-js/package.json`
- Modify: `togeto-next-js/next.config.mjs`
- Modify: `togeto-next-js/README.md`

### Public Venture UI

- Create: `togeto-next-js/src/components/venture-site/home/HomeBuyerPathBlock.tsx`
- Modify: `togeto-next-js/src/components/venture-home/home-six-content.tsx`
- Modify: `togeto-next-js/src/components/venture-site/site/Header.tsx`
- Modify: `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`
- Modify: `togeto-next-js/src/components/venture-site/pages/PageEnhancements.tsx`
- Modify: `togeto-next-js/src/components/venture-site/pages/page-metadata.ts`
- Create: `togeto-next-js/src/components/venture-site/pages/RfqEmailComposer.tsx`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts`
- Create: `togeto-next-js/src/components/venture-site/content/contact-channels.ts`
- Create: `togeto-next-js/src/components/venture-site/content/navigation.ts`
- Create: `togeto-next-js/src/components/venture-site/content/page-types.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/about.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/official-domains.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/services.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/pcba.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/ems-box-build.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/component-sourcing.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/pcb-fabrication.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/quality-testing.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/resources.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/request-quote.ts`
- Create: `togeto-next-js/src/components/venture-site/content/pages/contact.ts`
- Create: `togeto-next-js/src/components/venture-site/content/index.ts`
- Modify if new image IDs are needed: `togeto-next-js/src/components/venture-site/image-manifest.ts`
- Modify: `togeto-next-js/src/app/request-a-quote/page.tsx`
- Modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- Modify: `togeto-next-js/public/venture-static/venture-exact.css`

### Template cleanup candidates

- Delete: `togeto-documentation/`
- Delete: `togeto-rtl-next-js/`
- Delete or isolate after import check:
  - `togeto-next-js/src/data/menu-data.ts`
  - `togeto-next-js/src/data/service-data.tsx`
  - `togeto-next-js/src/data/faq-data.ts`
  - `togeto-next-js/src/data/testimonial-data.ts`
  - `togeto-next-js/src/data/portfolio-data.ts`
  - `togeto-next-js/src/data/product-data.ts`
  - `togeto-next-js/src/components/price/`
  - `togeto-next-js/src/components/contact/`
  - `togeto-next-js/src/components/form/contact-form-three.tsx`
  - `togeto-next-js/src/components/wishlist/`
  - `togeto-next-js/src/components/shop/`
  - `togeto-next-js/src/components/portfolio/`
  - `togeto-next-js/src/redux/`
  - old demo-only `togeto-next-js/src/views/**` folders

### Documentation

- Modify: `docs/devlog/2026-06-28-venture-official-domain-page-buyer-facing.md`
- Create/modify follow-up devlog for construction day.

## Task 0: Freeze public source authority before UI/content changes

**Files:**
- Create: `togeto-next-js/src/components/venture-site/content/contact-channels.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts`
- Modify: `togeto-next-js/src/components/venture-site/schema/structured-data.ts`
- Modify: `togeto-next-js/src/components/venture-site/pages/page-metadata.ts`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`
- Modify: construction-day devlog

This is a blocking gate. Do not start UI, RFQ, schema, or content expansion until this task passes.

- [ ] **Step 1: Create a single contact-channel source**

Create `content/contact-channels.ts`:

```ts
export const CONTACT_CHANNELS = {
  currentMainWebsite: "https://www.venture-mfg.com/",
  currentMainDomain: "venture-mfg.com",
  legacyPcbaDomain: "venture-pcba.com",
  rfqEmail: "info@venture-mfg.com",
  generalEmail: "info@venture-mfg.com",
  phone: "+86 755 8529 6692",
  fax: "+86 755 2397 7408",
  location: "Shenzhen, Guangdong, China",
  address:
    "Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, Guangdong, China",
} as const;
```

Decision rule:

- Use `info@venture-mfg.com` as the locked first-launch public inquiry and RFQ email based on the latest source authority across the Venture website workspace and Enterprise Brain materials.
- Treat `support@venture-mfg.com` as a superseded older planning value unless the client later issues a new explicit replacement decision.
- Keep the email centralized in `CONTACT_CHANNELS` so a future confirmed change updates one source file plus matching tests/devlog, not scattered page copy.

- [ ] **Step 2: Lock public entity handling**

Apply these rules:

```text
Public brand: Venture Electronics.
Public English entity: Venture Electronics Technology Ltd, only where already confirmed and appropriate.
Wei Chi / Chinese entity relationship: do not publish in visible copy, footer, privacy, RFQ, or Organization schema until the client confirms allowed public wording.
Supplier onboarding or contract entity details: can be handled during quotation or onboarding communication, not on the public marketing pages in this pass.
```

- [ ] **Step 3: Lock domain handling**

Apply these rules:

```text
venture-mfg.com = current official main website.
venture-pcba.com = legacy PCBA-focused vertical web asset connected to Venture Electronics, not the current main site and not a separate company identity.
Venture PCB / Venture PCBA = service/search expressions, not separate company identities.
Historical, reserved, inactive, candidate, redirected, or non-owned domains do not go into Organization sameAs.
LinkedIn / YouTube / Facebook / WhatsApp / WeChat do not go into sameAs until exact official URLs and account permissions are confirmed.
```

- [ ] **Step 4: Add metadata override support without moving page types yet**

In the existing `site-data.ts` `PageData` type, add:

```ts
export type PageData = SiteLink & {
  seoTitle?: string;
  metaDescription?: string;
  // existing PageData fields remain unchanged
};
```

In `page-metadata.ts`, use:

```ts
const title = page.seoTitle ?? `${page.label} | Venture Electronics`;
const description = page.metaDescription ?? page.summary;
```

Core indexable pages must set page-specific `seoTitle` and `metaDescription` during their content tasks.

Do not create or migrate `content/page-types.ts` in Task 0. Full `PageData`, `PageSection`, `PageFAQ`, and `DomainGovernanceRecord` migration belongs to Task 7 with the reusable content table work.

- [ ] **Step 5: Remove visible Wei Chi references before adding new copy**

Search:

```bash
cd togeto-next-js
rg -n "Wei Chi|威驰|Chinese entity" src/components/venture-site src/app tests
```

Expected after this task:

- No public visible page copy contains `Wei Chi`, `威驰`, or an unexplained Chinese entity relationship.
- Plan/devlog may mention it as an internal pending item.
- Tests should assert it does not appear in live public app files.

- [ ] **Step 6: Reconcile existing tests with resolved source decisions**

Before adding new guardrails, update existing tests that still encode superseded assumptions:

- Replace all `support@venture-mfg.com` expectations with the `CONTACT_CHANNELS.rfqEmail` / `info@venture-mfg.com` decision.
- Update Official Websites navigation expectations so `Official Websites, Domains & Company Entities` appears under About, not as a standalone top-level `Official Websites` nav item.
- Remove any `ItemList` expectation for the Official Websites page unless the implementation explicitly adds `ItemList` schema and tests it in the same PR.
- Keep sameAs tests strict: Organization schema must not include historical, reserved, inactive, candidate, redirected, related-company, or non-owned domains.

Known existing test locations to migrate:

```text
tests/venture-site-shell.test.mjs
- top-level Official Websites assertions around the Official Resources/domain-governance test
- public contact and RFQ email assertions that still expect support@venture-mfg.com
- RFQ mailto-only assertions that still expect support@venture-mfg.com
- Official Resources ItemList schema expectation
```

Expected after this step:

- Tests assert `info@venture-mfg.com` and/or `CONTACT_CHANNELS.rfqEmail`.
- Tests assert About dropdown placement for `Official Websites, Domains & Company Entities`.
- Tests do not require `ItemList` schema unless that schema is implemented with matching production code.

- [ ] **Step 7: Add source-authority tests**

Add to `tests/template-cleanup.test.mjs`:

```js
test('public source authority is centralized and public copy avoids unconfirmed entity relationships', async () => {
  const channels = await readProjectFile('src/components/venture-site/content/contact-channels.ts');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const schema = await readProjectFile('src/components/venture-site/schema/structured-data.ts');

  assert.match(channels, /CONTACT_CHANNELS/);
  assert.match(channels, /rfqEmail:\s*"info@venture-mfg\.com"/);
  assert.match(channels, /generalEmail:\s*"info@venture-mfg\.com"/);
  assert.doesNotMatch(siteData, /Wei Chi|威驰|Chinese entity/i);
  assert.doesNotMatch(schema, /venture-pcba\.com|venturegroup-mfg|uni-venture|v-cst|venturepcb\.com/);
});
```

No fallback RFQ email should be encoded in tests. `info@venture-mfg.com` is the source-authority value for this implementation pass, and every public RFQ/contact surface should read it through `CONTACT_CHANNELS`.

- [ ] **Step 8: Verify**

Run:

```bash
cd togeto-next-js
node --test tests/template-cleanup.test.mjs tests/venture-site-shell.test.mjs
git diff --check
```

Expected:

- Contact channel tests pass.
- Existing tests no longer encode `support@venture-mfg.com`, top-level `Official Websites`, or unimplemented `ItemList` expectations.
- No unconfirmed entity relationship appears in public live app files.
- Existing schema tests still pass after sameAs remains restricted.

- [ ] **Step 9: Commit**

```bash
git add togeto-next-js/src/components/venture-site/content/contact-channels.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/src/components/venture-site/schema/structured-data.ts togeto-next-js/src/components/venture-site/pages/page-metadata.ts togeto-next-js/tests/template-cleanup.test.mjs togeto-next-js/tests/venture-site-shell.test.mjs
git commit -m "chore: freeze Venture public source authority"
```

## Task 0A: Map Enterprise Brain and evidence sources before content expansion

**Files:**
- Create: `docs/venture-content/2026-06-28-venture-buyer-page-source-map.md`
- Reference only, do not modify: `/Users/nianliu/Desktop/Zbot/GithubRepo/zbot-enterprise-brain-venture/**`
- Reference only, do not modify: `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-geo-website-workspace/**`
- Reference only, do not modify: current public website / product catalog evidence already archived in the workspace
- Modify: construction-day devlog

This is a content gate. Complete it before Tasks 3, 7-12, and 14 add or rewrite public page copy.

- [ ] **Step 1: Create a buyer-page source map**

Create `docs/venture-content/2026-06-28-venture-buyer-page-source-map.md` with a table like:

| Target website page | Primary Enterprise Brain sources | Workspace / client-decision sources | Supplemental evidence / vocabulary | Public copy rule |
| --- | --- | --- | --- | --- |
| About Venture Electronics | `wiki/zh-CN/phase2/company-canon/company-overview.md`, `confirmed-company-facts.md`, `business-positioning.md`, `contact-and-channels.md` | `00_context/decisions.md`, `00_context/client-communication-service-record.md` | venture main site company/service pages, product catalog only if already source-mapped | Human buyer overview first; no internal source labels, no unconfirmed Wei Chi/entity relationship. |
| Official Websites, Domains & Company Entities | `company-canon/brand-and-official-websites.md`, `market-external-research/multi-domain-brand-architecture.md` | 2026-06-19 client domain decisions and source summaries | public domain observations only as role evidence | Buyer verification page; classify domains by role, do not turn inactive/candidate/non-owned domains into links or sameAs. |
| Services Overview | `product-line-reusable-claims.md`, `venture-positioning-expression.md`, `ems-pcba-service-hierarchy.md` | sitemap and launch-page decisions | venture main site and product catalog service vocabulary | Human-friendly service hierarchy; no old-site SEO doorway structure. |
| PCB Assembly / PCBA | `product-service-lines/pcba-turnkey-assembly/*`, `component-sourcing-supply-chain/*`, `manufacturing-delivery/service-process-overview.md` | RFQ / lead-time and claim-boundary decisions | venture main PCBA pages, venture-pcba.com as supplemental PCBA vocabulary | Conversion page with RFQ inputs, process, testing dependency, and project-based schedule boundary. |
| Quality & Testing | `product-service-lines/quality-testing-inspection/*`, `manufacturing-delivery/quality-traceability.md`, `claim-boundaries.md` | ISO / UL evidence and certification boundary decisions | public quality/testing pages, product catalog only for supported capability categories | Explain inspection and testing flow without unconfirmed certifications, IPC Class 3, fixed reliability claims, or overbroad certificate scope. |
| EMS & Box Build | `product-service-lines/ems-box-build/*`, `manufacturing-delivery/prototype-to-volume-production.md` | industry and case-study boundaries | venture main Box Build / EMS pages | Keep scope project-based; do not overclaim system integration, enclosure design, or regulated-industry capability. |
| Component Sourcing / BOM / DFM | `component-sourcing-supply-chain/*`, `engineering-npi-dfm/*` | RFQ materials and sourcing-risk decisions | venture main DFM/DFA, quality, and sourcing pages | Frame as BOM risk reduction and customer-approved alternatives, not guaranteed procurement or fixed review time. |
| PCB Fabrication Support | `pcb-fabrication/*`, `manufacturing-delivery/capability-claims-evidence-gaps.md` | claim-boundary decisions | venture main PCB capability pages and catalog specs when source-mapped | Use capability categories and RFQ inputs; avoid unsupported exact specs unless verified in source. |
| Resources / RFQ Prep | `faq-buyer-question-framework.md`, `commercial-terms.md`, `service-process-overview.md` | 2026-06-19 RFQ and lead-time decisions | catalog/download assets after source mapping | Buyer checklist language; no fixed lead time, no platform-style promise. |
| Request a Quote | `commercial-terms.md`, `pcba-specs-data.md`, `pcba-process-smt-through-hole-reflow.md` | `info@venture-mfg.com` decision and mailto-first decision | product catalog file-prep language if verified | Mailto-first helper; users attach files in email client, no fake upload/submission promise. |
| Contact | `contact-and-channels.md`, `confirmed-company-facts.md` | latest public contact decision | public website contact facts if consistent with latest authority | General inquiries and official-channel verification; RFQ handoff points to Request a Quote. |

- [ ] **Step 2: Apply source priority rules**

Use this hierarchy when writing public copy:

1. Enterprise Brain pages and review outputs are the primary implementation source.
2. `venture-geo-website-workspace` decisions and client-communication summaries resolve conflicts.
3. venture main website, venture-pcba.com, product catalog, and old-site material are supplemental evidence or vocabulary only.
4. If public website/catalog wording conflicts with Enterprise Brain or client decisions, follow the newer Enterprise Brain / client-decision source.
5. Never copy old SEO phrasing directly. Rewrite into buyer-facing, claim-bounded, GEO-friendly copy.

- [ ] **Step 3: Add copy transformation rules**

Every content task must pass these checks:

- Human-friendly: answers what the buyer can do, what to send, what Venture reviews, and where the boundary is.
- GEO-friendly: names Venture Electronics, service category, official domain, RFQ inputs, and evidence scope clearly.
- Claim-safe: no fixed lead time, No MOQ, 24/7 support, customer logos, IPC/IATF/RoHS/REACH/BSCI, Aerospace/Defense, or unconfirmed regulated-industry claims.
- Schema-safe: visible FAQ and `FAQPage` schema stay synchronized; Organization schema remains limited to confirmed canonical website and contact details.

- [ ] **Step 4: Verify**

Run:

```bash
rg -n "support@venture-mfg\.com|No MOQ|24/7|IPC Class 3|IATF|BSCI|Aerospace|Defense|customer logo|fixed lead time" docs/venture-content/2026-06-28-venture-buyer-page-source-map.md
git diff --check docs/venture-content/2026-06-28-venture-buyer-page-source-map.md docs/devlog/2026-06-28-venture-template-cleanup-ui-copy-plan.md
```

Expected:

- Source map exists before buyer-facing page expansion.
- Each target page has primary Enterprise Brain sources and a public copy rule.
- Supplemental website/catalog sources are explicitly treated as evidence/vocabulary, not direct copy authority.

- [ ] **Step 5: Commit**

```bash
git add docs/venture-content/2026-06-28-venture-buyer-page-source-map.md docs/devlog/2026-06-28-venture-template-cleanup-ui-copy-plan.md
git commit -m "docs: map Venture buyer page source authority"
```

## Task 1: Add baseline guardrails before cleanup

**Files:**
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Create: `togeto-next-js/tests/template-cleanup.test.mjs`

- [ ] **Step 1: Add a focused live-app denylist test**

Add a new test file that checks only the current live Venture surface first, not the whole repo:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');

async function readProjectFile(path) {
  return readFile(join(projectRoot, path), 'utf8');
}

const liveFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/venture-site/site-data.ts',
  'src/components/venture-site/site/Header.tsx',
  'src/components/venture-site/site/Footer.tsx',
  'src/components/venture-site/pages/VenturePage.tsx',
  'src/components/venture-site/schema/structured-data.ts',
  'src/components/venture-home/home-six-content.tsx',
];

const forbiddenLiveTerms = [
  'Togeto',
  'international shipping',
  'Long Distance Moves',
  'Global Shipping',
  'Ocean Freight',
  'Warehousing',
  'Home 01',
  '/service-details/1',
  '/portfolio',
  '/shop',
  '/wishlist',
  'alert(JSON.stringify',
  'This page also helps search engines and AI systems',
  'search engines and AI systems',
  'Wei Chi',
  '威驰',
  'Chinese entity',
];

test('live Venture app files stay free of template and AI-facing copy leaks', async () => {
  const combined = (await Promise.all(liveFiles.map(readProjectFile))).join('\n');

  for (const term of forbiddenLiveTerms) {
    assert.doesNotMatch(
      combined,
      new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'),
      `Unexpected live-app phrase: ${term}`,
    );
  }
});
```

- [ ] **Step 2: Run the new test and confirm it passes after Task 0**

Run:

```bash
cd togeto-next-js
node --test tests/template-cleanup.test.mjs
```

Expected:

- Passes after Task 0 removes unconfirmed entity references and centralizes contact channels.
- Does not include the mobile navigation assertion yet; that assertion is added with Task 13 so no failing test is committed.

- [ ] **Step 3: Commit guardrails**

```bash
git add togeto-next-js/tests/template-cleanup.test.mjs
git commit -m "test: add Venture template cleanup guardrails"
```

## Task 2: Stabilize local Next preview workflow documentation

**Files:**
- Modify: `togeto-next-js/package.json`
- Modify: `togeto-next-js/README.md`
- Modify: construction-day devlog

- [ ] **Step 1: Add explicit dev scripts**

Change scripts from:

```json
"dev": "next dev",
"build": "next build --webpack",
"start": "next start"
```

to:

```json
"dev": "next dev --webpack",
"dev:turbo": "next dev",
"build": "next build --webpack",
"start": "next start"
```

Reason:

- Current verified local preview used Webpack.
- Build already uses Webpack.
- Turbopack can remain available as `dev:turbo`, but should not be the default preview path until it is stable for this repo.

- [ ] **Step 2: Document cold compile behavior**

Add this to `togeto-next-js/README.md`:

~~~markdown
## Local Preview Notes

Use:

```bash
npm run dev -- --port 3002 --hostname 127.0.0.1
```

The first App Router request in local development can take 40-60 seconds while Next compiles the route. After the first compile, repeated route loads should return quickly. This is a development cold-compile behavior, not evidence that the route's React application code is slow.
~~~

- [ ] **Step 3: Verify**

Run:

```bash
npm run dev -- --port 3002 --hostname 127.0.0.1
curl --noproxy '*' -sS --max-time 300 -o /tmp/venture-official.html -w 'http_code=%{http_code} time=%{time_total}\n' http://127.0.0.1:3002/official-resources
```

Expected:

- `http_code=200`
- First request may be slow.
- Second request should be much faster.

- [ ] **Step 4: Commit**

```bash
git add togeto-next-js/package.json togeto-next-js/README.md
git commit -m "chore: document stable Venture local preview workflow"
```

## Task 3: Clean public-facing human copy on Official Resources

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/official-domains.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`

- [ ] **Step 1: Remove visible AI/search-engine rationale**

Scan current visible page data instead of assuming one exact sentence exists:

```bash
cd togeto-next-js
rg -n "AI systems|search engines|GEO|internal source|source basis" src/components/venture-site src/app
```

Any public visible copy that explains the page as being for AI/search extraction should be replaced with buyer-facing wording such as:

```ts
"This page gives buyers, sourcing teams, and compliance reviewers a single place to verify Venture Electronics web addresses before citing a domain or sending project files.",
```

- [ ] **Step 2: Tighten the page's human-facing role/summary**

Use the full clarification title and buyer-first role/summary:

```ts
label: "Official Websites, Domains & Company Entities",
title: "Official Websites, Domains & Company Entities",
role:
  "Clarification page for Venture Electronics websites, domains, entity names, and official contact routes.",
summary:
  "Use this page to confirm the current Venture Electronics website, understand older or supporting domain assets, and choose the safe channel for inquiries or RFQ files.",
seoTitle:
  "Official Venture Electronics Websites, Domains & Company Entities",
metaDescription:
  "Verify Venture Electronics' current official website, legacy PCBA-focused domain assets, related domain roles, and safe inquiry contact paths.",
```

- [ ] **Step 3: Keep schema and FAQ facts intact**

Do not remove:

- `FAQPage`
- `WebPage`
- `BreadcrumbList`
- canonical URL
- current Organization schema

Do not claim `ItemList` schema exists unless a later task implements it. FAQPage schema should reflect visible FAQ content from `page.faqs`.

- [ ] **Step 4: Run tests**

```bash
cd togeto-next-js
node --test tests/template-cleanup.test.mjs tests/venture-site-shell.test.mjs
```

Expected:

- No visible `AI systems` or `search engines` language in live app files.
- Existing domain/schema tests still pass.

- [ ] **Step 5: Commit**

```bash
git add togeto-next-js/src/components/venture-site/content/pages/official-domains.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/tests/template-cleanup.test.mjs
git commit -m "copy: make official resources page buyer-facing"
```

## Task 4: Make Official Websites, Domains & Company Entities visually human-first

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/official-domains.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- Modify: `togeto-next-js/public/venture-static/venture-exact.css`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add compact hero support and remove above-fold catalog hero**

Add optional page data property:

```ts
heroDensity?: "standard" | "compact";
```

Set:

```ts
officialResources: {
  // existing fields
  heroDensity: "compact",
  showHeroVisual: false,
}
```

Reason:

- The catalog cover is weakly related to domain/entity verification.
- This page should behave like a fast buyer verification guide, not a brochure hero.
- Removing the above-fold image avoids giving `/venture-catalog.webp` LCP priority on this route.

- [ ] **Step 2: Render compact hero class**

In `VenturePage.tsx`, update `PageHero` class logic:

```tsx
function PageHero({ page, showHeroVisual }: { page: PageData; showHeroVisual: boolean }) {
  return (
    <header
      className={[
        "stage3-hero",
        showHeroVisual ? "stage3-hero--with-visual" : "",
        page.heroDensity === "compact" ? "stage3-hero--compact" : "",
      ].filter(Boolean).join(" ")}
    >
      {/* existing content */}
    </header>
  );
}
```

- [ ] **Step 3: Keep Official Domains out of hero image priority logic**

Keep image priority limited to pages with a meaningful above-fold visual:

```tsx
priority={page.href === routes.pcba}
```

If a later design adds a small brand/domain verification graphic below Quick Answer, keep it non-priority unless screenshot QA proves it is the LCP element.

- [ ] **Step 4: Add compact hero CSS**

Add to both CSS files:

```css
.venture-site .stage3-hero--compact {
  min-height: auto;
  padding-block: clamp(64px, 8vw, 112px) clamp(32px, 5vw, 56px);
  align-items: center;
}

.venture-site .stage3-hero--compact .stage3-hero__content {
  max-width: 760px;
}

.venture-site .stage3-hero--compact .stage3-visual {
  max-height: 520px;
}

.venture-site .stage3-hero--compact + .stage3-section--featured {
  margin-top: clamp(24px, 4vw, 40px);
}

@media (max-width: 860px) {
  .venture-site .stage3-hero--compact {
    padding-block: 48px 28px;
  }
}
```

- [ ] **Step 5: Make Quick Answer the first visual anchor**

Check desktop screenshot at `1440x1000`:

- H1 visible.
- Quick Answer heading visible without scrolling or with only minimal fold overlap.
- CTAs do not dominate the domain-verification task.

- [ ] **Step 6: Run visual and automated verification**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
```

Manual browser checks:

- `http://localhost:3002/official-resources`
- Desktop: 1440x1000
- Mobile: 390x844

- [ ] **Step 7: Commit**

```bash
git add togeto-next-js/src/components/venture-site/pages/VenturePage.tsx togeto-next-js/src/components/venture-site/content/pages/official-domains.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/src/app/\(homes\)/home-6/venture-exact.css togeto-next-js/public/venture-static/venture-exact.css togeto-next-js/tests/venture-site-shell.test.mjs
git commit -m "style: make official resources page human-first"
```

## Task 5: Place Official Websites, Domains & Company Entities under About

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/navigation.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/official-domains.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/src/components/venture-site/site/Header.tsx`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`

- [ ] **Step 1: Update top-level navigation target structure**

Target customer-facing navigation:

```text
Home
Services
Quality & Testing
About
  - About Venture Electronics
  - Official Websites, Domains & Company Entities
Resources
Contact
Request a Quote
```

Implementation rule:

- Keep route `/official-resources/`; do not rename the route in this round.
- `Contact` should remain a top-level navigation item.
- `Request a Quote` can remain rendered as the header CTA button on desktop, but it must be treated as a first-level action in the UI and appear inside the mobile navigation panel.
- `Official Websites, Domains & Company Entities` must not appear as a separate top-level nav item.
- Remove this page from the Resources dropdown. It is a company/entity/domain clarification page, not a buyer resources page.

- [ ] **Step 2: Change `aboutLinks`**

Change:

```ts
const aboutLinks: NavItem[] = [
  { label: "About Venture Electronics", href: routes.about },
  { label: "Official Resources", href: routes.officialResources },
];
```

to:

```ts
const aboutLinks: NavItem[] = [
  { label: "About Venture Electronics", href: routes.about },
  { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
];
```

- [ ] **Step 3: Update `navItems` and `resourceLinks`**

Change the public nav from:

```ts
export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  // Services
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "About", href: routes.about, children: aboutLinks },
  { label: "Resources", href: routes.resources, children: resourceLinks },
  { label: "Official Websites", href: routes.officialResources },
];
```

to:

```ts
export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.services,
    children: serviceHierarchy.map((service) => ({ label: service.label, href: service.href })),
  },
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "About", href: routes.about, children: aboutLinks },
  { label: "Resources", href: routes.resources, children: resourceLinks },
  { label: "Contact", href: routes.contact },
];
```

Ensure `resourceLinks` does not include `routes.officialResources`:

```ts
const resourceLinks: NavItem[] = [
  { label: "Resources / FAQ", href: routes.resources },
];
```

Desktop RFQ remains the `Request a Quote` CTA button in `Header.tsx`. Mobile RFQ is handled in Task 13.

- [ ] **Step 4: Update labels outside the main nav**

Use `Official Websites, Domains & Company Entities` consistently for:

- About teaser links.
- Footer company links where this page appears.
- Breadcrumb/related link labels if currently shown as `Official Resources` or `Brand & Official Resources`.

Do not duplicate the full domain table on About. About should only include a short teaser and a link to the complete page.

- [ ] **Step 5: Add tests**

Add assertions that:

- `navItems` has no top-level `Official Websites`.
- `About` children include `Official Websites, Domains & Company Entities`.
- `resourceLinks` does not include `routes.officialResources`.
- top-level nav includes `Contact`.
- header still exposes `Request a Quote` as the primary CTA.

Suggested static test:

```js
test('official websites page lives under About navigation', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /label:\s*"About Venture Electronics",\s*href:\s*routes\.about/);
  assert.match(siteData, /label:\s*"Official Websites, Domains & Company Entities",\s*href:\s*routes\.officialResources/);
  assert.match(siteData, /label:\s*"Contact",\s*href:\s*routes\.contact/);
  assert.doesNotMatch(siteData, /label:\s*"Official Websites",\s*href:\s*routes\.officialResources/);
  assert.doesNotMatch(siteData, /const resourceLinks:[\s\S]*routes\.officialResources/);
});
```

- [ ] **Step 6: Browser check**

Check:

- Desktop: About dropdown includes both About Venture Electronics and Official Websites, Domains & Company Entities.
- Desktop: Official Websites, Domains & Company Entities is not a standalone top-level nav item.
- Desktop: Resources dropdown does not include the official domains page.
- Desktop: Contact is visible as a top-level nav item.
- Desktop: Request a Quote remains visible as the final CTA.

- [ ] **Step 7: Commit**

```bash
git add togeto-next-js/src/components/venture-site/content/navigation.ts togeto-next-js/src/components/venture-site/content/pages/official-domains.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/src/components/venture-site/site/Header.tsx togeto-next-js/tests/venture-site-shell.test.mjs togeto-next-js/tests/template-cleanup.test.mjs
git commit -m "nav: move official domains under About"
```

## Task 6: Build mailto-first RFQ form for first launch

**Files:**
- Create: `togeto-next-js/src/components/venture-site/pages/RfqEmailComposer.tsx`
- Modify: `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`
- Modify: `togeto-next-js/src/components/venture-site/content/contact-channels.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/request-quote.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`

- [ ] **Step 1: Define first-launch RFQ behavior**

Use mailto as the first-launch workflow:

```text
User fills RFQ form on the website.
User clicks Prepare RFQ Email.
Browser opens the user's email client.
Recipient, subject, and body are prefilled.
User attaches files and clicks Send manually.
```

This avoids backend scope for the first launch.

- [ ] **Step 2: Use the frozen RFQ recipient from `CONTACT_CHANNELS`**

In `RfqEmailComposer.tsx`, import:

```ts
import { CONTACT_CHANNELS } from "@/components/venture-site/content/contact-channels";
```

Use:

```ts
const RFQ_EMAIL = CONTACT_CHANNELS.rfqEmail;
```

Do not hardcode `info@venture-mfg.com` in the component. Task 0 owns the recipient through `CONTACT_CHANNELS.rfqEmail`.

- [ ] **Step 3: Create buyer-friendly fields**

Required fields:

- Name
- Company
- Email
- Project summary

Optional fields:

- Phone / WhatsApp
- Quantity
- Target schedule
- Project type
- Testing requirements
- Notes
- File checklist: Gerber, BOM, CPL / Pick-and-Place, assembly drawing, drawings, other

Do not add webpage file upload in this first launch. Mailto cannot reliably carry uploaded files, and a fake file input would create false confidence.

- [ ] **Step 4: Generate mailto subject and body**

Button label:

```text
Prepare RFQ Email
```

Subject example:

```text
Venture Electronics RFQ - [Company or Project Name]
```

Body should include:

```text
Hello Venture Electronics team,

Please review this RFQ request.

Name:
Company:
Email:
Phone / WhatsApp:
Project type:
Quantity:
Target schedule:
Files ready:
Project summary:
Testing / quality requirements:
Notes:

I will attach Gerber, BOM, CPL, drawings or related project files in this email client before sending.
```

Build the mailto URL with proper encoding:

```ts
const mailtoHref = `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoHref;
```

- [ ] **Step 5: Add fallback copy for users without email clients**

Show a non-alarmist fallback:

```text
If your email client does not open, email Gerber, BOM, CPL, drawings and project requirements to the Venture Electronics RFQ email shown on this page.
```

- [ ] **Step 6: Replace the current static RFQ mailto panel**

Replace or extend the current `RfqMailtoPanel` behavior in `VenturePage.tsx` so `/request-a-quote/` renders the new form instead of only a static email CTA.

Keep page copy clear:

- No backend submission.
- No file upload promise.
- User must attach project files in email.
- RFQ is not submitted until the user sends the email.

- [ ] **Step 7: Add tests**

Add static tests for:

- `Prepare RFQ Email` exists.
- `CONTACT_CHANNELS.rfqEmail` is used in the RFQ composer.
- `mailto:` is used.
- No `alert(JSON.stringify` fake submission remains.
- No `<input type="file">` is added to RFQ first launch.

Suggested assertions:

```js
test('RFQ first launch uses mailto composer without fake backend or upload promise', async () => {
  const composer = await readProjectFile('src/components/venture-site/pages/RfqEmailComposer.tsx');

  assert.match(composer, /Prepare RFQ Email/);
  assert.match(composer, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(composer, /mailto:/);
  assert.doesNotMatch(composer, /alert\(JSON\.stringify/);
  assert.doesNotMatch(composer, /type=["']file["']/);
});
```

- [ ] **Step 8: Browser check**

Check:

- `/request-a-quote/` shows a real form.
- Button opens a prefilled mail client URL.
- Body includes entered values.
- Page clearly tells users to attach Gerber/BOM/CPL/drawings in the email client.
- Mobile form fields are usable and do not overflow.

- [ ] **Step 9: Commit**

```bash
git add togeto-next-js/src/components/venture-site/pages/RfqEmailComposer.tsx togeto-next-js/src/components/venture-site/pages/VenturePage.tsx togeto-next-js/src/components/venture-site/content/contact-channels.ts togeto-next-js/src/components/venture-site/content/pages/request-quote.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/tests/venture-site-shell.test.mjs togeto-next-js/tests/template-cleanup.test.mjs
git commit -m "feat: add mailto-first RFQ composer"
```

## Task 7: Add reusable buyer-facing content tables

**Files:**
- Create: `togeto-next-js/src/components/venture-site/content/page-types.ts`
- Create: `togeto-next-js/src/components/venture-site/content/index.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`
- Modify: `togeto-next-js/src/components/venture-site/schema/structured-data.ts`
- Modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- Modify: `togeto-next-js/public/venture-static/venture-exact.css`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add content model types outside `site-data.ts`**

In `content/page-types.ts`, define shared page/content types. Move existing `PageData`, `PageSection`, `PageFAQ`, `DomainGovernanceRecord`, and related types here as part of the implementation, then add:

```ts
export type ContentTableColumn = {
  key: string;
  label: string;
};

export type ContentTableRow = Record<string, string>;

export type ContentTable = {
  columns: ContentTableColumn[];
  rows: ContentTableRow[];
  caption?: string;
};
```

Extend `PageSection`:

```ts
export type PageSection = {
  anchorId?: string;
  label?: string;
  title: string;
  body?: string;
  items?: string[];
  table?: ContentTable;
  quickAnswers?: QuickAnswerRow[];
  faqItems?: PageFAQ[];
  domainRecords?: DomainGovernanceRecord[];
  links?: SiteLink[];
  kind?:
    | "list"
    | "steps"
    | "checklist"
    | "facts"
    | "proof"
    | "content-table"
    | "domain-cards"
    | "domain-table"
    | "quick-answer"
    | "faq";
  featured?: boolean;
};
```

In `content/index.ts`, export the content model:

```ts
export * from "./page-types";
export * from "./contact-channels";
```

In `site-data.ts`, import and re-export from `content/` instead of keeping all large type definitions inline. `site-data.ts` can temporarily remain the aggregate source for route/page data until individual page files are split in the content expansion tasks.

- [ ] **Step 2: Add the table renderer**

In `VenturePage.tsx`, add:

```tsx
function ContentTable({ table }: { table: NonNullable<PageSection["table"]> }) {
  return (
    <div className="stage3-content-table">
      {table.caption ? <p className="stage3-content-table__caption">{table.caption}</p> : null}
      <table>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, index) => (
            <tr key={`${table.columns[0]?.key ?? "row"}-${index}`}>
              {table.columns.map((column, columnIndex) => {
                const value = row[column.key] ?? "";
                return columnIndex === 0 ? (
                  <th key={column.key} scope="row">
                    {value}
                  </th>
                ) : (
                  <td key={column.key}>{value}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

Update `SectionItems` before the fallback list:

```tsx
if (section.kind === "content-table" && section.table) {
  return <ContentTable table={section.table} />;
}
```

- [ ] **Step 3: Keep visible FAQ and FAQPage schema synchronized**

Use one canonical FAQ source per page:

```text
page.faqs is the canonical FAQ source for schema.
section.kind === "faq" may omit section.faqItems and then render page.faqs.
If section.faqItems is provided, it must equal page.faqs for that page or the test should fail.
```

Update `PageFaqList` usage so a FAQ section can render page-level FAQs:

```tsx
function SectionItems({ section, pageFaqs = [] }: { section: PageSection; pageFaqs?: PageFAQ[] }) {
  const sectionFaqs = section.faqItems ?? pageFaqs;

  if (section.kind === "faq" && sectionFaqs.length) {
    return <PageFaqList faqs={sectionFaqs} />;
  }

  // existing cases
}
```

Update `PageSectionBlock` to pass `page.faqs`:

```tsx
function PageSectionBlock({
  section,
  index,
  pageFaqs = [],
}: {
  section: PageSection;
  index: number;
  pageFaqs?: PageFAQ[];
}) {
  // ...
  <SectionItems section={section} pageFaqs={pageFaqs} />
}
```

Do not add `ItemList` schema in this task. If a future task adds ItemList for domain records or service hierarchy, it must include implementation and tests.

- [ ] **Step 4: Add table CSS to both CSS files**

Add:

```css
.venture-site .stage3-content-table {
  overflow-x: auto;
  margin-top: 22px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 12px;
  background: #fff;
}

.venture-site .stage3-content-table__caption {
  margin: 0;
  padding: 16px 18px 0;
  color: #536078;
  font-size: 0.95rem;
}

.venture-site .stage3-content-table table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

.venture-site .stage3-content-table th,
.venture-site .stage3-content-table td {
  padding: 14px 16px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  text-align: left;
  vertical-align: top;
  font-size: 0.95rem;
  line-height: 1.55;
}

.venture-site .stage3-content-table thead th {
  background: rgba(15, 23, 42, 0.04);
  color: #172033;
  font-weight: 760;
}

.venture-site .stage3-content-table tbody th {
  color: #172033;
  font-weight: 760;
}

.venture-site .stage3-content-table tr:last-child th,
.venture-site .stage3-content-table tr:last-child td {
  border-bottom: 0;
}

@media (max-width: 640px) {
  .venture-site .stage3-content-table {
    border-radius: 8px;
  }

  .venture-site .stage3-content-table table {
    min-width: 620px;
  }
}
```

- [ ] **Step 5: Add tests**

Add static assertions:

```js
test('buyer-facing content tables are supported by the shared Venture page renderer', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const pageRenderer = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const css = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');

  assert.match(siteData, /type ContentTableColumn/);
  assert.match(siteData, /kind\?:[\s\S]*"content-table"/);
  assert.match(pageRenderer, /function ContentTable/);
  assert.match(pageRenderer, /stage3-content-table/);
  assert.match(pageRenderer, /pageFaqs/);
  assert.match(css, /\.venture-site \.stage3-content-table/);
});
```

- [ ] **Step 6: Verify**

Run:

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add togeto-next-js/src/components/venture-site/content/page-types.ts togeto-next-js/src/components/venture-site/content/index.ts togeto-next-js/src/components/venture-site/site-data.ts togeto-next-js/src/components/venture-site/pages/VenturePage.tsx togeto-next-js/src/components/venture-site/schema/structured-data.ts togeto-next-js/src/app/\(homes\)/home-6/venture-exact.css togeto-next-js/public/venture-static/venture-exact.css togeto-next-js/tests/venture-site-shell.test.mjs
git commit -m "feat: add Venture buyer content tables"
```

## Task 8: Add Home buyer proof section

**Files:**
- Create: `togeto-next-js/src/components/venture-site/home/HomeBuyerPathBlock.tsx`
- Modify: `togeto-next-js/src/components/venture-home/home-six-content.tsx`
- Modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- Modify: `togeto-next-js/public/venture-static/venture-exact.css`
- Modify: `togeto-next-js/tests/home-6.test.mjs`

- [ ] **Step 1: Create the Home buyer path component**

Create `HomeBuyerPathBlock.tsx`:

```tsx
import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

const buyerRows = [
  {
    challenge: "Unsure whether the project is PCBA or EMS",
    support: "Service structure explains board-level and system-level scope",
  },
  {
    challenge: "BOM has sourcing or lifecycle risk",
    support: "BOM review and approved-alternative discussion",
  },
  {
    challenge: "Testing requirements are unclear",
    support: "Quality & Testing explains what inputs are needed",
  },
  {
    challenge: "Multiple Venture domains appear online",
    support: "Official Websites, Domains & Company Entities explains which channels to use",
  },
  {
    challenge: "RFQ files are incomplete",
    support: "Resources and Request a Quote explain what to prepare",
  },
];

export function HomeBuyerPathBlock() {
  return (
    <section className="home-section home-section--white buyer-path" aria-labelledby="buyer-path-title">
      <div className="home-section__inner buyer-path__inner">
        <div className="buyer-path__intro">
          <p className="section-header__label">Buyer path</p>
          <h2 id="buyer-path-title">A clearer path from PCB files to assembled electronics</h2>
          <p>
            Venture Electronics supports project-based PCB Assembly, PCBA and EMS manufacturing
            discussions. Buyers often come with Gerber files, BOMs, incomplete sourcing questions,
            test requirements, or a product-level assembly goal. The website is organized to help
            them find the right starting point before sending an RFQ.
          </p>
          <div className="buyer-path__actions">
            <Link href={routes.services}>View services</Link>
            <Link href={routes.requestQuote}>Prepare RFQ</Link>
          </div>
        </div>

        <div className="buyer-path__table" role="table" aria-label="Buyer challenges and Venture support">
          {buyerRows.map((row) => (
            <div className="buyer-path__row" role="row" key={row.challenge}>
              <div role="cell">
                <span>Buyer challenge</span>
                <strong>{row.challenge}</strong>
              </div>
              <div role="cell">
                <span>Venture support</span>
                <p>{row.support}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Insert the component in Home**

In `home-six-content.tsx`, import:

```tsx
import { HomeBuyerPathBlock } from '@/components/venture-site/home/HomeBuyerPathBlock';
```

Render it after `CoreServicesBlock`:

```tsx
<HomeHero />
<CoreServicesBlock />
<HomeBuyerPathBlock />
<VentureIdentityBlock />
```

- [ ] **Step 3: Add CSS to both CSS files**

Add:

```css
.venture-site .buyer-path__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.venture-site .buyer-path__intro h2 {
  margin: 10px 0 16px;
  color: #101827;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.02;
}

.venture-site .buyer-path__intro p {
  color: #536078;
  line-height: 1.75;
}

.venture-site .buyer-path__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.venture-site .buyer-path__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  color: #101827;
  font-weight: 760;
}

.venture-site .buyer-path__table {
  display: grid;
  gap: 12px;
}

.venture-site .buyer-path__row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 18px;
  padding: 18px;
  border: 1px solid rgba(15, 23, 42, 0.09);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 14px 38px rgba(15, 23, 42, 0.06);
}

.venture-site .buyer-path__row span {
  display: block;
  margin-bottom: 6px;
  color: #6a7488;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.venture-site .buyer-path__row strong,
.venture-site .buyer-path__row p {
  margin: 0;
  color: #172033;
  line-height: 1.55;
}

@media (max-width: 860px) {
  .venture-site .buyer-path__inner,
  .venture-site .buyer-path__row {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Add tests**

Add to `tests/home-6.test.mjs`:

```js
test('Home includes buyer path proof content', async () => {
  const content = await readProjectFile('src/components/venture-home/home-six-content.tsx');
  const buyerBlock = await readProjectFile('src/components/venture-site/home/HomeBuyerPathBlock.tsx');

  assert.match(content, /HomeBuyerPathBlock/);
  assert.match(buyerBlock, /A clearer path from PCB files to assembled electronics/);
  assert.match(buyerBlock, /Unsure whether the project is PCBA or EMS/);
  assert.match(buyerBlock, /Multiple Venture domains appear online/);
  assert.match(buyerBlock, /RFQ files are incomplete/);
});
```

- [ ] **Step 5: Verify and commit**

```bash
cd togeto-next-js
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/home/HomeBuyerPathBlock.tsx src/components/venture-home/home-six-content.tsx src/app/\(homes\)/home-6/venture-exact.css public/venture-static/venture-exact.css tests/home-6.test.mjs
git commit -m "content: add Home buyer path proof section"
```

## Task 9: Expand About into a buyer-facing company page

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/about.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Replace the thin About hero and metadata copy**

Use:

```ts
about: {
  label: "About Venture Electronics",
  href: routes.about,
  eyebrow: "Company",
  title: "About Venture Electronics",
  role:
    "China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner for project-based electronics manufacturing.",
  summary:
    "Venture Electronics supports electronics buyers with PCB Manufacturing, PCB Assembly / PCBA, turnkey coordination, component sourcing, testing discussion, and EMS / Box Build support.",
  directAnswer: [
    "Venture Electronics organizes manufacturing discussions around real project files, BOM requirements, sourcing rules, inspection needs, and delivery expectations rather than fixed platform-style production promises.",
  ],
  // keep existing template, visual, related links, CTA fields
}
```

Metadata target:

```text
About Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner in China
```

Meta description target:

```text
Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner supporting PCBA, turnkey coordination, component sourcing, testing, and box build project review.
```

- [ ] **Step 2: Replace About sections with fuller buyer sections**

Use this complete `sections` array:

```ts
sections: [
  {
    title: "Company facts",
    body:
      "Use these facts for current public company context and inquiry routing.",
    table: {
      columns: [
        { key: "field", label: "Field" },
        { key: "wording", label: "Public wording" },
      ],
      rows: [
        { field: "Brand", wording: "Venture Electronics" },
        { field: "English entity", wording: "Venture Electronics Technology Ltd" },
        { field: "Current official main website", wording: "venture-mfg.com" },
        {
          field: "Main positioning",
          wording: "PCB Manufacturing, PCB Assembly and EMS Manufacturing partner",
        },
        { field: "Main inquiry email", wording: "info@venture-mfg.com" },
        { field: "Phone", wording: "+86 755 8529 6692" },
        { field: "Location", wording: "Shenzhen, Guangdong, China" },
        {
          field: "Official domain clarification",
          wording: "See Official Websites, Domains & Company Entities",
        },
      ],
    },
    kind: "content-table",
    featured: true,
  },
  {
    title: "Who we are",
    body:
      "Venture Electronics helps electronics buyers organize PCB Manufacturing, PCB Assembly / PCBA, component sourcing, testing, and EMS-related manufacturing requirements into a clear project scope. Many buyers begin with a board-level need such as PCB Assembly or Turnkey PCBA. Some projects later extend into EMS or Box Build when the scope includes enclosures, cable or harness requirements, system-level checks, labels, packaging, and delivery preparation. Venture reviews available project files, identifies missing inputs, clarifies sourcing and testing requirements, and helps define a manufacturable quotation scope before procurement or production starts.",
  },
  {
    title: "What Venture supports",
    body:
      "Venture service pages are organized by buyer need so sourcing, engineering, and quality teams can choose the right starting point.",
    table: {
      columns: [
        { key: "need", label: "Buyer need" },
        { key: "support", label: "Venture support" },
        { key: "notes", label: "Notes" },
      ],
      rows: [
        {
          need: "PCB Assembly / PCBA",
          support: "SMT, through-hole, mixed assembly, and turnkey discussion",
          notes: "Primary buyer-facing service entry",
        },
        {
          need: "PCB Manufacturing / Fabrication",
          support: "Bare-board requirements, Gerber, stack-up, finish, and material inputs",
          notes: "Supports the PCBA workflow",
        },
        {
          need: "Component Sourcing & BOM Review",
          support: "Availability, lifecycle, MOQ, and customer-approved alternatives",
          notes: "Alternatives require buyer approval",
        },
        {
          need: "DFM / DFA Review",
          support: "Manufacturing questions before procurement or assembly",
          notes: "Does not guarantee risk-free design",
        },
        {
          need: "Quality & Testing",
          support: "AOI, SPI, X-Ray, ICT/FCT, or functional testing as project requires",
          notes: "Scope depends on fixtures, firmware, standards, and acceptance criteria",
        },
        {
          need: "EMS & Box Build",
          support: "Enclosure, cable/harness, system checks, labels, packaging, and delivery support",
          notes: "For projects beyond board assembly",
        },
      ],
    },
    kind: "content-table",
  },
  {
    title: "How Venture works with buyers",
    items: [
      "Start with available files: send Gerber or ODB++, BOM, CPL, assembly drawings, quantity, delivery expectations, and testing requirements when available.",
      "Review manufacturing and sourcing questions: Venture reviews board files, BOM completeness, sourcing risks, DFM/DFA questions, approved alternatives, and project-specific requirements.",
      "Confirm the quotation scope: quotation scope should clarify supply model, approved alternatives, inspection or testing scope, packaging, delivery, and special requirements.",
      "Build, inspect, and document according to the agreed scope: production, inspection, testing, and shipment records should follow approved project requirements.",
      "Keep communication through confirmed official channels: use venture-mfg.com and confirmed Venture Electronics contact channels for project files and RFQ communication.",
    ],
    kind: "steps",
  },
  {
    title: "Project fit",
    table: {
      columns: [
        { key: "project", label: "Project type" },
        { key: "fit", label: "How to discuss fit" },
      ],
      rows: [
        {
          project: "Prototype / NPI",
          fit: "Use for early build review when files, BOM, and test expectations are ready enough to discuss scope.",
        },
        {
          project: "Low-volume or medium-volume PCBA",
          fit: "Use when assembly method, supply model, inspection, packaging, and delivery requirements can be reviewed by project.",
        },
        {
          project: "Turnkey PCBA",
          fit: "Use when sourcing rules, approved alternatives, and customer approval boundaries are clear.",
        },
        {
          project: "EMS / Box Build",
          fit: "Use when board assembly extends into enclosure, cable/harness, labeling, system testing, packaging, or delivery support.",
        },
      ],
    },
    kind: "content-table",
  },
  {
    title: "How quality scope is confirmed",
    body:
      "Quality planning depends on the product, board design, BOM, fixture availability, firmware, acceptance criteria, and records required by the buyer.",
    table: {
      columns: [
        { key: "topic", label: "Topic" },
        { key: "discussion", label: "How Venture discusses it" },
        { key: "buyer", label: "What buyers should confirm" },
      ],
      rows: [
        {
          topic: "Certificates",
          discussion: "Certificate details are confirmed by entity, scope, and validity.",
          buyer: "Required standard, supplier registration need, and document version.",
        },
        {
          topic: "Compliance requirements",
          discussion: "Compliance needs are discussed by project requirement and available evidence.",
          buyer: "Required document, test method, market, and acceptance criteria.",
        },
        {
          topic: "Schedule",
          discussion: "Schedule is reviewed by project.",
          buyer: "BOM status, quantity, test scope, approvals, and target delivery.",
        },
        {
          topic: "Quantity",
          discussion: "Quantity is reviewed by BOM, setup, material, and project scope.",
          buyer: "Target quantity, pilot needs, repeat-build expectation, and material constraints.",
        },
        {
          topic: "Testing",
          discussion: "Testing is planned according to agreed project scope.",
          buyer: "Fixture, firmware, acceptance criteria, and report requirement.",
        },
        {
          topic: "References",
          discussion: "Project references or customer names are used only when authorized.",
          buyer: "Whether public reference use is allowed for the project.",
        },
      ],
    },
    kind: "content-table",
  },
  {
    title: "Official websites, domains and company entity clarification",
    body:
      "Venture Electronics uses venture-mfg.com as its current official main website. Some older, vertical, redirected, reserved, or related-company domains may still appear online or in business records.",
    links: [
      {
        label: "View Official Websites, Domains & Company Entities",
        href: routes.officialResources,
      },
    ],
  },
];
```

- [ ] **Step 2a: Keep Chinese entity / Wei Chi wording out of public About until approved**

Do not add a public `Chinese entity` row or any Wei Chi relationship wording in this implementation pass. If the client later confirms the allowed public wording, add it as a separate scoped edit with matching Organization schema review.

- [ ] **Step 3: Use approved evidence images only**

Set About evidence images:

```ts
evidenceImages: [
  {
    title: "Production and buyer review context",
    images: ["factoryVisit03", "smtPickAndPlace"],
    afterSectionIndex: 2,
  },
  {
    title: "Inspection context",
    images: ["firstArticleInspection", "aoiInspection"],
    afterSectionIndex: 5,
  },
],
```

- [ ] **Step 4: Set About CTA toward RFQ preparation**

Use:

```ts
relatedLinks: [
  { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
  { label: "Services", href: routes.services },
  { label: "RFQ Checklist", href: routes.resources },
],
cta: { label: "Request a Quote", href: routes.requestQuote },
secondaryCta: { label: "View RFQ Checklist", href: routes.resources },
```

- [ ] **Step 5: Add tests**

```js
test('About page reads as a buyer-facing company page with claim boundaries', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /About Venture Electronics/);
  assert.match(siteData, /Company facts/);
  assert.match(siteData, /Who we are/);
  assert.match(siteData, /What Venture supports/);
  assert.match(siteData, /How Venture works with buyers/);
  assert.match(siteData, /Project fit/);
  assert.match(siteData, /How quality scope is confirmed/);
  assert.match(siteData, /View Official Websites, Domains & Company Entities/);
  assert.match(siteData, /View RFQ Checklist/);
  assert.doesNotMatch(siteData, /24\/7|24h response|No MOQ|Since 2010|IPC Class 3|IATF|BSCI/);
});
```

- [ ] **Step 6: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/content/pages/about.ts src/components/venture-site/site-data.ts tests/venture-site-shell.test.mjs
git commit -m "content: expand Venture About page"
```

## Task 10: Expand Services Overview with service hierarchy

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/services.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add service hierarchy explainer**

In `content/pages/services.ts`, add a featured section near the top of the Services page data:

```ts
{
  title: "How Venture services fit together",
  body:
    "PCB Assembly / PCBA is the main buyer entry point. Turnkey PCBA is a delivery model. EMS & Box Build is a higher manufacturing scope. PCB Fabrication, Component Sourcing, BOM / DFM Review, and Quality & Testing support the project around the agreed scope.",
  table: {
    columns: [
      { key: "goal", label: "Buyer goal" },
      { key: "start", label: "Recommended starting page" },
      { key: "support", label: "Supporting capability" },
      { key: "prepare", label: "What to prepare" },
    ],
    rows: [
      {
        goal: "Need assembled boards",
        start: "PCB Assembly / PCBA",
        support: "BOM / DFM / Testing",
        prepare: "Gerber or ODB++, BOM, CPL, assembly notes",
      },
      {
        goal: "Need supplier-managed sourcing",
        start: "Component Sourcing & BOM Review",
        support: "Customer-approved alternatives",
        prepare: "BOM rules, no-substitution parts, approved vendors",
      },
      {
        goal: "Need bare-board-to-assembly coordination",
        start: "PCB Fabrication Support",
        support: "Stack-up, material, finish, panelization",
        prepare: "Gerber, stack-up, material and finish requirements",
      },
      {
        goal: "Need product-level assembly",
        start: "EMS & Box Build",
        support: "System BOM, enclosure, cable/harness, FCT",
        prepare: "System files, assembly instructions, packaging requirements",
      },
      {
        goal: "Need quality planning",
        start: "Quality & Testing",
        support: "Test procedure, fixture, records",
        prepare: "Acceptance criteria, firmware, golden sample, report requirements",
      },
    ],
  },
  kind: "content-table",
  featured: true,
}
```

- [ ] **Step 2: Add consolidated legacy-topic explanation**

Add a section after the service hierarchy table:

```ts
{
  title: "What we intentionally keep consolidated",
  body:
    "Detailed material, stack-up, testing, engineering, and industry questions are handled through the relevant service pages, buyer resources, and quote-preparation guidance so buyers can find the right starting point without navigating many narrow pages.",
}
```

- [ ] **Step 3: Add tests**

```js
test('Services page explains service hierarchy without rebuilding thin legacy pages', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /How Venture services fit together/);
  assert.match(siteData, /PCB Assembly \/ PCBA is the main buyer entry point/);
  assert.match(siteData, /Turnkey PCBA is a delivery model/);
  assert.match(siteData, /EMS & Box Build is a higher manufacturing scope/);
  assert.match(siteData, /What we intentionally keep consolidated/);
  assert.doesNotMatch(siteData, /Home 01|service-details|Ocean Freight|Warehousing/);
});
```

- [ ] **Step 4: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/content/pages/services.ts src/components/venture-site/site-data.ts tests/venture-site-shell.test.mjs
git commit -m "content: clarify Venture service hierarchy"
```

## Task 11: Expand PCB Assembly / PCBA as the main conversion page

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/pcba.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add assembly capability table**

In `content/pages/pcba.ts`, add:

```ts
{
  title: "PCB Assembly capability review",
  body:
    "Use this table to prepare a practical PCB Assembly / PCBA discussion. Final scope, schedule, and testing depend on the project files, BOM availability, quantity, and agreed inspection requirements.",
  table: {
    columns: [
      { key: "area", label: "Capability area" },
      { key: "scope", label: "Typical review scope" },
      { key: "confirm", label: "Buyer should confirm" },
    ],
    rows: [
      {
        area: "Assembly types",
        scope: "SMT, through-hole, and mixed assembly",
        confirm: "Board design, component package, assembly drawing",
      },
      {
        area: "Component packages",
        scope: "Passive parts, BGA/QFN/QFP, connectors, terminals",
        confirm: "BOM, MPN, package, polarity notes",
      },
      {
        area: "Supply model",
        scope: "Consigned, partial-turnkey, and full-turnkey discussion",
        confirm: "Buyer-supplied parts and sourcing rules",
      },
      {
        area: "File requirements",
        scope: "Gerber or ODB++, BOM, CPL, assembly drawing",
        confirm: "Revision control and approved files",
      },
      {
        area: "Testing",
        scope: "AOI, X-Ray, ICT/FCT, or functional testing when applicable",
        confirm: "Fixture, firmware, test method, acceptance criteria",
      },
      {
        area: "Packaging",
        scope: "ESD, labels, shipment requirements",
        confirm: "Delivery destination and document needs",
      },
      {
        area: "Schedule",
        scope: "Reviewed by project",
        confirm: "BOM availability, complexity, test scope, and quantity",
      },
    ],
  },
  kind: "content-table",
  featured: true,
}
```

- [ ] **Step 2: Add delivery model and process sections**

Add:

```ts
{
  title: "PCB Assembly delivery models",
  items: [
    "Consigned assembly: buyer supplies selected or all parts and Venture reviews the assembly, inspection, and testing scope around the supplied materials.",
    "Partial turnkey: buyer and Venture split sourcing responsibility based on approved sourcing rules and project risk.",
    "Full turnkey discussion: Venture can review bare-board support, sourcing, assembly, inspection, testing, packaging, and delivery around approved files.",
  ],
  kind: "list",
},
{
  title: "Assembly process overview",
  items: [
    "File review: Gerber or ODB++, BOM, CPL, assembly drawing, quantity, and delivery expectations.",
    "BOM review: MPN completeness, lifecycle risk, MOQ, lead-time risk, and substitution restrictions.",
    "Material readiness: buyer-supplied, Venture-sourced, or mixed supply model confirmed before build.",
    "Assembly: SMT, through-hole, or mixed assembly according to approved files and process requirements.",
    "Inspection and testing: SPI, AOI, X-Ray, ICT/FCT, or functional testing when applicable and agreed.",
    "Packaging and delivery: ESD, labels, shipment documents, and destination requirements confirmed by project.",
  ],
  kind: "steps",
},
{
  title: "Schedule boundary",
  body:
    "PCBA schedule should be reviewed by project. Timing depends on BOM availability, part arrival, board complexity, quantity, process requirements, testing scope, and buyer approvals.",
}
```

- [ ] **Step 3: Use approved PCBA images**

Set or keep PCBA evidence:

```ts
evidenceImages: [
  {
    title: "PCB Assembly process context",
    images: ["smtPickAndPlace", "waveSoldering"],
    afterSectionIndex: 1,
  },
  {
    title: "Inspection context for PCBA review",
    images: ["aoiInspection", "firstArticleInspection"],
    afterSectionIndex: 4,
  },
],
```

- [ ] **Step 4: Add tests**

```js
test('PCBA page is a conservative buyer conversion page', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /PCB Assembly capability review/);
  assert.match(siteData, /PCB Assembly delivery models/);
  assert.match(siteData, /Schedule boundary/);
  assert.match(siteData, /Reviewed by project/);
  assert.doesNotMatch(siteData, /1-5 days|10-16 days|No MOQ|IPC Class 3/);
});
```

- [ ] **Step 5: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/content/pages/pcba.ts src/components/venture-site/site-data.ts tests/venture-site-shell.test.mjs
git commit -m "content: expand PCB Assembly conversion page"
```

## Task 12: Expand Quality & Testing into a richer quality hub

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/quality-testing.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add testing direct-answer boundary**

In `content/pages/quality-testing.ts`, keep copy project-specific:

```ts
summary:
  "Inspection and testing scope depends on the product, files, fixture, firmware, standards, acceptance criteria, sample plan, and records required for the project.",
directAnswer: [
  "Venture can discuss inspection and testing methods such as SPI, AOI, X-Ray, ICT/FCT, functional testing, FAI, and reliability or environmental testing when the project requirements and acceptance criteria are clear.",
],
```

- [ ] **Step 2: Add inspection and testing matrix**

Add a featured table:

```ts
{
  title: "Inspection and testing methods",
  body:
    "The right method depends on product risk, component package, test points, firmware, fixtures, standards, and buyer acceptance criteria.",
  table: {
    columns: [
      { key: "method", label: "Method / equipment" },
      { key: "checks", label: "What it helps check" },
      { key: "applies", label: "When it applies" },
      { key: "input", label: "Buyer input needed" },
    ],
    rows: [
      {
        method: "SPI",
        checks: "Solder paste volume and position",
        applies: "SMT process control",
        input: "Board and stencil requirements",
      },
      {
        method: "AOI",
        checks: "Component placement, polarity, and solder quality",
        applies: "SMT / assembly inspection",
        input: "Acceptance criteria if special",
      },
      {
        method: "Visual inspection",
        checks: "Assembly workmanship and visible issues",
        applies: "General assembly review",
        input: "Workmanship or cosmetic requirements",
      },
      {
        method: "X-Ray",
        checks: "Hidden solder joints and BGA/QFN risks",
        applies: "BGA, QFN, and hidden joints",
        input: "Package list and risk areas",
      },
      {
        method: "ICT / FCT",
        checks: "Electrical or functional verification",
        applies: "Project-specific testing",
        input: "Fixture, firmware, test procedure",
      },
      {
        method: "FAI",
        checks: "First article verification",
        applies: "New build / NPI",
        input: "Approved sample or criteria",
      },
      {
        method: "Reliability / environmental testing",
        checks: "Stress or environmental behavior",
        applies: "If required by project",
        input: "Standard, sample count, and conditions",
      },
    ],
  },
  kind: "content-table",
  featured: true,
}
```

- [ ] **Step 3: Add test input checklist and FAQ**

Add:

```ts
{
  title: "Test scope inputs buyers should prepare",
  items: [
    "Product revision and approved BOM.",
    "CPL / pick-and-place file and assembly drawing.",
    "Test plan, firmware, fixture, or golden sample when functional testing is needed.",
    "Acceptance criteria, sample plan, reporting requirements, and applicable standards.",
    "Special handling, programming, coating, marking, packaging, or shipment requirements.",
  ],
  kind: "checklist",
},
{
  title: "Records and traceability discussion",
  items: [
    "Inspection and test records should match the agreed project scope.",
    "Barcode, serial number, lot, or process traceability should be confirmed before production if required.",
    "Special report formats, customer forms, or external-lab requirements should be shared during RFQ review.",
  ],
  kind: "facts",
},
{
  title: "Quality & Testing FAQ",
  faqItems: [
    {
      question: "Can Venture provide X-Ray inspection?",
      answer:
        "X-Ray inspection can be discussed for BGA, QFN, hidden-joint, or other risk areas when the package list and acceptance requirements are clear.",
    },
    {
      question: "Does every project include ICT or FCT?",
      answer:
        "No. ICT, FCT, and functional testing depend on test points, fixture availability, firmware, procedure, quantity, and acceptance criteria.",
    },
    {
      question: "What should buyers provide for functional testing?",
      answer:
        "Provide the test procedure, firmware or configuration, fixture information, golden sample if available, and pass/fail criteria.",
    },
    {
      question: "Can reliability testing be arranged?",
      answer:
        "Reliability or environmental testing should be discussed by standard, condition, sample count, duration, and report requirement.",
    },
    {
      question: "What inspection records can be discussed?",
      answer:
        "Inspection and test records should follow the agreed production, inspection, testing, and shipment scope.",
    },
  ],
  kind: "faq",
}
```

- [ ] **Step 4: Use approved testing images**

Set Quality evidence:

```ts
evidenceImages: [
  {
    title: "Inspection and testing process context",
    images: ["firstArticleInspection", "aoiInspection", "finishedProductFunctionTest"],
    afterSectionIndex: 0,
  },
],
```

If the client supplies confirmed SPI, FCT fixture, FAI, or X-Ray images later, add them to `image-manifest.ts` and replace or extend this image group.

- [ ] **Step 5: Add tests**

```js
test('Quality page explains testing methods with project-specific boundaries', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /Inspection and testing methods/);
  assert.match(siteData, /SPI/);
  assert.match(siteData, /AOI/);
  assert.match(siteData, /X-Ray/);
  assert.match(siteData, /ICT \/ FCT/);
  assert.match(siteData, /Test scope inputs buyers should prepare/);
  assert.match(siteData, /Records and traceability discussion/);
  assert.doesNotMatch(siteData, /every project includes ICT|every project includes FCT|guaranteed testing/);
});
```

- [ ] **Step 6: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/content/pages/quality-testing.ts src/components/venture-site/site-data.ts tests/venture-site-shell.test.mjs
git commit -m "content: expand Quality and Testing page"
```

## Task 13: Add mobile navigation

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/site/Header.tsx`
- Modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- Modify: `togeto-next-js/public/venture-static/venture-exact.css`
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`

- [ ] **Step 1: Add mobile menu state and close-on-route behavior**

In `Header.tsx`, add:

```tsx
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
  setMobileOpen(false);
}, [pathname]);
```

- [ ] **Step 2: Add the menu toggle**

Place near the CTA:

```tsx
<button
  className="mobile-nav-toggle"
  type="button"
  aria-label="Open navigation menu"
  aria-expanded={mobileOpen}
  aria-controls="venture-mobile-nav"
  onClick={() => setMobileOpen((open) => !open)}
>
  <span aria-hidden="true" />
  <span aria-hidden="true" />
  <span aria-hidden="true" />
</button>
```

- [ ] **Step 3: Add mobile nav panel**

After the header inner content:

```tsx
<div
  className={`mobile-nav-panel${mobileOpen ? " mobile-nav-panel--open" : ""}`}
  id="venture-mobile-nav"
>
  <NavigationChildren items={navItems} />
  <CTAButton className="mobile-nav-panel__cta" href={routes.requestQuote}>
    Request a Quote
  </CTAButton>
</div>
```

- [ ] **Step 4: Add CSS**

Add to both CSS files:

```css
.venture-site .mobile-nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 999px;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.venture-site .mobile-nav-toggle span {
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
}

.venture-site .mobile-nav-panel {
  display: none;
}

@media (max-width: 820px) {
  .venture-site .mobile-nav-toggle {
    display: inline-flex;
  }

  .venture-site .mobile-nav-panel {
    display: none;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
    padding: 12px 20px 20px;
  }

  .venture-site .mobile-nav-panel--open {
    display: block;
  }

  .venture-site .mobile-nav-panel .nav-menu,
  .venture-site .mobile-nav-panel .nav-submenu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: 0;
    padding: 0;
    min-width: 0;
    background: transparent;
  }

  .venture-site .mobile-nav-panel .nav-menu a,
  .venture-site .mobile-nav-panel .nav-submenu a {
    display: block;
    padding: 10px 0;
  }

  .venture-site .mobile-nav-panel__cta {
    margin-top: 12px;
    width: 100%;
    justify-content: center;
  }
}
```

- [ ] **Step 5: Add mobile navigation tests**

Add to `tests/template-cleanup.test.mjs`:

```js
test('Venture header has a mobile navigation affordance when desktop nav is hidden', async () => {
  const header = await readProjectFile('src/components/venture-site/site/Header.tsx');
  const css = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');

  assert.match(header, /aria-label=["']Open navigation menu["']/);
  assert.match(header, /className=["']mobile-nav-toggle["']/);
  assert.match(header, /mobile-nav-panel/);
  assert.match(header, /mobile-nav-panel__cta/);
  assert.match(css, /\.venture-site \.mobile-nav-toggle/);
  assert.match(css, /\.venture-site \.mobile-nav-panel/);
});
```

- [ ] **Step 6: Run tests**

```bash
cd togeto-next-js
node --test tests/template-cleanup.test.mjs tests/venture-site-shell.test.mjs
```

Expected:

- Mobile nav test passes.
- Header active-state tests still pass.

- [ ] **Step 7: Browser check**

Check:

- `390x844`: header shows logo + menu affordance; RFQ is available in panel.
- `820px`: no overlapping nav text.
- `1440px`: desktop nav unchanged.

- [ ] **Step 8: Commit**

```bash
git add togeto-next-js/src/components/venture-site/site/Header.tsx togeto-next-js/src/app/\(homes\)/home-6/venture-exact.css togeto-next-js/public/venture-static/venture-exact.css togeto-next-js/tests/template-cleanup.test.mjs
git commit -m "feat: add Venture mobile navigation"
```

## Task 14: Expand P1 buyer-support pages with claim-safe content

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/content/pages/ems-box-build.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/component-sourcing.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/pcb-fabrication.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/resources.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/request-quote.ts`
- Modify: `togeto-next-js/src/components/venture-site/content/pages/contact.ts`
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts` as aggregate export only
- Modify: `togeto-next-js/src/components/venture-site/pages/RfqEmailComposer.tsx`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify: `togeto-next-js/tests/template-cleanup.test.mjs`

This task runs after the P0 content pages establish the tone. Keep it as a separate content PR unless the user explicitly asks to include all pages in one round.

- [ ] **Step 1: Expand EMS & Box Build**

Add a direct answer and scope table to `content/pages/ems-box-build.ts`:

```ts
{
  title: "EMS & Box Build scope",
  body:
    "EMS Manufacturing describes a broader electronics manufacturing scope around an assembled board. Box Build becomes relevant when the project includes enclosure, cable or harness, mechanical parts, system-level testing, labels, packaging, or delivery preparation.",
  table: {
    columns: [
      { key: "item", label: "EMS / Box Build item" },
      { key: "meaning", label: "What it means" },
      { key: "input", label: "Buyer input" },
    ],
    rows: [
      { item: "PCBA integration", meaning: "Assembled boards integrated into a larger unit", input: "Approved PCBA files and revision" },
      { item: "Enclosure / mechanical parts", meaning: "Housing, panels, fasteners, mechanical constraints", input: "Drawings and material notes" },
      { item: "Cable / harness", meaning: "Cable routing, connectors, harness drawings", input: "Cable drawings and connector specs" },
      { item: "System-level test", meaning: "Functional check of assembled unit", input: "Firmware, fixture, test procedure" },
      { item: "Label / serial / packaging", meaning: "Identification and shipment preparation", input: "Label rules and packaging standard" },
      { item: "Delivery support", meaning: "Shipment and document discussion", input: "Destination, Incoterms, documents" },
    ],
  },
  kind: "content-table",
}
```

Add fit wording:

```ts
{
  title: "When EMS & Box Build is a fit",
  body:
    "EMS & Box Build should be reviewed after the buyer can define the system BOM, mechanical requirements, cable or harness details, functional test expectations, and packaging needs. If these inputs are not ready, the project may first begin as a PCBA or prototype review.",
}
```

- [ ] **Step 2: Expand Component Sourcing, BOM & DFM Review**

Add a BOM risk table:

```ts
{
  title: "BOM risk review",
  body:
    "BOM and DFM review helps reduce sourcing and manufacturing risk before assembly. Venture can review BOM completeness, availability, MOQ, lifecycle risk, package questions, customer-approved alternatives, and DFM / DFA items that may affect fabrication, assembly, or testing.",
  table: {
    columns: [
      { key: "risk", label: "BOM risk" },
      { key: "why", label: "Why it matters" },
      { key: "action", label: "Buyer action" },
    ],
    rows: [
      { risk: "Missing MPN / manufacturer", why: "Hard to quote accurately", action: "Provide approved MPN and manufacturer" },
      { risk: "Obsolete or long-lead parts", why: "May delay sourcing", action: "Allow alternative review" },
      { risk: "No-substitution components", why: "Must be protected", action: "Mark clearly in BOM" },
      { risk: "Package mismatch", why: "Can affect assembly footprint", action: "Confirm footprint and package" },
      { risk: "MOQ constraints", why: "Affects cost and schedule", action: "Confirm acceptable quantity" },
      { risk: "Compliance requirement", why: "Affects sourcing and documentation", action: "State project requirement early" },
    ],
  },
  kind: "content-table",
}
```

Add alternative approval wording:

```ts
{
  title: "Alternative approval flow",
  body:
    "Venture Electronics does not replace parts without buyer approval. When availability or lifecycle risk appears, candidate alternatives may be discussed, but the buyer should approve any substitution before procurement or assembly.",
}
```

- [ ] **Step 3: Expand PCB Fabrication Support**

Add:

```ts
{
  title: "Fabrication inputs for assembly-ready boards",
  body:
    "PCB Fabrication Support helps align bare-board requirements with downstream assembly, inspection, testing, and delivery needs. It supports the PCBA and turnkey assembly workflow rather than acting as a separate low-cost PCB-only platform.",
  table: {
    columns: [
      { key: "input", label: "Input" },
      { key: "why", label: "Why it matters" },
    ],
    rows: [
      { input: "Gerber / ODB++", why: "Board production and review" },
      { input: "Stack-up", why: "Layer structure, impedance, manufacturability" },
      { input: "Material", why: "Thermal, mechanical, and electrical requirements" },
      { input: "Copper weight", why: "Current capacity and fabrication process" },
      { input: "Surface finish", why: "Solderability and shelf-life" },
      { input: "Panelization", why: "Assembly efficiency and handling" },
      { input: "Fiducials / test points", why: "SMT, AOI, and test planning" },
      { input: "Special requirements", why: "Via-in-pad, impedance, mask, marking, finish" },
    ],
  },
  kind: "content-table",
}
```

Add consolidation wording:

```ts
{
  title: "Why fabrication topics stay consolidated",
  body:
    "Material, stack-up, and process questions are handled as fabrication inputs and buyer guidance within the assembly-ready workflow, so buyers can prepare the right information without navigating separate narrow topic pages.",
}
```

- [ ] **Step 4: Expand Resources / FAQ / Quote Checklist**

Add RFQ checklist table to `content/pages/resources.ts`:

```ts
{
  title: "RFQ checklist",
  body:
    "A useful RFQ identifies current design files, BOM, quantity, delivery needs, sourcing restrictions, testing requirements, and customer-approval points.",
  table: {
    columns: [
      { key: "file", label: "File / information" },
      { key: "why", label: "Why it helps" },
    ],
    rows: [
      { file: "Gerber / ODB++", why: "Board fabrication and assembly review" },
      { file: "BOM", why: "Component sourcing and risk review" },
      { file: "CPL / XY file", why: "SMT placement preparation" },
      { file: "Assembly drawing", why: "Polarity, connector, and mechanical notes" },
      { file: "Quantity", why: "Material planning and quotation scope" },
      { file: "Testing requirement", why: "Fixture, firmware, and acceptance planning" },
      { file: "Packaging / delivery", why: "Labels, ESD, destination, and document needs" },
      { file: "NDA / large file note", why: "Safe transfer path before sharing sensitive files" },
    ],
  },
  kind: "content-table",
}
```

Add FAQ topics:

```ts
const resourcesFaqs = [
  {
    question: "What files are needed for a PCB Assembly quote?",
    answer: "Gerber or ODB++, BOM, CPL, assembly drawing, quantity, testing requirements, and delivery expectations are the main RFQ inputs.",
  },
  {
    question: "Can I start an RFQ without a complete test plan?",
    answer: "Yes, but Venture may ask for fixture, firmware, acceptance criteria, or test procedure details before confirming testing scope.",
  },
  {
    question: "Can Venture review BOM alternatives?",
    answer: "Alternatives can be discussed when sourcing or lifecycle risk appears, but buyer approval is required before substitution.",
  },
  {
    question: "How should I send large Gerber, BOM, or CPL packages?",
    answer: "Start by email and ask for the preferred transfer method before sending sensitive or large files.",
  },
  {
    question: "Does Venture provide fixed lead time?",
    answer: "Schedule is reviewed by project because BOM availability, complexity, quantity, and testing scope vary.",
  },
  {
    question: "What should be included for EMS / Box Build review?",
    answer: "System BOM, enclosure drawings, cable or harness details, functional test method, labels, packaging, and delivery requirements.",
  },
];
```

- [ ] **Step 5: Expand Request a Quote helper text**

Keep the mailto-first composer from Task 6. Ensure fields and labels match:

```text
Company
Contact person
Email
Project type
Quantity
Files available
Testing needs
Delivery destination
Message
```

Keep these button labels:

```text
Prepare RFQ Email
Copy RFQ Details
```

Add no-fake-upload wording near the form:

```text
This first-launch RFQ page does not upload files directly. Please email Gerber, BOM, CPL, drawings or other sensitive files through the confirmed Venture Electronics contact channel.
```

- [ ] **Step 6: Expand Contact routing**

Add a contact routing table:

```ts
{
  title: "Choose the right contact path",
  body:
    "Use Contact for company questions, official-channel verification, and early project discussion. Use Request a Quote when Gerber, BOM, CPL, drawings, quantity, or testing requirements are ready to send.",
  table: {
    columns: [
      { key: "type", label: "Inquiry type" },
      { key: "path", label: "Recommended path" },
    ],
    rows: [
      { type: "General company question", path: "Email Venture Electronics" },
      { type: "RFQ with files", path: "Request a Quote / email file package" },
      { type: "Large files or NDA", path: "Start by email and confirm transfer method" },
      { type: "Domain verification", path: "Official Websites, Domains & Company Entities page" },
      { type: "Testing or quality questions", path: "Share test plan or acceptance criteria" },
      { type: "EMS / Box Build discussion", path: "Share system BOM, enclosure, cable, and test information" },
    ],
  },
  kind: "content-table",
}
```

- [ ] **Step 7: Add P1 tests**

Add:

```js
test('P1 support pages include buyer-facing manufacturing content', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /EMS & Box Build scope/);
  assert.match(siteData, /BOM risk review/);
  assert.match(siteData, /Fabrication inputs for assembly-ready boards/);
  assert.match(siteData, /RFQ checklist/);
  assert.match(siteData, /Choose the right contact path/);
  assert.match(siteData, /Venture Electronics does not replace parts without buyer approval/);
  assert.match(siteData, /Schedule is reviewed by project/);
  assert.doesNotMatch(siteData, /24\/7|24h response|No MOQ for all projects|fixed lead time for every project|customer logos/);
});
```

- [ ] **Step 8: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/content/pages/ems-box-build.ts src/components/venture-site/content/pages/component-sourcing.ts src/components/venture-site/content/pages/pcb-fabrication.ts src/components/venture-site/content/pages/resources.ts src/components/venture-site/content/pages/request-quote.ts src/components/venture-site/content/pages/contact.ts src/components/venture-site/site-data.ts src/components/venture-site/pages/RfqEmailComposer.tsx tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
git commit -m "content: expand Venture buyer support pages"
```

## Task 15: Audit PageEnhancements after content expansion

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/pages/PageEnhancements.tsx`
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`
- Modify: construction-day devlog

- [ ] **Step 1: Review current enhancement injection rules**

Inspect `PageEnhancements.tsx` and list which homepage-style blocks are appended to inner pages:

```bash
cd togeto-next-js
sed -n '1,220p' src/components/venture-site/pages/PageEnhancements.tsx
```

Expected current risk areas:

- Services may duplicate `CoreServicesBlock` after service hierarchy is added.
- About may duplicate `VentureIdentityBlock` after the fuller About content is added.
- PCBA may duplicate `ProjectPathStepper` after PCBA process sections are added.
- Resources may duplicate `HomeFAQBlock` after Resources gets buyer FAQ content.

- [ ] **Step 2: Replace duplicate enhancement blocks with lighter routing CTAs**

Use a small CTA or no enhancement where the page body already covers the topic:

```tsx
const suppressedEnhancements = new Set([
  routes.services,
  routes.about,
  routes.resources,
]);
```

Rule:

- Keep PCBA `ProjectPathStepper` only if it does not duplicate the PCBA process section.
- Remove `CoreServicesBlock` from Services if the service hierarchy table is present.
- Remove `VentureIdentityBlock` from About if About already includes company facts and what Venture supports.
- Remove `HomeFAQBlock` from Resources if Resources already includes buyer FAQ.

- [ ] **Step 3: Add tests**

Add assertions that inner pages do not duplicate homepage enhancement blocks after content expansion:

```js
test('expanded inner pages avoid duplicate homepage enhancement blocks', async () => {
  const enhancements = await readProjectFile('src/components/venture-site/pages/PageEnhancements.tsx');

  assert.match(enhancements, /suppressedEnhancements|routes\.services/);
  assert.match(enhancements, /routes\.about/);
  assert.match(enhancements, /routes\.resources/);
});
```

- [ ] **Step 4: Visual QA**

Check:

- `/services/`: service hierarchy appears once and is not followed by a duplicate service card grid.
- `/about/`: About does not repeat the same company identity block from the homepage.
- `/services/pcb-assembly-pcba/`: project path is useful and not duplicating the process section.
- `/resources/`: FAQ content appears once.

- [ ] **Step 5: Verify and commit**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
git add src/components/venture-site/pages/PageEnhancements.tsx tests/venture-site-shell.test.mjs
git commit -m "refactor: prevent duplicate inner page enhancements"
```

## Task 16: Remove repo-level template directories

**Files:**
- Delete: `togeto-documentation/`
- Delete: `togeto-rtl-next-js/`
- Modify: `docs/devlog/<construction-day>.md`

- [ ] **Step 1: Confirm no build references**

Run:

```bash
rg -n "togeto-documentation|togeto-rtl-next-js" --glob '!node_modules/**' --glob '!.next/**'
```

Expected:

- Only docs/devlog/plans mention them.
- No build scripts or app imports rely on them.

- [ ] **Step 2: Delete directories**

```bash
git rm -r togeto-documentation togeto-rtl-next-js
```

- [ ] **Step 3: Verify**

```bash
rg -n "Welcome to Togeto|Togeto Nextjs Template|Transport & Logistics" --glob '!node_modules/**' --glob '!.next/**' .
```

Expected:

- Matches may remain only in this plan/devlog or old reviewed content packages, not active app source.

- [ ] **Step 4: Commit**

```bash
git add -u
git commit -m "chore: remove unused Togeto template directories"
```

## Task 17: Remove high-risk unused template data and components

**Files:**
- Delete candidates listed in File Map.
- Modify tests.

- [ ] **Step 1: Import graph check**

Run:

```bash
cd togeto-next-js
rg -n "@/data/(menu-data|service-data|faq-data|testimonial-data|portfolio-data|product-data)|@/components/(price|contact|wishlist|shop|portfolio)|contact-form-three" src
```

Expected:

- References are only from old demo views/components.
- No current `src/app` first-launch route imports them.

- [ ] **Step 2: Delete first batch**

Delete the highest-risk copy-bearing files:

```bash
git rm src/data/menu-data.ts
git rm src/data/service-data.tsx
git rm src/data/faq-data.ts
git rm -r src/components/price
git rm -r src/components/contact
git rm src/components/form/contact-form-three.tsx
```

- [ ] **Step 3: Fix broken old imports by deleting demo-only import chains**

If tests/build fail because old views import removed files, remove the demo-only views/components that reference them. Do not reintroduce old template data.

Likely candidates:

```bash
git rm -r src/views/service src/views/service-details src/views/price src/views/contact src/views/faq
git rm -r src/components/service src/components/faq
```

Only remove after `rg` confirms they are not imported by current Venture pages.

- [ ] **Step 4: Add denylist test for active source**

Add to `template-cleanup.test.mjs`:

```js
const retiredTemplatePaths = [
  'src/data/menu-data.ts',
  'src/data/service-data.tsx',
  'src/data/faq-data.ts',
  'src/components/price',
  'src/components/contact',
  'src/components/form/contact-form-three.tsx',
];

test('retired high-risk template files are removed from active source', async () => {
  const { access } = await import('node:fs/promises');
  const { constants } = await import('node:fs');

  for (const path of retiredTemplatePaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in active source`,
    );
  }
});
```

- [ ] **Step 5: Verify**

```bash
node --test tests/template-cleanup.test.mjs tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -u tests/template-cleanup.test.mjs
git commit -m "chore: remove high-risk unused template data"
```

## Task 18: Rename package and reduce template identity

**Files:**
- Modify: `togeto-next-js/package.json`
- Modify: `togeto-next-js/package-lock.json`

- [ ] **Step 1: Rename package**

Change:

```json
"name": "togeto-next-js"
```

to:

```json
"name": "venture-electronics-geo-site"
```

- [ ] **Step 2: Regenerate lock metadata**

Run:

```bash
cd togeto-next-js
npm install --package-lock-only
```

- [ ] **Step 3: Verify**

```bash
node -e "const p=require('./package.json'); if (p.name !== 'venture-electronics-geo-site') process.exit(1); console.log(p.name)"
node --test tests/template-cleanup.test.mjs tests/venture-site-shell.test.mjs
```

- [ ] **Step 4: Commit**

```bash
git add togeto-next-js/package.json togeto-next-js/package-lock.json
git commit -m "chore: rename package to Venture site"
```

## Task 19: Verify TypeScript/build quality after cleanup

**Files:**
- Modify: `togeto-next-js/next.config.mjs`
- Modify: tests as needed
- Modify: construction-day devlog

- [ ] **Step 1: Run standalone TypeScript check before changing config**

Run:

```bash
cd togeto-next-js
npx tsc --noEmit
```

Expected:

- If it passes, record pass in devlog.
- If it fails, record exact files and error types in devlog before touching `ignoreBuildErrors`.

- [ ] **Step 2: Run build with full logging**

```bash
cd togeto-next-js
npm run build -- --debug 2>&1 | tee /tmp/venture-next-build.log
```

Expected:

- If build passes, record pass and build duration in devlog.
- If build fails or stalls, record last visible output, elapsed time, and whether the failure is from old template surfaces, TypeScript, CSS chunks, or Next build infrastructure.

- [ ] **Step 3: Try disabling ignored TypeScript errors only after evidence is clean**

If `npx tsc --noEmit` and `npm run build -- --debug` both pass after template cleanup, change:

```js
typescript: {
  ignoreBuildErrors: true,
},
```

to:

```js
typescript: {
  ignoreBuildErrors: false,
},
```

Then run:

```bash
npx tsc --noEmit
npm run build -- --debug
```

If either fails, keep `ignoreBuildErrors: true` and document the exact blocker. Do not hide a new failure introduced by the Venture content work.

- [ ] **Step 4: Commit**

```bash
git add togeto-next-js/next.config.mjs
git commit -m "chore: enable TypeScript build checks"
```

## Task 20: P2 CSS/theme extraction plan

**Files:**
- P2 modify: `togeto-next-js/src/app/layout.tsx`
- P2 modify: `togeto-next-js/src/app/(homes)/home-6/venture-exact.css`
- P2 modify: `togeto-next-js/public/venture-static/venture-exact.css`
- P2 delete only after replacement: unused sections of `public/assets/css/theme-main.css`

This is not P0. Do not remove `theme-main.css` during the same PR as source cleanup unless production screenshots prove every route remains styled.

- [ ] **Step 1: Keep current CSS dependency during P0**

No implementation change.

- [ ] **Step 2: After P0, collect used class list**

Use browser screenshots and HTML route output to identify which template utility classes still appear:

```bash
rg -o 'class="[^"]+"' /tmp/venture-*.html | sort | uniq > /tmp/venture-classes.txt
```

- [ ] **Step 3: Extract Venture-owned CSS**

Move only required styles into:

```text
public/venture-static/venture-exact.css
public/venture-static/venture-overrides.css
```

- [ ] **Step 4: Remove `theme-main.css` only after visual QA**

Acceptance criteria:

- Desktop and mobile screenshots for `/`, `/official-resources`, `/services`, `/request-a-quote`, `/contact`.
- No missing fonts/icons/layout.
- Build passes.

## Task 21: Full QA and subagent review

**Files:**
- Modify: construction-day devlog
- No source change unless review findings require fixes.

- [ ] **Step 1: Automated tests**

```bash
cd togeto-next-js
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs
npm run build
git diff --check
```

- [ ] **Step 2: Route smoke**

Start real Next preview:

```bash
npm run dev -- --port 3002 --hostname 127.0.0.1
```

Smoke:

```bash
curl --noproxy '*' -I --max-time 300 http://127.0.0.1:3002/
curl --noproxy '*' -I --max-time 300 http://127.0.0.1:3002/official-resources
curl --noproxy '*' -I --max-time 300 http://127.0.0.1:3002/request-a-quote
curl --noproxy '*' -I --max-time 300 http://127.0.0.1:3002/contact
curl --noproxy '*' -I --max-time 300 http://127.0.0.1:3002/blog
```

Expected:

- Approved pages return `200`.
- Disabled template routes redirect to `/`.

- [ ] **Step 3: Light performance gate**

Record these signals in the construction devlog for every PR:

- `npm run build` duration and pass/fail result.
- Route timing for `/`, `/official-resources`, `/about`, `/services`, `/request-a-quote`, and `/contact`.
- Any Next image, LCP, bundle, or route compilation warnings seen during dev/build.
- Whether the PR adds any new `priority` image and why.
- Desktop and mobile screenshot paths for the required visual QA routes.

For PR5, also record whether `theme-main.css` remains loaded, which Venture CSS/classes were extracted, and whether any visual regressions appeared after CSS/runtime cleanup.

- [ ] **Step 4: Browser visual QA**

Check:

- Desktop `1440x1000`: `/`, `/official-resources`, `/about`, `/services`, `/request-a-quote`, `/contact`.
- Mobile `390x844`: same routes.
- Confirm mobile menu works.
- Confirm no text overlap.
- Confirm Quick Answer is visible early on Official Resources.
- Confirm no old Togeto/logistics/pricing/shop/portfolio UI appears.

- [ ] **Step 5: Subagent review**

Ask subagent to review:

- Template artifact cleanup completeness.
- Mobile navigation accessibility and responsive behavior.
- Official Resources visible copy: human-first, no internal AI/search phrasing.
- Schema unchanged except intentional updates.
- Build/test risk after removing old code.

- [ ] **Step 6: Address review findings and record devlog**

Record:

- What changed.
- Tests run.
- Screenshots/URLs checked.
- Build and route timing results.
- Dev/build image or LCP warnings.
- Remaining risks.

## P1 Content Expansion Backlog

After Tasks 7-12 establish the content density and tone, Task 14 expands the next page group with the same table-driven, buyer-facing, claim-bounded pattern.

| Page | Add | Table / module | Image guidance | Public wording boundary |
| --- | --- | --- | --- | --- |
| EMS & Box Build | Explain when a project moves beyond PCBA, system BOM needs, enclosure/cable/harness/labels/packaging/system-level testing | EMS scope matrix and project maturity checklist | Use `boxBuildAssembly` or `finishedProductFunctionTest` if visually appropriate | Do not overclaim enclosure design, system integration, or unconfirmed final-product capability |
| Component Sourcing, BOM & DFM | Add BOM risk review, alternative approval flow, DFM/DFA question list, and “what Venture will not do” | BOM risk table and approved-alternative process | Component or PCB close-up only if available and approved | No unauthorized substitution, no “all parts available,” no procurement before scope confirmation |
| PCB Fabrication Support | Add Gerber/ODB++, stack-up, material, thickness, copper, impedance, finish, panelization, assembly constraints | Fabrication input table | PCB close-up or panel image | Keep materials/stack-up consolidated; do not create thin SEO material pages |
| Resources / RFQ Prep | Add RFQ checklist, file preparation guide, NDA / large-file note, testing requirements checklist, EMS extra files | RFQ checklist table and buyer FAQ | Catalog cover or no image | Link only confirmed catalog PDFs |
| Request a Quote | Keep mailto-first helper form, add Copy RFQ Details if useful | RFQ preparation form/table | No image needed | No fake submit, no fake upload, no claim that files are submitted through website |
| Contact | Add inquiry type, correct channel, and file-sharing guidance | Contact routing table | Map/factory exterior only if approved | No unconfirmed social media or inactive domains |

## Acceptance Criteria

- Public Venture pages still render and use current Venture header/footer.
- No public route exposes Togeto, logistics template copy, shop/cart/portfolio/blog demo content, fake forms, or old service-details links.
- Mobile users can open navigation below `820px`.
- Official Resources page reads like a buyer verification page, not an internal AI/domain fact dump.
- Visible copy does not mention AI/search engines as the reason the page exists.
- Official Websites, Domains & Company Entities appears under About, not as a standalone top-level nav item.
- Contact is available as a top-level navigation item.
- Request a Quote remains a prominent action and is available in the mobile menu.
- `/request-a-quote/` uses a mailto-first RFQ composer that prepares an email to `info@venture-mfg.com`.
- RFQ copy clearly tells users to attach Gerber, BOM, CPL, drawings, and related files in their email client.
- About includes company facts, supported service scope, buyer workflow, project fit, quality scope guidance, approved images, and Official Websites, Domains & Company Entities teaser.
- Services Overview explains the service hierarchy: PCBA as main entry, turnkey as delivery model, EMS/Box Build as higher scope, fabrication/sourcing/testing as supporting capabilities.
- PCB Assembly / PCBA includes capability review, delivery models, RFQ inputs, assembly process, testing dependency, and project-based schedule boundary.
- Quality & Testing includes inspection/testing matrix, buyer input checklist, records/traceability discussion, FAQ, and approved evidence images.
- Public content does not copy old-site high-risk claims such as fixed lead times, No MOQ, 24/7 support, customer logos, unconfirmed certifications, or sensitive-industry claims.
- Home includes the buyer path section explaining PCBA/EMS fit, BOM risk, testing preparation, domain verification, and RFQ readiness.
- P1 pages include EMS scope, BOM risk, fabrication inputs, RFQ checklist, mailto helper wording, and contact routing when that PR is executed.
- JSON-LD still carries machine-readable Organization/WebSite/WebPage/Breadcrumb/FAQ data. Do not claim ItemList unless it is implemented with tests.
- FAQPage schema reflects visible FAQ content only, with `page.faqs` as the canonical source.
- Organization schema does not output historical/reserved/non-owned domains in `sameAs`, and does not output unconfirmed certificates, capacity, employee count, founding year, reviews, ratings, or customer logos.
- `CONTACT_CHANNELS.rfqEmail` is the only RFQ recipient source used by RFQ, Contact, Official Domains, Footer, schema, and tests.
- Wei Chi / Chinese entity relationship does not appear in public visible copy, schema, footer, privacy, or RFQ until client confirmation.
- Each PR records build duration, route timing, Next image/LCP warnings, required desktop/mobile screenshots, and any new priority-image decision in devlog.
- `node --test ...`, `npm run build`, route smoke, browser visual QA, and subagent review all pass.

## Recommended PR Shape

Decision: execute the full master plan, but ship it as five sequential PRs rather than one large risky PR. This keeps the complete Tasks 0-21 scope while preserving review, visual QA, and rollback boundaries.

1. `fix: stabilize Venture public facts, RFQ, official domains, and mobile nav`
   - Tasks 0, 0A, 1-6 and Task 13
   - Low deletion risk
   - Customer-visible improvement, source-authority cleanup, and buyer-page source map gate
   - Gate: Task 21 QA/performance/subagent review before merge

2. `content: expand Venture buyer-facing core pages`
   - Tasks 7-12 and Task 15
   - Adds reusable content tables and expands Home, About, Services, PCBA, and Quality & Testing
   - Audits PageEnhancements after content expansion
   - Keeps old-site risky claims out of public copy
   - Gate: Task 21 QA/performance/subagent review before merge

2A. `content: deepen Venture Services and Quality pages`
   - Follow-up plan: `docs/venture-content/2026-06-29-services-quality-content-depth-patch-plan.md`
   - Expands Services Overview from a service hierarchy page into a buyer service-selection guide
   - Expands Quality & Testing from a method overview into a lifecycle/method/input/records/boundary quality planning page
   - Keeps the existing IA, schema builder, renderer, Official Websites placement, and RFQ/contact facts intact
   - Gate: content coverage tests, build, desktop/mobile visual QA, and subagent review before merge

3. `content: expand Venture buyer-support pages`
   - Task 14
   - Expands EMS, Component Sourcing / BOM / DFM, Fabrication Support, Resources, Request a Quote, and Contact
   - Keep as separate PR if the P0 content PR needs visual review first
   - Gate: Task 21 QA/performance/subagent review before merge

4. `chore: remove remaining Togeto template artifacts`
   - Tasks 16-19
   - Bigger deletion/build risk
   - Engineering cleanliness and maintenance improvement
   - Gate: Task 21 QA/performance/subagent review before merge

5. `perf: extract Venture-owned CSS and reduce template runtime weight`
   - Task 20
   - CSS/runtime cleanup after page structure is stable
   - Gate: Task 21 QA/performance/subagent review before merge

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | Not run | Not required for this plan review. |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | Not run | Not required before PR1 construction. |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR | 4 issues folded into plan: source-map gate, type-migration boundary, existing-test reconciliation, and light performance gate; 0 critical gaps. |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | Not run | Visual review is required after implementation through Task 21 screenshots/subagent review. |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | Not run | Not required for this plan stage. |

- **VERDICT:** ENG CLEARED — ready to implement PR1 of the five-PR plan.
NO UNRESOLVED DECISIONS
