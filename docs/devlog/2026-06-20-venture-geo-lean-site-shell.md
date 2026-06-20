# 2026-06-20 Venture GEO Lean Site Shell Devlog

## 目标

在 `JHSHdhb/venture-web-temp` 中完成 Venture GEO 新站第一轮施工改造，并提交 PR 供人工审核。

本轮目标不是完整上线文案，而是把模板 demo 收敛成符合客户已确认 HTML sitemap 的轻量官网骨架：

- `/` 改为 Venture Home 06。
- `/home-6` 作为重复首页重定向到 `/`。
- Header / Footer 使用 Venture 统一导航与页脚。
- 公开 route 收敛到首发 sitemap。
- 新建共享内页模板与核心页面骨架。
- 建立一个可视觉审核的 PCBA 样板页。
- 禁用无关模板 demo route。
- 保证测试、lint、build 通过。

## 前置读取和版本确认

### 目标 Repo

- Repo: `JHSHdhb/venture-web-temp`
- Local path: `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-web-temp`
- Branch start: `main`
- Latest checked commit: `4fe47f4 v2`
- `origin/main` matched local `main` at start.
- Work branch: `feat/venture-geo-lean-site-shell`

### Enterprise Brain Repo

- Repo: `yslin1126/zbot-enterprise-brain-venture`
- Local path: `/Users/nianliu/Desktop/Zbot/GithubRepo/zbot-enterprise-brain-venture`
- Latest checked commit: `6e31881 Integrate Venture delta sources`

### Website Workspace Repo

- Repo: `yslin1126/venture-geo-website-workspace`
- Local path: `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-geo-website-workspace`
- Latest checked commit: `d855c54 Log Smartlead categorization follow-up`

### Highest-priority sitemap file

Read completely:

- `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-geo-website-workspace/04_website-planning/Venture_GEO_Sitemap_Client_Presentation_v2.html`

Key decisions from this file:

- First release should be a clear official website trunk plus sustainable content entry.
- PCBA / Turnkey PCBA is the primary service path.
- EMS & Box Build is the higher-level manufacturing support path.
- Component Sourcing / BOM / DFM, PCB Fabrication, and Quality / Testing are supporting capabilities.
- Quality & Testing should be a single page, not a subdirectory of testing pages.
- Old site long-tail material pages, stack-up pages, testing subpages, industry pages, and old blog archive should not be bulk migrated.
- Resources should contain FAQ, quote checklist, downloads/catalog placeholder, and Blog / Insights entry.

### Enterprise Brain files read

Read as claim and content boundary sources:

- `.enterprise-brain/agent-contexts.json`
- `.enterprise-brain/ui-index.json`
- `wiki/zh-CN/phase2/company-canon/company-overview.md`
- `wiki/zh-CN/phase2/company-canon/brand-and-official-websites.md`
- `wiki/zh-CN/phase2/company-canon/business-positioning.md`
- `wiki/zh-CN/phase2/company-canon/contact-and-channels.md`
- `wiki/zh-CN/phase2/company-canon/confirmed-company-facts.md`
- `wiki/zh-CN/phase2/company-canon/company-evidence-gaps.md`
- `wiki/zh-CN/phase2/product-service-lines/pcba-turnkey-assembly/pcba-basic-info.md`
- `wiki/zh-CN/phase2/product-service-lines/pcba-turnkey-assembly/pcba-specs-data.md`
- `wiki/zh-CN/phase2/product-service-lines/pcba-turnkey-assembly/pcba-process-smt-through-hole-reflow.md`
- `wiki/zh-CN/phase2/product-service-lines/pcba-turnkey-assembly/pcba-entity-vocabulary.md`
- `wiki/zh-CN/phase2/product-service-lines/ems-box-build/ems-basic-info.md`
- `wiki/zh-CN/phase2/product-service-lines/ems-box-build/ems-specs-data.md`
- `wiki/zh-CN/phase2/product-service-lines/ems-box-build/ems-npi-to-volume-production.md`
- `wiki/zh-CN/phase2/product-service-lines/ems-box-build/ems-entity-vocabulary.md`
- `wiki/zh-CN/phase2/product-service-lines/component-sourcing-supply-chain/component-sourcing-basic-info.md`
- `wiki/zh-CN/phase2/product-service-lines/component-sourcing-supply-chain/bom-review-alternatives.md`
- `wiki/zh-CN/phase2/product-service-lines/pcb-fabrication/pcb-fabrication-basic-info.md`
- `wiki/zh-CN/phase2/product-service-lines/pcb-fabrication/pcb-fabrication-specs-data.md`
- `wiki/zh-CN/phase2/product-service-lines/pcb-fabrication/pcb-materials-stack-up.md`
- `wiki/zh-CN/phase2/product-service-lines/pcb-fabrication/pcb-fabrication-entity-vocabulary.md`
- `wiki/zh-CN/phase2/product-service-lines/quality-testing-inspection/quality-basic-info.md`
- `wiki/zh-CN/phase2/product-service-lines/quality-testing-inspection/testing-inspection-capabilities.md`
- `wiki/zh-CN/phase2/product-service-lines/quality-testing-inspection/reliability-testing.md`
- `wiki/zh-CN/phase2/product-service-lines/quality-testing-inspection/equipment-process.md`
- `wiki/zh-CN/phase2/manufacturing-delivery/quality-traceability.md`
- `wiki/zh-CN/phase2/market-external-research/ems-pcba-service-hierarchy.md`
- `wiki/zh-CN/phase2/market-external-research/pcb-pcba-ems-buyer-understanding.md`

## Claim 边界

本轮所有页面文案按以下边界处理：

- 可以使用 `Venture Electronics`、`Venture Electronics Technology Ltd`、`威驰科技有限公司`。
- 可以使用 `venture-mfg.com` 为当前主站。
- 可以使用 `info@venture-mfg.com`、`+86 755 8529 6692`、`+86 755 2397 7408` 和深圳公开地址。
- 可以表达 Venture 是 China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner。
- 可以表达 PCBA / Turnkey PCBA、EMS & Box Build、Component Sourcing、BOM Review、DFM/DFA、Quality & Testing 为服务结构。
- 不使用固定响应时间、固定交期、No MOQ、all in-house、pure factory、100% testing、zero defect、完整追溯系统等强承诺。
- 不使用未确认的员工数、工厂面积、产线数量、产能范围、客户 logo、客户案例。
- 不把合作工厂证书写成 Venture 自有资质。
- 不写医疗认证、medical-grade、Aerospace / Defense 等高风险行业定位。
- LinkedIn、Facebook、YouTube、WhatsApp、微信等官方渠道未最终确认前不作为稳定官方渠道展示。

## 本轮公开 Route

```text
/
/services/
/services/pcb-assembly-pcba/
/services/ems-box-build/
/services/component-sourcing-bom-dfm-review/
/services/pcb-fabrication-support/
/quality-testing/
/about/
/official-resources/
/resources/
/contact/
/request-a-quote/
/insights/
/privacy-policy/
/terms/
/sitemap/
/thank-you/
```

## 禁用的 Demo Route

通过 `next.config.mjs` redirect 到 `/`，并删除对应 App Router page 入口，避免旧 demo 继续作为可构建公开页面出现。模板 `src/views/**` 源码保留，降低后续回退和借用局部组件的风险。

```text
/home-1
/home-2
/home-3
/home-4
/home-5
/home-one-page
/home-2-one-page
/home-3-one-page
/home-4-one-page
/home-5-one-page
/service
/service-details/:path*
/portfolio
/portfolio-details/:path*
/team
/team-details/:path*
/shop
/shop-sidebar
/shop-details/:path*
/cart
/checkout
/compare
/wishlist
/price
/testimonial
/faq
/blog
/blog-left-sidebar
/blog-right-sidebar
/blog-details-left-sidebar/:path*
/blog-details-right-sidebar/:path*
```

## 实施顺序

1. 读取 source-of-truth HTML sitemap 和 Enterprise Brain。
2. 检查三仓库最新 commit。
3. 从 `main` 创建 `feat/venture-geo-lean-site-shell`。
4. 先写 route contract tests，确认红灯：
   - `/` 仍是 `home-1`。
   - `/home-6` 仍是独立页面。
   - approved routes 缺页面文件。
   - `site-data.ts` 仍暴露过宽 route。
   - `next.config.mjs` 没有 demo route redirect。
5. 收敛 `site-data.ts` 为首发 sitemap 单一数据源。
6. 新增共享 Venture shell 和内页 renderer。
7. 创建所有 approved route page。
8. 将首页入口从 `home-1` 切到 Venture Home 06。
9. 将 `/home-6` 设为 redirect 到 `/`。
10. 将旧 FooterOne 替换为 Venture Footer。
11. 更新 Home 06 中指向被禁用深层路由的链接。
12. 将明显超出 Brain claim 边界的首页能力措辞改为谨慎表达。
13. 将 newsletter-style final CTA 改为 RFQ CTA，避免暗示邮件/CRM 已接入。
14. 配置 demo route redirects。
15. 删除无关 demo 的 App Router page 入口，保留 template view 源码。
16. 发现 Next 16 默认 Turbopack build 在本地 `next start` 下没有正确服务 CSS 静态块，切换 `npm run build` 到 `next build --webpack` 并禁用 webpack build worker，保证预览样式可验证。
17. 记录 devlog。
18. 执行验证、提交、push、开 PR。

## 新增 / 复用组件

### 复用

- `Header`
- `Footer`
- `CTAButton`
- Home 06 现有 section components
- `Wrapper`
- `TopBarArea`
- GSAP / WOW 相关 template effect hooks

### 新增

- `src/components/venture-site/site/VentureShell.tsx`
- `src/components/venture-site/pages/VenturePage.tsx`
- `src/components/venture-site/pages/RoutePage.tsx`
- `src/components/venture-site/pages/page-metadata.ts`
- `src/utils/resolve-wow-constructor.mjs`

### 小修

- `Header` 增加 `variant="solid"`，内页 shell 使用实色 Header，首页仍保留 Home 06 透明 glass Header。
- `Wrapper` 使用 `resolveWowConstructor` 兼容 WOW.js 不同导出形态，避免动画初始化因为模块包装形态变化而失效。

## TDD 记录

新增 / 更新测试：

- `tests/home-6.test.mjs`
- `tests/venture-site-shell.test.mjs`
- `tests/resolve-wow-constructor.test.mjs`

Red run:

```bash
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs
```

初始结果：

- 6 tests, 1 pass, 5 fail。
- Failures 对应预期问题：root home、home-6 redirect、missing route files、oversized site data、missing demo redirects。

Green run:

```bash
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs
```

当前结果：

- 12 tests, 12 pass。

## 本轮没有做

- 没有批量写正式英文长文案。
- 没有 scrape 或迁移旧站 Blog。
- 没有创建行业页、材料页、stack-up 页或测试子页。
- 没有做旧站 URL redirect 全量映射。
- 没有接入 CRM、邮件自动化、Supabase、上传系统或复杂 CMS。
- 没有修改 Enterprise Brain Repo。
- 没有合并 PR。

## 当前 Placeholder 说明

所有内页使用 public-safe placeholder skeleton：

- 目的：给客户和内部团队审页面范围、导航、布局、claim 边界。
- 不代表最终英文文案。
- 不代表最终 legal copy。
- 不代表已确认 capability table、设备清单、测试覆盖、案例、证书范围或官方社媒。

## SOP 可沉淀点

1. 新站第一轮施工不要直接迁移旧站导航。
2. 先用客户确认 sitemap 定 route contract，再用 Enterprise Brain 定 claim boundary。
3. 先写 route contract tests，再改页面。
4. 对模板站，优先禁用公开 route，不急着删除模板源码。
5. 首页如果已经有确认视觉方向，只做入口、metadata、header/footer 和 claim 边界的小修。
6. 内页第一轮用共享 renderer，避免复制大量 UI。
7. PCBA 样板页优先做成视觉审核基准，其他页先轻量 skeleton。
8. 对未确认能力，用 `project-dependent`、`as required`、`to be confirmed` 类表达，不写强承诺。
9. PR 描述必须列出公开 route、禁用 route、placeholder 边界和下一阶段建议。
10. 视觉验收时如果页面开始像“卡片模板生成器”，优先把内页改成官网内容流：开放式 hero、分栏正文、细线列表、少量真正需要框住的工具区。
11. 买模板、买组件或迁移模板前，先做组件用途分析，不要按模板页面原样搬运。
12. 每个模板组件都要标注：解决什么页面任务、适合哪类客户内容、需要哪些真实素材、有哪些 claim 风险。
13. 先根据客户 sitemap 和内容资产分配页面任务，再决定组件落点。组件服务内容，不让内容迁就组件。
14. 首页级视觉组件要谨慎下沉到内页，优先复用局部结构、视觉语言和交互节奏，而不是复制整段 landing page。
15. 组件复用应做轻量参数化，例如标题、CTA、图片、列表和链接，避免为了一个页面复制多个近似组件。
16. 模板采购评估不只看首屏好不好看，还要看是否有可拆分的服务网格、流程、FAQ、资源 CTA、案例/图片带、能力证据等模块。

## 视觉验收反馈修正

用户在第一轮本地视觉验收中指出三个问题：

- Header 里需要有独立 `Contact` 页面入口，同时右侧主按钮仍应是 `Request a Quote` 动作。
- Codex 新增内页的卡片结构过重，应参考 Togeto 模板和常规官网结构，减少通用卡片堆叠。
- 每个公开内页都需要专属图片位，不能只有文字和卡片。

本次反馈修正：

- 新增并公开 `/contact/` route，作为公司联系信息和询盘路径说明页。
- Header 普通导航保留 `Contact`，右侧主 CTA 恢复为 `Request a Quote`，指向 `/request-a-quote/`。
- Footer 联系区同时保留电话、邮箱和 `Request a Quote` 动作入口。
- `/request-a-quote/` 继续作为 RFQ 动作页，表单为视觉 placeholder，不接 CRM、邮件、上传或数据库。
- 移除 PCBA 页顶部的 `Sample service page` / `visual sample` 这类 Codex 痕迹，改成更像正式官网的 service copy。
- 用 `design-taste-frontend` skill 做内页结构复盘：降低卡片密度，移除 section 编号和重复小标签，把 stage3 内页从“卡片堆”改为开放式内容流。
- PCBA 样板页现在采用大标题 hero、正文分栏、细线列表和少量必要表单框架，卡片只留给真正的工具型 RFQ placeholder。
- 为 `PageData` 增加 `visual` 字段，并在 `VenturePage` hero 右侧渲染专属图片位。
- 已给所有首发内页配置首屏图片位：Services、PCBA、EMS、Component Sourcing、PCB Fabrication Support、Quality & Testing、About、Official Resources、Resources、Contact、Request a Quote、Insights、Privacy Policy、Terms、Sitemap、Thank You。
- 新增 route contract test，确保 approved page data entries 都定义 `visual: pageVisuals.*`，防止后续新增页面漏掉图片位。

## 首页组件复用增强

用户第二轮视觉验收要求：在不大改的前提下，把设计师已经做好的首页漂亮组件迁移到合适内页，并使用 `design-taste-frontend` 做适配判断。

本轮设计判断：

- Redesign preserve，不重做首页，不推翻当前内页轻量骨架。
- Design variance 4，motion 3，density 5。
- 目标是让内页吸收首页视觉语言，但避免每一页都变成首页级 landing page。

本次复用落点：

- `/services`：复用 `CoreServicesBlock`，作为服务入口网格。
- `/services/pcb-assembly-pcba`：复用 `ProjectPathStepper` 和 `CapabilityEvidence`，强化 PCBA 样板页的项目路径和能力证据。
- `/services/ems-box-build`：复用 `EMSBoxBuildBlock`，下沉 EMS / Box Build 暗色流程模块。
- `/quality-testing`：复用 `CapabilityEvidence`，并通过 props 调整 CTA，避免在 Quality 页出现自链接主按钮。
- `/about`：复用 `VentureIdentityBlock` 和 `FactoryShowcase`，把品牌身份和工厂图带到公司页。
- `/resources`：复用 `CatalogBanner` 和 `HomeFAQBlock`，让资源页更像真实资源入口。
- `/request-a-quote`：复用 `ProjectPathStepper`，让 RFQ 动作页说明文件到项目交付路径。
- `/contact`：复用 `HomeFinalCTA`，保持 Contact 页面同时有 Request a Quote 动作。

工程实现：

- 新增 `PageEnhancements`，按 `page.href` 条件插入增强模块，避免全站硬塞同一个区块。
- `VenturePage` 拆成 main content、enhancements、tail content 三段，让首页组件保持原有全宽 section 质感。
- `CapabilityEvidence` 增加轻量 props，用于不同页面复用时调整标题和 CTA。
- CSS 只增加 `stage3-enhancements` wrapper 和移动 Header 微调，保留首页组件原始视觉。
- 修正 390px 移动宽度下 logo 与 `Request a Quote` 按钮横向拥挤的问题。

## 模板组件采购 / 复用 SOP

这次 Venture 的经验可以沉淀为以后采购模板、购买组件、迁移模板站时的固定流程。

### 1. 先拆组件，不先拆页面

不要先问“这个模板有几个页面”。先盘点模板里有哪些可复用模块：

- Hero：适合首页，还是可以拆成内页 banner。
- Service grid：适合服务总览页、首页服务入口、相关服务区。
- Process / stepper：适合 RFQ、交付流程、服务页中的工作路径说明。
- Capability / evidence block：适合质量、能力、工厂、设备、认证类页面。
- FAQ：适合 Resources，也可作为服务页底部模块。
- Catalog / download CTA：适合资源页、官方资料页、销售资料入口。
- Gallery / factory showcase：适合 About、Quality、信任建设，不适合每页重复使用。
- Final CTA：适合服务页和联系页底部统一转化。

### 2. 给每个组件做用途标签

每个组件进入项目之前，至少记录这些字段：

- `component_name`：组件名或模板区块名。
- `job`：这个组件解决什么页面任务。
- `best_pages`：最适合放在哪些页面。
- `avoid_pages`：哪些页面不应该放。
- `content_inputs`：需要什么客户内容，图片、证据、FAQ、文件、案例或数字。
- `claim_risk`：是否容易引入未经确认的能力、证书、客户案例或数据。
- `adaptation_needed`：是否需要参数化标题、CTA、图片、列表、链接或主题。

### 3. 再按客户内容分配页面设计

组件分配顺序应该是：

1. 用 sitemap 确认页面任务。
2. 用 Enterprise Brain / 客户资料确认每页内容边界。
3. 给每页选 1-2 个真正服务该页面任务的组件。
4. 对组件做轻量参数化，不为每页复制一份。
5. 用视觉 QA 检查是否重复、过重、像模板堆砌。

### 4. 模板采购时的判断标准

买模板或组件时，不只看首页是否惊艳，而要看它是否能节省整站施工时间：

- 是否有可拆分模块，而不是强绑定整页。
- 是否有服务页、流程页、FAQ、资源 CTA、图片带、能力证据等 B2B 官网常用结构。
- 是否容易替换图片和文案。
- 是否能在客户不同页面间复用同一视觉语言。
- 是否不会强迫我们制造不存在的内容，例如虚假数据、客户 logo、证书、案例。
- 是否支持移动端正常折叠。

### 5. 对客户项目的实际收益

这套 SOP 可以减少三类浪费：

- 减少从零写 UI 的时间，优先借用已经验证过的漂亮模块。
- 减少模板误用，让页面结构围绕客户内容和转化路径，而不是围绕模板 demo。
- 减少返工，视觉验收前就能控制组件密度、页面节奏和 claim 边界。

## 验证记录

最终本地验证在 `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-web-temp/togeto-next-js` 执行。

- `npm run lint`
  - Result: pass.
- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs`
  - Result: 12 tests, 12 pass.
- `npm run build`
  - Result: pass.
  - Build command: `next build --webpack`.
  - Next output: 23 static pages generated.
  - Route table includes only the approved public pages plus `/_not-found`, metadata icons, and `/home-6` redirect page.
  - Note: build intentionally skips TypeScript validation in `next.config.mjs` for this shell-stage PR because the template's broader legacy TypeScript surface caused local type validation hangs. This should be tightened after demo routes/views are retired or isolated under a separate TS config.
- Component reuse pass verification:
  - `npm run lint` -> pass.
  - `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs` -> 12 tests, 12 pass.
  - `npm run build` -> pass, 23 static pages generated.
  - DOM check confirmed enhancement modules on Services, PCBA, EMS, Quality, Resources, and Contact routes.
  - Long PCBA screenshot confirmed `ProjectPathStepper` and `CapabilityEvidence` render after the lightweight page body.
  - Mobile screenshot found Header crowding at 390px, then CSS was adjusted to shrink logo and CTA spacing on narrow screens.
  - Latest preview restart after the final mobile Header adjustment was blocked by Codex escalation usage limit, so the final build is verified but not currently served on port 3000 from this thread.
- Previous local production preview:
  - Command: `npm run start -- -p 3000`.
  - URL: `http://localhost:3000`.
- Smoke checks:
  - `curl -I http://127.0.0.1:3000/` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/contact` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/request-a-quote` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/services/pcb-assembly-pcba` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/home-6` -> `308 Permanent Redirect` to `/`.
  - `curl -I http://127.0.0.1:3000/blog` -> `307 Temporary Redirect` to `/`.
  - Note: Next canonicalizes trailing-slash requests such as `/contact/` to `/contact` with `308`.
  - CSS static chunk check after Webpack build returned `200 OK`.
- Screenshot:
  - Repo asset: `docs/devlog/assets/venture-pcba-sample-webpack.png`.
  - Generated local source after visual feedback: Chrome headless capture from `http://127.0.0.1:3000/services/pcb-assembly-pcba/`.
  - The screenshot confirms the PCBA sample page renders with production CSS, the inner-page Header uses the readable solid state, the normal nav includes `Contact`, the primary action reads `Request a Quote`, the hero has a dedicated route image slot, and the stage3 content no longer renders as a stack of cards.

## 工程取舍 / 后续风险

- `npm run build` uses Webpack explicitly because local production preview with the default Next 16 build path served HTML but failed to serve the generated CSS chunk correctly in this template. Webpack build produced valid static chunks and a styled production screenshot.
- `typescript.ignoreBuildErrors` remains enabled for this PR to avoid the legacy template TypeScript surface blocking the first shell alignment. This is not a long-term quality target.
- The route tests enforce approved route files, sitemap data, demo redirects, and removal of demo App Router entries so future edits do not accidentally reopen template pages.
- Inner pages are intentionally copy-light. The next content pass should expand page-specific English copy from Enterprise Brain after claim review.
