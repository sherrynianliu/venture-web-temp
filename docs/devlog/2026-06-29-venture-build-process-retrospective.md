# Venture 建站流程复盘与产品化经验

## 复盘目的

这次 Venture 站点从模板站一路修到可验收状态，中间反复经历了内容、路由、GEO、结构化数据、视觉、模板残留、CSS 依赖、PR 口径和 QA 口径的多轮返工。这个 devlog 用来记录为什么会来回修、哪些问题应该前置、以后如何把整套外贸独立站/GEO 建站流程产品化。

这不是某一个 PR 的技术记录，而是项目级复盘。

## 为什么会反复修

### 1. 一开始把问题看成 GEO 增强，低估了上线基础问题

早期判断集中在 schema、FAQ、proof layer、GEO 可抽取性。但实际站点还有更基础的 P0 问题：

- 根路径还不是 Venture 首页。
- Contact / Footer / metadata 仍有模板残留。
- 规划路由多，但真实页面没完全落地。
- CTA 指向、RFQ、Contact 表单和邮箱路径没有统一。
- 同一站里同时存在 Venture 与 Togeto 模板信号。

经验：GEO 不能脱离上线可信度。基础工程、路由、导航、CTA、模板残留、联系方式先清干净，再做 schema 和 proof layer。

### 2. 站点页面曾经偏 AI 事实清单，不像真实买家页面

Official Websites & Domains 页面第一版信息结构是对的，但视觉和文案更像“给 AI 和内部团队看的事实清单”。后来才改成 buyer-facing 的官网澄清页：

- Quick Answer 表格让买家和 AI 都能快速抓答案。
- 域名按 current / legacy / associated / historical / reserved / not-owned 分类。
- About 只放 teaser，不放完整域名表。
- Footer 只保留当前官方路径。
- schema 只用 canonical website，不把历史、候选、非官方域名塞进 sameAs。

经验：GEO 不是把内部事实全摊出来，而是把事实做成真实买家能理解、愿意信任、AI 也能稳定抽取的页面。

### 3. 内容结构先对了，但内容厚度不够

Services 和 Quality & Testing 的页面结构一开始是对的，但偏骨架。后来又追加：

- Services Overview 的 buyer situation、service ownership、supporting capability、scope boundaries、FAQ。
- Quality & Testing 的 lifecycle、method matrix、buyer input、records / traceability、special-process boundary、certificate boundary、FAQ。
- 四个 service child pages：PCBA、EMS & Box Build、Component Sourcing / BOM / DFM、PCB Fabrication Support 也需要丰满，不然闭眼进入子页面仍然单薄。

经验：外贸制造业网站不能只做“GEO 可抽取骨架”。核心服务页必须让真实买家看完后知道：从哪里开始、准备什么文件、哪些能力是支持项、哪些承诺需要项目确认。

### 4. 旧站资料可用，但不能照搬旧站 SEO 架构和强 claim

旧站提供了大量有价值的服务词汇和质量方法词汇，例如 PCBA、Turnkey PCBA、EMS、Box Build、Component Sourcing、DFM/DFA、SPI、AOI、X-Ray、ICT/FCT、Cleaning、Reliability Testing 等。

但旧站也包含风险表达：

- 固定交期、No MOQ、24/7、强认证。
- customer logos / named cases。
- Aerospace / Defense 等未确认行业。
- 可能把 partner / project-specific capability 写成 Venture 自有默认能力。

经验：旧站是 vocabulary source 和 evidence clue，不是新站 IA 或 public claim 的直接来源。所有能力表达都要加边界：project-dependent、buyer input、quotation scope、approved files、acceptance criteria、confirmed evidence。

### 5. Structured data 不能只扫源代码，要测运行时 JSON-LD

早期 source scan 能看出 `structured-data.ts` 写没写，但不能证明运行时 JSON-LD 正确，因为结构化数据会 import `site-data.ts` 和 domain groups。

后来补了 runtime schema test，检查：

- Official Websites 页面 runtime JSON-LD 包含 ItemList。
- domain status map 出现在 page-level clarification context。
- Organization / WebSite schema 只保留 `venture-mfg.com` 作为 canonical website。
- historical / candidate / associated / not-owned domains 不进入 Organization.url、WebSite.url、contactPoint、sameAs。

经验：schema 属于 runtime behavior，不只是源码文本。以后要把 structured data test 设计成“build actual page data -> inspect JSON-LD graph”。

### 6. PR body、devlog、视觉 QA 口径必须一致

曾经出现过 PR body 说 visual acceptance completed，但 devlog 说 mobile final screenshot pass blocked / still needs human confirmation。后来统一口径：

> Desktop visual acceptance was completed. Mobile overflow fixes were added, but final mobile visual QA still needs human confirmation in live browser preview.

经验：PR、devlog、final response 不能互相打架。尤其是视觉 QA，如果没有真人验收，就只能说 automated smoke passed，不能说 full visual acceptance completed。

### 7. 模板残留有两层：公开页面残留和代码库残留

公开页面残留先清：Togeto copy、Contact、Footer、旧 CTA、旧 route。

代码库残留后清：demo views、old data、old components、SCSS source、unused utils/types、theme CSS、Font Awesome assets。

经验：不要一上来就大删模板资产。先让 live site 稳定，再拆：

1. 删除不参与 runtime 的 template source。
2. 删除 source-only style / utils / types。
3. 映射 runtime CSS 依赖。
4. 用 Venture-owned class 替换最后的 template runtime dependency。
5. 最后删 `theme-main.css`。

### 8. CSS/theme 清理必须以“依赖映射”开始

`theme-main.css` 一开始不能直接删，因为它还支撑：

- Top contact strip 的旧 `it-header-*` class。
- Font Awesome icon。
- Error / 404 上的 `it-btn-orange`。
- 全局 heading / paragraph 颜色覆盖。

最终做法：

- TopBar 改成 Venture-owned class + inline SVG。
- Error / 404 改用 Venture CTA class。
- `venture-overrides.css` 接管 top strip、utility page、scoped normalization。
- layout 移除 `theme-main.css`。
- 删除 Font Awesome fonts。
- 加 guardrail 防止旧 class 和 theme link 回来。

经验：运行时 CSS 迁移不能只看文件是否存在，要查 live DOM class、layout links、public assets、visual smoke 和 build。

### 9. 未跟踪截图和本地产物会成为 staging 风险

项目过程中产生了很多截图、`.playwright-mcp/`、`output/`、本地 dev artifact。subagent 多次提醒：不能 `git add -A`。

经验：每个 PR staging 必须精确指定文件。产品化流程里要加入：

- 禁止 `git add -A`。
- 提交前 `git status --short --branch`。
- `git diff --cached --name-status` 检查 staged 范围。
- 本地截图和 smoke artifact 要有固定 output 目录，并由 `.gitignore` 或人工规则隔离。

## 产品化后的推荐建站 SOP

### Phase 0: Source Authority 与客户口径锁定

交付物：

- Source authority map。
- 客户确认口径表。
- 待确认事项清单。

必须先确认：

- 母品牌 / 服务标签 / 搜索入口的关系。
- 公司实体、中文实体、英文 legalName 是否可公开。
- 官方域名、legacy domain、非官方 domain。
- 官方邮箱、电话、地址。
- 社媒 sameAs 允许列表。
- 认证、设备、产能、行业案例、客户 logo 是否有证据和公开授权。

规则：

- 不确认就不写进 public copy / footer / privacy / schema。
- schema 更保守，只放 confirmed canonical identity。

### Phase 1: First Launch IA Freeze

交付物：

- First launch sitemap。
- Navigation map。
- Route inventory。

规则：

- 先锁 10-15 个首发核心页面，不追求一次铺满长尾 SEO。
- 不把 old-site SEO pages 全量搬进新站。
- Services / Quality / About / Resources / Contact / RFQ 要先形成闭环。
- 所有导航、footer、card、CTA 必须指向真实存在页面。

### Phase 2: P0 Site Shell 与模板清理

交付物：

- 根路径上线页。
- Header / Footer / Contact / RFQ。
- Template residue scan。

检查项：

- `/` 是正式官网首页。
- metadata、OG、canonical 无模板名。
- Contact 无 Togeto 文案。
- Footer 无 `/service-details/1`、`/portfolio`、`/blog` 等旧模板路径。
- RFQ first launch 可用，mailto 或后端逻辑明确。
- 公开邮箱统一。
- 未确认社媒不出现在 footer / sameAs。

### Phase 3: Human-Friendly GEO 内容厚度

交付物：

- Home。
- Services overview。
- 4 个 service child pages。
- Quality & Testing。
- About。
- Official Websites, Domains & Company Entities。
- Contact / RFQ / Resources。

内容规则：

- 每页要先回答 buyer 的 direct answer。
- 每个核心页要有 buyer situation、inputs、scope boundaries、FAQ。
- 表格要能独立被 AI 抽取，也要让人读得顺。
- 避免 keyword stuffing。
- 避免 internal / AI-facing wording。

### Phase 4: Proof / Claim Boundary Layer

交付物：

- Capability claim matrix。
- Evidence mapping。
- Certificate boundary。
- Project-dependent wording。

规则：

- 能力分层：Venture-owned、partner line、project-specific support、needs evidence。
- 认证按 entity / scope / document / validity 写。
- 不写未确认固定交期、MOQ、response time、capacity、headcount。
- 不写未授权客户案例、logo、敏感行业。

### Phase 5: Runtime Schema 与 GEO 技术层

交付物：

- Organization / WebSite / WebPage / Breadcrumb。
- Service schema。
- FAQPage schema。
- Official domain ItemList。
- Runtime schema tests。

规则：

- 测运行时 JSON-LD，不只扫源码。
- FAQ schema 必须和 visible FAQ 同步。
- Organization sameAs 只放 confirmed official assets。
- historical / redirected / candidate / not-owned domains 只能放 clarification page context，不进 Organization sameAs。

### Phase 6: Visual QA 与 Responsive Gates

交付物：

- Desktop visual smoke。
- Mobile overflow smoke。
- Human visual acceptance list。

自动化检查：

- 页面可打开。
- title / H1 存在。
- no broken images。
- no horizontal overflow。
- no old CSS link。
- topbar/header offset 正常。

人工验收重点：

- 首页首屏。
- Services overview。
- 4 个 service child pages。
- Quality & Testing。
- Official Websites page。
- Contact / RFQ。
- 404 / utility pages。

### Phase 7: Template Source Cleanup

交付物：

- Demo route removal。
- Unused component/data/view removal。
- Unused SCSS / CSS source removal。
- Guardrail tests。

规则：

- 先删非 runtime。
- 再删 source-only。
- 最后删 runtime CSS。
- 每一步都要 build + browser smoke。

### Phase 8: PR Packaging 与 Review

推荐拆法：

- PR A: P0 shell / route / RFQ / template copy。
- PR B: core content depth。
- PR C: service child page depth。
- PR D: domain clarification / schema。
- PR E: template source cleanup。
- PR F: runtime CSS/theme extraction。
- PR G: final launch hardening。

每个 PR 必须有：

- Scope / out of scope。
- Verification。
- Visual QA status。
- Devlog。
- Subagent review for risky changes。
- Human visual QA list when runtime CSS or UI changed.

## Definition of Done 模板

一个页面完成，不只是有内容。至少要满足：

- 路由存在。
- metadata / canonical 正确。
- H1、summary、direct answer 清楚。
- CTA 指向真实页面。
- visible FAQ 和 FAQ schema 同步。
- 无未确认 claim。
- 无 internal-only / AI-only wording。
- mobile 无横向溢出。
- schema 不越权。
- footer / nav / related links 不制造旧路径或 404。

一个 PR 完成，至少要满足：

- tests passed。
- build passed。
- active source/runtime residue scan passed。
- browser smoke passed。
- devlog updated。
- PR body 与 devlog 口径一致。
- untracked artifacts 未 stage。
- 若涉及视觉或 runtime CSS，明确 human visual QA 仍需验收。

## 下次项目要前置的模板

建议沉淀成可复用材料：

- Client Confirmation Questionnaire。
- Source Authority Matrix。
- First Launch IA Freeze Template。
- Page Brief Template。
- Manufacturing Claim Boundary Template。
- Domain / Entity Clarification Template。
- Runtime Schema Test Template。
- Content Depth Prompt for Services / Quality。
- Visual QA Checklist。
- PR Body Template。
- Devlog Template。
- Final Launch Checklist。

## 核心结论

这次反复修不是因为单点实现难，而是因为“模板站改 GEO 官网”同时涉及四条线：

1. 上线工程可信度。
2. 买家可读内容厚度。
3. GEO / schema 可抽取性。
4. 模板技术债清理。

以后要把这四条线拆成明确阶段和 PR gate。最关键的产品化经验是：先锁 source authority 和 first launch IA，再做 P0 shell，接着做人类友好的内容厚度，然后做 runtime schema 和 proof layer，最后清模板技术债和 CSS runtime。不要把这些混在一个大 PR 里。
