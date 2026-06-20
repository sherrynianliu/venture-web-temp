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
/contact
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

- 11 tests, 11 pass。

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

## 验证记录

最终本地验证在 `/Users/nianliu/Desktop/Zbot/GithubRepo/Zbot-Clients客户/venture-web-temp/togeto-next-js` 执行。

- `npm run lint`
  - Result: pass.
- `node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs`
  - Result: 11 tests, 11 pass.
- `npm run build`
  - Result: pass.
  - Build command: `next build --webpack`.
  - Next output: 22 static pages generated.
  - Route table includes only the approved public pages plus `/_not-found`, metadata icons, and `/home-6` redirect page.
  - Note: build intentionally skips TypeScript validation in `next.config.mjs` for this shell-stage PR because the template's broader legacy TypeScript surface caused local type validation hangs. This should be tightened after demo routes/views are retired or isolated under a separate TS config.
- Local production preview:
  - Command: `npm run start -- -p 3000`.
  - URL: `http://localhost:3000`.
- Smoke checks:
  - `curl -I http://127.0.0.1:3000/` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/services/pcb-assembly-pcba` -> `200 OK`.
  - `curl -I http://127.0.0.1:3000/home-6` -> `308 Permanent Redirect` to `/`.
  - `curl -I http://127.0.0.1:3000/blog` -> `307 Temporary Redirect` to `/`.
  - CSS static chunk check after Webpack build returned `200 OK`.
- Screenshot:
  - Repo asset: `docs/devlog/assets/venture-pcba-sample-webpack.png`.
  - Generated local source: `/tmp/venture-pcba-sample-webpack.png`.
  - The screenshot confirms the PCBA sample page renders with production CSS and the inner-page Header uses the readable solid state.

## 工程取舍 / 后续风险

- `npm run build` uses Webpack explicitly because local production preview with the default Next 16 build path served HTML but failed to serve the generated CSS chunk correctly in this template. Webpack build produced valid static chunks and a styled production screenshot.
- `typescript.ignoreBuildErrors` remains enabled for this PR to avoid the legacy template TypeScript surface blocking the first shell alignment. This is not a long-term quality target.
- The route tests enforce approved route files, sitemap data, demo redirects, and removal of demo App Router entries so future edits do not accidentally reopen template pages.
- Inner pages are intentionally copy-light. The next content pass should expand page-specific English copy from Enterprise Brain after claim review.
