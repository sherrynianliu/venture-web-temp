# Services + Quality & Testing Content Depth Patch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a focused content-depth patch for Venture Electronics Services Overview and Quality & Testing so the pages feel like credible B2B manufacturing pages, not only GEO-safe structural shells.

**Architecture:** Keep the current Venture App Router, routes, header/footer, schema builder, and shared page renderer. Expand only page data, FAQ data, and tests unless the existing renderer cannot display the required table/list/FAQ content.

**Tech Stack:** Next.js 16 App Router, React 18, shared Venture page content in `togeto-next-js/src/components/venture-site/site-data.ts`, shared renderer in `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`, Node `node --test` tests in `togeto-next-js/tests/venture-site-shell.test.mjs`.

---

## 一页 Summary

当前问题不是服务结构错，而是内容厚度验收标准不够硬。Services Overview 已经能说明服务层级，但还没有充分解释买家该如何在 PCBA、Turnkey PCBA、EMS & Box Build、Component Sourcing、PCB Fabrication Support、Quality & Testing 之间选择。Quality & Testing 已经有 inspection/testing、records、FAQ 的骨架，但还没有把旧站和 Enterprise Brain 里有价值的 quality system、in-process inspection、testing methods、buyer input、records/traceability、certificate boundary 分层写完整。

本补丁不重新设计 IA，不重做模板清理，不移动 Official Websites, Domains & Company Entities，不做 CSS/theme extraction。只做 Services + Quality & Testing 的内容加厚、FAQ/schema 同步、测试验收和视觉检查。

## 施工原则

- 不回到已 merge 的 `codex/venture-pr2-core-content-depth` 老分支施工。
- 推荐在当前 PR3 合并后，从最新 `main` 开新分支，例如 `codex/venture-services-quality-depth`。
- 如果必须和 PR3 并行，可以做 stacked PR，但要明确两个 PR 都会改 `site-data.ts` 和 `venture-site-shell.test.mjs`，合并时需要处理冲突。
- 旧站只作为公开词汇、服务范围和测试方法来源，不照抄旧 SEO 架构和强 claim。
- 页面必须 human-first，GEO-friendly 是结构结果，不把 visible copy 写成给 AI 的事实清单。

## Source Authority

| 优先级 | Source | 用途 | 使用边界 |
| --- | --- | --- | --- |
| 1 | `zbot-enterprise-brain-venture` | 最高 source authority，确认客户答复、公开能力项、claim boundary | 不把内部/legal-only 内容写进 public copy |
| 2 | `venture-geo-website-workspace` decisions / client communication | 页面结构、服务层级、客户确认口径 | 若与旧站冲突，以客户确认记录为准 |
| 3 | `venture-mfg.com` 旧公开站 | 服务词汇、quality vocabulary、流程/测试方法来源 | 不复制固定交期、No MOQ、24/7、强认证、客户 logo |
| 4 | `venture-pcba.com` 旧 vertical asset | PCBA/assembly/buyer-language taxonomy | 只用于术语和项目输入，不作为当前主站身份 |
| 5 | 当前 `venture-web-temp` | 真实代码结构、renderer 能力、测试模式 | 不扩大本补丁范围到模板清理 |

## 必读 Sources

施工前先读：

- `../zbot-enterprise-brain-venture/sources/summaries/venture-client-replies-20260619.md`
- `../zbot-enterprise-brain-venture/sources/summaries/venture-mfg/site-overview.md`
- `../zbot-enterprise-brain-venture/sources/summaries/venture-mfg/priority-page-summaries.md`
- `../venture-geo-website-workspace/00_context/client-communication-service-record.md`
- `../venture-geo-website-workspace/00_context/decisions.md`
- `togeto-next-js/src/components/venture-site/site-data.ts`
- `togeto-next-js/src/components/venture-site/pages/VenturePage.tsx`
- `togeto-next-js/tests/venture-site-shell.test.mjs`

公开旧站材料：

- `https://www.venture-mfg.com/`
- `https://www.venture-mfg.com/quality-management-system/`
- `https://www.venture-mfg.com/box-build-assembly/`
- `https://www.venture-pcba.com/`

## 禁止写入 Public Copy / Schema 的内容

- 固定交期或固定响应时间。
- `No MOQ` 或所有项目都可做的数量承诺。
- `24/7 support`、固定客服承诺。
- 客户 logo、客户名称、未授权案例。
- Aerospace / Defense 作为 target industry 或 public service scenario。
- 未确认认证、IPC Class 3、IATF、BSCI、ISO 13485、RoHS/REACH 作为 Venture-held qualification。
- 把 partner factory certificate 写成 Venture Electronics 自有资质。
- 把 UL Product iQ 证据扩展成所有 PCBA/EMS 项目都 UL certified。
- Wei Chi、威驰、Chinese entity public relationship wording。

## 中文施工变更表

| 页面 / 模块 | 当前问题 | 计划改法 | 主要文件 | 验收标准 |
| --- | --- | --- | --- | --- |
| Services summary/direct answer | 能说明服务层级，但不像买家选择指南 | 改成从 deliverable 出发，明确 PCBA、Turnkey、EMS、Sourcing、Fabrication、Quality 的进入方式 | `site-data.ts` | 首屏 summary/direct answer 能回答“我该从哪个服务开始” |
| Services hierarchy table | 行数太少，缺少 NPI、low/medium volume、turnkey、DFM/DFA、testing、add-ons | 扩展 `How Venture services fit together` 表格 | `site-data.ts` | 表格覆盖 prototype/NPI、turnkey、EMS、BOM risk、fabrication、testing、coating/potting/labeling/packaging |
| Services buyer situations | 缺少真实买家场景 | 新增 `Service paths by buyer situation` 表格 | `site-data.ts` | 买家可按“我有文件/我需要 sourcing/我需要 box build/我不确定测试”找到入口 |
| Services ownership | 支撑能力和主服务边界仍会混 | 新增 `What each service owns` 表格 | `site-data.ts` | 每个服务都有 owns / doesNotOwn 边界 |
| Services old-site mapping | 旧站大量 topic 会诱导重建薄页 | 新增 old-site topic mapping 与 consolidated capabilities 说明 | `site-data.ts` | 说明 SMT、through-hole、BGA、IC programming、coating、test fixtures 等应归入服务模块 |
| Services scope boundaries | 风险 claim 边界还不够显性 | 新增 `Service scope boundaries` checklist | `site-data.ts` | 明确 lead time、MOQ、testing、certificate、logos、Aerospace/Defense 边界 |
| Services FAQ | 缺少服务选择 FAQ | 新增 `servicesFaqs`，设置 `pageData.services.faqs = servicesFaqs`，页面 section 用 `kind: "faq"` | `site-data.ts`, tests | FAQPage schema 使用同一份 visible FAQ |
| Quality hero/summary | “depends on scope” 方向对，但解释不够 | 更新 title、seoTitle、metaDescription、role、summary、directAnswer | `site-data.ts` | 首屏说明质量计划按设计文件、BOM、fixture、firmware、acceptance criteria、records 来确认 |
| Quality lifecycle | 缺少项目生命周期视角 | 新增 `Quality planning across the project lifecycle` 表格 | `site-data.ts` | 覆盖 file/BOM review、IQC、SMT、in-process inspection、electrical/functional testing、final inspection |
| Quality method matrix | 方法词汇不够完整 | 扩展 `Inspection and testing method matrix` | `site-data.ts` | 覆盖 IQC、SPI、FAI、AOI、X-Ray、Manual Visual Inspection、Electrical Testing、ICT、FCT、Boundary Scan、Programming、Cleaning、Reliability |
| Quality buyer input | 买家不知道测试要准备什么 | 新增 `Buyer inputs required for test planning` 表格 | `site-data.ts` | 覆盖 revision、critical components、fixture/test access、firmware、acceptance criteria、report requirements、standards |
| Quality records/traceability | 缺少分层记录说明 | 新增 `Records and traceability discussion` 表格 | `site-data.ts` | 覆盖 file revision、material decision、inspection、test、traceability、shipment records |
| Quality special process | Cleaning/coating/potting/programming/labeling/packaging 边界不够 | 新增 special-process checklist | `site-data.ts` | 每项都说明 buyer input 和 quotation scope |
| Quality reliability | 容易写成 blanket capability | 新增 reliability/environmental boundaries 表格 | `site-data.ts` | 明确 condition、sample count、duration、acceptance criteria、internal/external boundary |
| Quality certificate boundary | 认证风险需要显性阻断 | 新增 certificate/compliance boundary checklist | `site-data.ts` | 不出现未确认证书或 partner certificate 放大 |
| Quality FAQ | FAQ 数量和深度不够 | 扩展 `qualityTestingFaqs` 到 10 个左右 | `site-data.ts`, tests | FAQ 覆盖 RFQ quality input、AOI/X-Ray/ICT/FCT、FAI、functional testing、cleaning/coating、reliability、traceability、certification |
| Tests | 当前更多验证结构和少量关键词 | 新增 Services depth test、Quality depth test、FAQ/schema sync assertions | `venture-site-shell.test.mjs` | 内容不足时测试会失败 |
| Visual QA | 内容变长可能造成移动端溢出 | 检查 `/services/`、`/quality-testing/`、`/services/pcb-assembly-pcba/`、`/about/` desktop/mobile | Browser QA, devlog | 表格容器可横向滚动，但整页不能横向溢出 |

---

## Task SQ0: Source Review And Branch Setup

**Files:**
- Read only first: sources listed above.
- Modify later only: `togeto-next-js/src/components/venture-site/site-data.ts`, `togeto-next-js/tests/venture-site-shell.test.mjs`, devlog.

- [ ] **Step 1: Confirm branch strategy**

Recommended after PR3 is merged:

```bash
git checkout main
git pull
git checkout -b codex/venture-services-quality-depth
```

Expected: new branch from latest `main`.

- [ ] **Step 2: Read source files**

Read local sources:

```bash
sed -n '1,220p' ../zbot-enterprise-brain-venture/sources/summaries/venture-client-replies-20260619.md
sed -n '1,240p' ../zbot-enterprise-brain-venture/sources/summaries/venture-mfg/site-overview.md
sed -n '1,260p' ../zbot-enterprise-brain-venture/sources/summaries/venture-mfg/priority-page-summaries.md
sed -n '1,220p' ../venture-geo-website-workspace/00_context/client-communication-service-record.md
sed -n '1,220p' ../venture-geo-website-workspace/00_context/decisions.md
```

Read current implementation:

```bash
sed -n '520,1160p' togeto-next-js/src/components/venture-site/site-data.ts
sed -n '1,260p' togeto-next-js/src/components/venture-site/pages/VenturePage.tsx
sed -n '720,860p' togeto-next-js/tests/venture-site-shell.test.mjs
```

- [ ] **Step 3: Read public old-site pages**

Use public pages only for terms and method categories:

```text
https://www.venture-mfg.com/
https://www.venture-mfg.com/quality-management-system/
https://www.venture-mfg.com/box-build-assembly/
https://www.venture-pcba.com/
```

Record in devlog that old-site strong claims are source material exclusions, not reusable public claims.

## Task SQ1: Add Failing Services Content-Depth Tests

**Files:**
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add Services depth test**

Add this test near the existing Services page test:

```js
test('Services page has enough buyer-facing depth for service selection', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');

  for (const expected of [
    'Start from the deliverable, not from a keyword',
    'Service paths by buyer situation',
    'What each service owns',
    'Supporting capabilities that should not become confusing top-level pages',
    'What buyers should prepare before service selection',
    'How old-site topics map into the new service structure',
    'Service scope boundaries',
    'Services FAQ',
    'Prototype / NPI',
    'Turnkey PCBA is a delivery model',
    'Conformal coating',
    'IC programming',
    'test fixtures',
  ]) {
    assert.match(siteData, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.equal(pageData.services.faqs.length, 6);
  assert.ok(pageData.services.sections.some((section) => section.title === 'Services FAQ' && section.kind === 'faq'));
  assert.doesNotMatch(siteData, /24\/7|24h response|No MOQ|Since 2010|IPC Class 3|Aerospace|Defense/);
});
```

- [ ] **Step 2: Run test to verify it fails before implementation**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs
```

Expected: fail because new Services content sections and `servicesFaqs` are not implemented yet.

## Task SQ2: Expand Services Overview Content

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts`

- [ ] **Step 1: Add `servicesFaqs`**

Add near the other FAQ constants:

```ts
const servicesFaqs: PageFAQ[] = [
  {
    question: "Which Venture service should I start with if I need assembled boards?",
    answer:
      "Start with PCB Assembly / PCBA. If the project also needs sourcing, testing, packaging or delivery support, those requirements can be reviewed inside the PCBA quotation scope.",
  },
  {
    question: "Is Turnkey PCBA a separate service from PCB Assembly?",
    answer:
      "Turnkey PCBA is a delivery model under PCB Assembly / PCBA. It may include PCB fabrication support, BOM review, component sourcing, assembly, inspection, testing, packaging and delivery coordination when agreed in the quote.",
  },
  {
    question: "When does a project become EMS or Box Build?",
    answer:
      "A project usually moves into EMS or Box Build when the scope extends beyond assembled boards into enclosure, cable or harness, mechanical parts, system checks, labels, packaging or delivery preparation.",
  },
  {
    question: "Can Venture help with component sourcing and BOM risk?",
    answer:
      "Yes. Venture can review BOM completeness, availability, lifecycle risk, MOQ, package questions and candidate alternatives. Any substitution must be approved by the buyer before use.",
  },
  {
    question: "Does every project include the same tests?",
    answer:
      "No. Testing depends on board design, fixture availability, firmware, test procedure, acceptance criteria, quantity and project risk.",
  },
  {
    question: "Why does the new site not rebuild all old material, stack-up and industry pages?",
    answer:
      "The first-launch site keeps the service structure clear. Old topics are consolidated into service pages, Resources, FAQ and quote-preparation guidance unless a topic has enough evidence to support a dedicated page.",
  },
];
```

- [ ] **Step 2: Update Services summary and direct answer**

In `pageData.services`, set:

```ts
summary:
  "Venture Electronics organizes PCB Assembly, Turnkey PCBA, EMS & Box Build, Component Sourcing, BOM / DFM Review, PCB Fabrication Support, and Quality & Testing around the buyer's intended deliverable. The page helps buyers choose the right starting point before sending RFQ files.",
directAnswer: [
  "Start with PCB Assembly / PCBA when the required deliverable is assembled boards.",
  "Use EMS & Box Build when the project extends beyond the PCBA into enclosure, cable or harness, mechanical parts, labeling, packaging, or system-level testing.",
  "Use Component Sourcing, BOM / DFM Review, PCB Fabrication Support, and Quality & Testing as support layers that help define the quotation and manufacturing scope.",
],
```

- [ ] **Step 3: Replace Services sections with the required order**

Set `pageData.services.sections` in this order:

1. `How Venture services fit together`
2. `Start from the deliverable, not from a keyword`
3. `Service paths by buyer situation`
4. `What each service owns`
5. `Supporting capabilities that should not become confusing top-level pages`
6. `What buyers should prepare before service selection`
7. `How old-site topics map into the new service structure`
8. `Service scope boundaries`
9. `Services FAQ`

The first table must include rows for:

- `Need prototype / NPI PCBA review`
- `Need low-volume or medium-volume PCBA`
- `Need turnkey PCB Assembly`
- `Need box build or system assembly`
- `Need BOM risk reduction before quoting`
- `Need bare-board and assembly coordination`
- `Need DFM / DFA / engineering review`
- `Need quality or test planning`
- `Need conformal coating, potting, labeling, packaging or programming add-ons`

Use these exact section titles so tests and visual review can verify the content-depth contract.

- [ ] **Step 4: Add Services page FAQ connection**

Set:

```ts
faqs: servicesFaqs,
```

Add the final section:

```ts
{
  title: "Services FAQ",
  kind: "faq",
}
```

Expected: FAQPage schema uses `pageData.services.faqs` through the existing structured-data builder.

## Task SQ3: Add Failing Quality Content-Depth Tests

**Files:**
- Modify: `togeto-next-js/tests/venture-site-shell.test.mjs`

- [ ] **Step 1: Add Quality depth test**

Add this test near the existing Quality page test:

```js
test('Quality page has full method, input, records and boundary coverage', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');

  for (const expected of [
    'Quality planning across the project lifecycle',
    'Inspection and testing method matrix',
    'Buyer inputs required for test planning',
    'Records and traceability discussion',
    'PCBA cleaning, coating and special-process boundaries',
    'Reliability and environmental testing boundaries',
    'Certificate and compliance boundaries',
    'What Quality & Testing does not promise',
    'IQC',
    'SPI',
    'FAI',
    'AOI',
    'X-Ray',
    'ICT',
    'FCT',
    'Boundary scan',
    'Manual Visual Inspection',
    'Cleaning',
    'Conformal coating',
    'Traceability',
  ]) {
    assert.match(siteData, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.equal(pageData.qualityTesting.faqs.length, 10);
  assert.ok(
    pageData.qualityTesting.sections.some(
      (section) => section.title === 'Quality & Testing FAQ' && section.kind === 'faq',
    ),
  );
  assert.doesNotMatch(
    siteData,
    /every project includes every inspection|100% system testing|fixed lead time|No MOQ|IPC Class 3|IATF|BSCI|Aerospace|Defense/,
  );
});
```

- [ ] **Step 2: Run test to verify it fails before implementation**

```bash
cd togeto-next-js
node --test tests/venture-site-shell.test.mjs
```

Expected: fail because new Quality sections and FAQ count are not implemented yet.

## Task SQ4: Expand Quality & Testing Content

**Files:**
- Modify: `togeto-next-js/src/components/venture-site/site-data.ts`

- [ ] **Step 1: Expand `qualityTestingFaqs`**

Replace or extend `qualityTestingFaqs` so it has these 10 questions:

```ts
const qualityTestingFaqs: PageFAQ[] = [
  {
    question: "What quality information should I send with a PCBA RFQ?",
    answer:
      "Send the current design revision, BOM, CPL, assembly drawing, quantity, test expectations, acceptance criteria, reporting needs, firmware or fixture information when available.",
  },
  {
    question: "Does every PCB Assembly project include AOI, X-Ray, ICT and FCT?",
    answer:
      "No. AOI, X-Ray, ICT, FCT and functional testing are selected according to component package, test access, fixture availability, firmware, procedure, quantity, risk and agreed quotation scope.",
  },
  {
    question: "When is X-Ray inspection useful?",
    answer:
      "X-Ray inspection is commonly discussed for BGA, QFN, hidden-joint or bottom-terminated components where solder joints cannot be fully checked visually.",
  },
  {
    question: "What is needed for ICT or FCT?",
    answer:
      "ICT or FCT usually requires test access, fixture or interface information, firmware or configuration, test procedure, golden sample when available, and pass/fail criteria.",
  },
  {
    question: "Can Venture discuss first article inspection?",
    answer:
      "Yes. FAI can be discussed for new builds, revision changes or NPI review to verify the first assembled unit before continuing the build.",
  },
  {
    question: "Can Venture help with functional testing for EMS or Box Build?",
    answer:
      "Functional testing can be reviewed when the system BOM, firmware, enclosure, cable or harness, test steps, fixture, labels and acceptance criteria are available.",
  },
  {
    question: "Can cleaning or conformal coating be included?",
    answer:
      "Cleaning, conformal coating or potting should be discussed with material, area, keep-out zones, process, inspection and acceptance requirements.",
  },
  {
    question: "Can reliability testing be arranged?",
    answer:
      "Reliability or environmental testing should be discussed by standard, condition, sample count, duration, acceptance criteria and whether internal or external testing is required.",
  },
  {
    question: "What traceability records can be discussed?",
    answer:
      "Records may include file revision, BOM revision, material decisions, inspection result, test result, batch, serial number, label, packaging and shipment information depending on the agreed scope.",
  },
  {
    question: "Does Venture have all compliance certifications for every project?",
    answer:
      "No. Certification and compliance wording must be reviewed by exact entity, scope, document and project requirement. Do not assume every project carries every certificate.",
  },
];
```

- [ ] **Step 2: Update Quality hero fields**

In `pageData.qualityTesting`, set:

```ts
title: "Quality & Testing for PCB Assembly, PCBA and EMS projects.",
seoTitle: "Quality & Testing for PCB Assembly, PCBA and EMS | Venture Electronics",
metaDescription:
  "Plan PCB Assembly, PCBA and EMS inspection and testing with Venture Electronics, including IQC, SPI, FAI, AOI, X-Ray, ICT/FCT, functional testing, cleaning, reliability testing, records and traceability boundaries.",
role:
  "Quality planning, inspection methods, testing inputs and records for project-based PCB Assembly and EMS manufacturing.",
summary:
  "Venture Electronics plans quality and testing around each project's design files, BOM, components, assembly process, fixture availability, firmware, standards, acceptance criteria, reporting needs and delivery requirements.",
directAnswer: [
  "Quality & Testing should define what is checked, when it is checked, which method applies, what buyer input is required, and what record or report is expected.",
  "Not every project uses every inspection or test method. SPI, FAI, AOI, X-Ray, ICT, FCT, functional testing, reliability testing and final inspection are selected according to project risk and agreed scope.",
],
```

- [ ] **Step 3: Replace Quality sections with the required order**

Set `pageData.qualityTesting.sections` in this order:

1. `Quality planning across the project lifecycle`
2. `Inspection and testing method matrix`
3. `Buyer inputs required for test planning`
4. `Records and traceability discussion`
5. `PCBA cleaning, coating and special-process boundaries`
6. `Reliability and environmental testing boundaries`
7. `Certificate and compliance boundaries`
8. `What Quality & Testing does not promise`
9. `Quality & Testing FAQ`

Required method rows in `Inspection and testing method matrix`:

- `IQC / incoming material check`
- `SPI`
- `FAI`
- `AOI`
- `X-Ray`
- `Manual Visual Inspection`
- `Electrical Testing / bare-board test`
- `ICT`
- `FCT / functional test`
- `Boundary scan`
- `Programming / configuration`
- `Cleaning / residue control`
- `Reliability / environmental testing`

Required lifecycle stages:

- `File and BOM review`
- `Incoming material / IQC`
- `SMT preparation`
- `In-process inspection`
- `Electrical / functional testing`
- `Final inspection and shipment`

- [ ] **Step 4: Add Quality FAQ connection**

Set:

```ts
faqs: qualityTestingFaqs,
```

Add final section:

```ts
{
  title: "Quality & Testing FAQ",
  kind: "faq",
}
```

Expected: visible FAQ and FAQPage schema remain synced through existing `page.faqs`.

## Task SQ5: Verification, Visual QA, And Review

**Files:**
- Modify: `docs/devlog/<new-content-depth-devlog>.md`

- [ ] **Step 1: Run verification**

```bash
cd togeto-next-js
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/resolve-wow-constructor.test.mjs tests/template-cleanup.test.mjs
npm run build
git diff --check
```

Expected:

- All tests pass.
- Production build passes.
- `git diff --check` has no output.

- [ ] **Step 2: Route smoke**

Use running local server:

```bash
node -e "const routes=['/services/','/quality-testing/','/services/pcb-assembly-pcba/','/about/'];(async()=>{for(const route of routes){const res=await fetch('http://127.0.0.1:3002'+route);console.log(route,res.status);if(!res.ok) process.exitCode=1;}})().catch(err=>{console.error(err);process.exit(1);});"
```

Expected: all routes return `200`.

- [ ] **Step 3: Visual QA**

Check desktop and mobile:

- `/services/`
- `/quality-testing/`
- `/services/pcb-assembly-pcba/`
- `/about/`

Acceptance:

- Services and Quality pages feel like real buyer-facing manufacturing pages, not a thin fact list.
- Tables can scroll inside their container on mobile if necessary.
- The whole page must not horizontally overflow.
- No text overlap.
- No template/Togeto/logistics artifact appears.
- No visible AI/search-engine purpose wording.

- [ ] **Step 4: Subagent review**

Ask subagent to review:

- Whether Services and Quality now meet the content-depth bar.
- Whether old-site vocabulary was rewritten conservatively.
- Whether claim boundaries are still intact.
- Whether FAQ/schema sync still works.
- Whether tests are too brittle or missing coverage.

- [ ] **Step 5: Devlog and PR body**

Record:

- Sources read.
- What changed.
- Tests/build/route smoke results.
- Desktop/mobile visual QA status.
- Subagent review outcome.
- Any remaining customer confirmation risks.

## Final Acceptance Criteria

- Services Overview answers which service a buyer should start with based on deliverable and situation.
- Services page includes direct answer, service hierarchy, buyer situation table, service ownership table, supporting capability consolidation, preparation checklist, old-site topic mapping, service boundaries, and FAQ.
- Quality & Testing explains quality planning across lifecycle, inspection/testing method matrix, buyer inputs, records/traceability, special process boundaries, reliability/environmental testing boundaries, certificate/compliance boundaries, non-promises, and FAQ.
- Services and Quality have visible FAQ sections powered by `page.faqs`.
- FAQPage schema remains generated from visible FAQ data only.
- No forbidden claim appears in visible copy, footer, schema, or tests.
- `node --test ...`, `npm run build`, `git diff --check`, route smoke, visual QA, and subagent review pass before PR creation.
