import assert from 'node:assert/strict';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { access, readFile } from 'node:fs/promises';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const rootPath = fileURLToPath(root);
const nodeRequire = createRequire(import.meta.url);
const tsModuleCache = new Map();

const publicRoutes = [
  '/',
  '/services/',
  '/services/pcb-assembly-pcba/',
  '/services/ems-box-build/',
  '/services/component-sourcing-bom-dfm-review/',
  '/services/pcb-fabrication-support/',
  '/quality-testing/',
  '/about/',
  '/official-resources/',
  '/resources/',
  '/contact/',
  '/request-a-quote/',
  '/privacy-policy/',
  '/terms/',
  '/sitemap/',
  '/thank-you/',
];

const routeFiles = [
  'src/app/page.tsx',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/app/services/page.tsx',
  'src/app/services/pcb-assembly-pcba/page.tsx',
  'src/app/services/ems-box-build/page.tsx',
  'src/app/services/component-sourcing-bom-dfm-review/page.tsx',
  'src/app/services/pcb-fabrication-support/page.tsx',
  'src/app/quality-testing/page.tsx',
  'src/app/about/page.tsx',
  'src/app/official-resources/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/request-a-quote/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/sitemap/page.tsx',
  'src/app/thank-you/page.tsx',
];

const disabledDemoRoutes = [
  '/home-1',
  '/home-2',
  '/home-3',
  '/home-4',
  '/home-5',
  '/home-one-page',
  '/home-2-one-page',
  '/home-3-one-page',
  '/home-4-one-page',
  '/home-5-one-page',
  '/service',
  '/service-details/:path*',
  '/portfolio',
  '/portfolio-details/:path*',
  '/team',
  '/team-details/:path*',
  '/shop',
  '/shop-sidebar',
  '/shop-details/:path*',
  '/cart',
  '/checkout',
  '/compare',
  '/wishlist',
  '/price',
  '/testimonial',
  '/faq',
  '/blog',
  '/blog-left-sidebar',
  '/blog-right-sidebar',
  '/blog-details-left-sidebar/:path*',
  '/blog-details-right-sidebar/:path*',
];

const disabledDemoRouteFiles = [
  'src/app/(blog)/blog-details-left-sidebar/[id]/page.tsx',
  'src/app/(blog)/blog-details-right-sidebar/[id]/page.tsx',
  'src/app/(blog)/blog-left-sidebar/page.tsx',
  'src/app/(blog)/blog/page.tsx',
  'src/app/(blog)/blog-right-sidebar/page.tsx',
  'src/app/(portfolio)/portfolio-details/[id]/page.tsx',
  'src/app/(portfolio)/portfolio/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/(service)/service-details/[id]/page.tsx',
  'src/app/(service)/service/page.tsx',
  'src/app/checkout/page.tsx',
  'src/app/price/page.tsx',
  'src/app/(shop)/shop-details/[id]/page.tsx',
  'src/app/(shop)/shop/page.tsx',
  'src/app/(shop)/shop-sidebar/page.tsx',
  'src/app/(team)/team/page.tsx',
  'src/app/(team)/team-details/[id]/page.tsx',
  'src/app/(homes)/home-2/page.tsx',
  'src/app/(homes)/home-3-one-page/page.tsx',
  'src/app/(homes)/home-2-one-page/page.tsx',
  'src/app/(homes)/home-5/page.tsx',
  'src/app/(homes)/home-4/page.tsx',
  'src/app/(homes)/home-3/page.tsx',
  'src/app/(homes)/home-one-page/page.tsx',
  'src/app/(homes)/home-4-one-page/page.tsx',
  'src/app/(homes)/home-5-one-page/page.tsx',
  'src/app/(homes)/home-1/page.tsx',
  'src/app/compare/page.tsx',
  'src/app/cart/page.tsx',
  'src/app/testimonial/page.tsx',
  'src/app/wishlist/page.tsx',
];

async function readProjectFile(path) {
  return readFile(new URL(path, root), 'utf8');
}

function resolveSourceFile(filename) {
  if (path.extname(filename) && existsSync(filename)) return filename;

  for (const suffix of ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx']) {
    const candidate = `${filename}${suffix}`;
    if (existsSync(candidate)) return candidate;
  }

  throw new Error(`Unable to resolve module ${filename}`);
}

function resolveTsRequest(request, parentFilename) {
  if (request.startsWith('@/')) {
    return path.join(rootPath, 'src', request.slice(2));
  }

  if (request.startsWith('.')) {
    return path.resolve(path.dirname(parentFilename), request);
  }

  return null;
}

function loadProjectTsModule(projectPath) {
  return loadTsModuleFile(fileURLToPath(new URL(projectPath, root)));
}

function loadTsModuleFile(filename) {
  const resolvedFilename = resolveSourceFile(filename);
  const cachedModule = tsModuleCache.get(resolvedFilename);
  if (cachedModule) return cachedModule.exports;

  const source = readFileSync(resolvedFilename, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: resolvedFilename,
  }).outputText;

  const module = { exports: {} };
  tsModuleCache.set(resolvedFilename, module);

  const localRequire = (request) => {
    const localPath = resolveTsRequest(request, resolvedFilename);
    return localPath ? loadTsModuleFile(localPath) : nodeRequire(request);
  };
  const wrapper = vm.runInThisContext(
    `(function(exports, require, module, __filename, __dirname) {\n${output}\n})`,
    { filename: resolvedFilename },
  );

  wrapper(module.exports, localRequire, module, resolvedFilename, path.dirname(resolvedFilename));
  return module.exports;
}

test('approved public routes have route files', async () => {
  await Promise.all(
    routeFiles.map((path) => access(new URL(path, root), constants.R_OK)),
  );
});

test('site data exposes only the approved public sitemap routes', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const siteRoutes = await readProjectFile('src/components/venture-site/site-routes.ts');
  const routeData = `${siteData}\n${siteRoutes}`;

  for (const route of publicRoutes.filter((route) => route !== '/thank-you/')) {
    assert.match(routeData, new RegExp(`href: ['"]${route.replace(/[/-]/g, '\\$&')}['"]`));
  }
  assert.match(routeData, /thankYou: ['"]\/thank-you\/['"]/);

  for (const route of [
    '/engineering-support/',
    '/industries/',
    '/resources/blog/',
    '/resources/faq/',
    '/brand/venture-electronics-vs-venture-pcb-pcba/',
    '/services/pcb-fabrication/',
  ]) {
    assert.doesNotMatch(routeData, new RegExp(route.replace(/[/-]/g, '\\$&')));
  }
  assert.doesNotMatch(routeData, /\{ label: ['"]Thank You['"], href: ['"]\/thank-you\/['"] \}/);
});

test('approved page data entries define dedicated visual slots', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  for (const key of [
    'services',
    'pcba',
    'emsBoxBuild',
    'componentSourcingBomDfmReview',
    'pcbFabricationSupport',
    'qualityTesting',
    'about',
    'officialResources',
    'resources',
    'contact',
    'requestQuote',
    'privacyPolicy',
    'terms',
    'sitemap',
    'thankYou',
  ]) {
    assert.match(siteData, new RegExp(`${key}: \\{[\\s\\S]*?visual: pageVisuals\\.`));
  }
});

test('live Venture image slots use buyer-relevant production visuals', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const coreServices = await readProjectFile('src/components/venture-site/home/CoreServicesBlock.tsx');
  const capability = await readProjectFile('src/components/venture-site/home/CapabilityEvidence.tsx');
  const faq = await readProjectFile('src/components/venture-site/home/HomeFAQBlock.tsx');
  const homeHero = await readProjectFile('src/components/venture-site/home/HomeHero.tsx');
  const sourceCss = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');
  const publicCss = await readProjectFile('public/venture-static/venture-exact.css');
  const combined = `${siteData}\n${coreServices}\n${capability}\n${faq}\n${homeHero}\n${sourceCss}\n${publicCss}`;

  assert.doesNotMatch(coreServices, /hero-circuit-globe/);
  assert.match(homeHero, /bg: ["']\/hero-pcba-smt\.jpg["']/);
  assert.match(homeHero, /bg: ["']\/hero-ems-factory\.jpg["']/);
  assert.match(coreServices, /image: ["']\/hero-pcba-smt\.jpg["']/);
  assert.match(coreServices, /image: ["']\/hero-ems-factory\.jpg["']/);
  assert.match(coreServices, /image: ["']\/identity-smt-floor\.jpg["']/);
  assert.match(coreServices, /image: ["']\/identity-pcb-closeup\.jpg["']/);
  assert.match(siteData, /pcba: \{\s+src: ["']\/hero-pcba-smt\.jpg["']/);
  assert.match(siteData, /fabrication: \{\s+src: ["']\/factory-4\.jpg["']/);
  assert.match(capability, /src=["']\/capabilities-machine\.jpg["']/);
  assert.match(faq, /src=["']\/faq-smt-line\.jpg["']/);
  assert.match(sourceCss, /background-image: url\(["']\/hero-pcba-smt\.jpg["']\)/);
  assert.match(publicCss, /background-image: url\(["']\/hero-pcba-smt\.jpg["']\)/);
  assert.doesNotMatch(combined, /our factory/i);
  assert.doesNotMatch(combined, /our EMS factory/i);
  assert.doesNotMatch(combined, /Venture SMT placement and assembly equipment/);
});

test('Venture override CSS stays synchronized between source and public static copy', async () => {
  const sourceOverrides = await readProjectFile('src/app/(homes)/home-6/venture-overrides.css');
  const publicOverrides = await readProjectFile('public/venture-static/venture-overrides.css');

  assert.equal(sourceOverrides, publicOverrides);
  assert.doesNotMatch(sourceOverrides, /Togeto|Transport & Logistics/i);
  assert.match(sourceOverrides, /theme-main\.css/);
});

test('public old-site image pool excludes images not approved for direct publication', () => {
  const imageRoot = path.join(rootPath, 'public/assets/img/venture-old-site');
  const publicImages = readdirSync(imageRoot, { recursive: true })
    .map(String)
    .filter((name) => /\.(?:jpe?g|png|webp)$/i.test(name));
  const manifest = publicImages.join('\n');

  assert.equal(publicImages.length, 34);
  assert.doesNotMatch(manifest, /consumer-electronics\//);
  assert.doesNotMatch(manifest, /customer-visit\//);
  assert.doesNotMatch(manifest, /production-team/);
  assert.doesNotMatch(manifest, /iot-smart-devices\//);
  assert.doesNotMatch(
    manifest,
    /energy-power-electronics\/venture-electronics-energy-power-electronics-pcb-reverse-engineering\.jpg/
  );
  assert.doesNotMatch(
    manifest,
    /engineering-support\/venture-electronics-engineering-support-one-piece-lid-high-performance\.png/
  );
  assert.doesNotMatch(
    manifest,
    /reliability-testing\/venture-electronics-reliability-testing-inverter-pcb-[56]\.jpg/
  );
  assert.doesNotMatch(
    manifest,
    /smt-assembly\/venture-electronics-smt-assembly-high-volume-pcb-assembly-1\.jpg/
  );
});

test('resource catalog downloads are served from local public assets', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const downloadPaths = [
    '/assets/downloads/venture/EN-Venture-Electronics-EMS-Catalog-2023-09-new-1.pdf',
    '/assets/downloads/venture/EN-Venture-Electronics-PCB-Solution-09-1.pdf',
  ];

  for (const downloadPath of downloadPaths) {
    assert.match(siteData, new RegExp(downloadPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    await access(new URL(`public${downloadPath}`, root), constants.R_OK);
  }

  assert.doesNotMatch(
    siteData,
    /https:\/\/www\.venture-mfg\.com\/wp-content\/uploads\/2023\/09\/EN-Venture-Electronics-(?:EMS-Catalog|PCB-Solution)/
  );
});

test('real factory and process images are scoped to evidence slots only', async () => {
  const manifestSource = await readProjectFile('src/components/venture-site/image-manifest.ts');
  const auditManifestSource = await readProjectFile('src/components/venture-site/image-audit-manifest.ts');
  const venturePage = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const identityBlock = await readProjectFile('src/components/venture-site/home/VentureIdentityBlock.tsx');
  const sourceCss = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');
  const publicCss = await readProjectFile('public/venture-static/venture-exact.css');
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const { ventureImages } = loadProjectTsModule('src/components/venture-site/image-manifest.ts');

  assert.equal(Object.keys(ventureImages).length, 9);
  assert.ok(
    Object.values(ventureImages).every((image) =>
      image.src.startsWith('/assets/img/venture-real/') && image.maxDisplayCssPx <= 720
    )
  );
  assert.match(venturePage, /<EvidenceImageBlock/);
  assert.match(identityBlock, /ventureImages\.factoryVisit05/);
  assert.match(identityBlock, /600px/);
  assert.match(sourceCss, /\.venture-site \.stage3-evidence-images/);
  assert.match(sourceCss, /\.venture-site \.identity__media \{[\s\S]*?max-width: 600px/);
  assert.match(sourceCss, /max-width: min\(var\(--evidence-max, 640px\), 100%\)/);
  assert.equal(sourceCss, publicCss);

  assert.deepEqual(pageData.pcba.evidenceImages, [
    {
      title: 'PCB Assembly process context',
      images: ['smtPickAndPlace', 'waveSoldering'],
      afterSectionIndex: 1,
    },
    {
      title: 'Inspection context for PCBA review',
      images: ['aoiInspection', 'firstArticleInspection'],
      afterSectionIndex: 4,
    },
  ]);
  assert.deepEqual(pageData.emsBoxBuild.evidenceImages, [
    {
      title: 'EMS and Box Build process context',
      images: ['boxBuildAssembly', 'finishedProductFunctionTest'],
      afterSectionIndex: 0,
    },
  ]);
  assert.deepEqual(pageData.qualityTesting.evidenceImages, [
    {
      title: 'Inspection and testing process context',
      images: ['firstArticleInspection', 'aoiInspection', 'finishedProductFunctionTest'],
      afterSectionIndex: 0,
    },
  ]);
  assert.deepEqual(pageData.about.evidenceImages, [
    {
      title: 'Production and buyer review context',
      images: ['factoryVisit03', 'smtPickAndPlace'],
      afterSectionIndex: 2,
    },
    {
      title: 'Inspection context',
      images: ['firstArticleInspection', 'aoiInspection'],
      afterSectionIndex: 5,
    },
  ]);

  for (const key of [
    'services',
    'componentSourcingBomDfmReview',
    'pcbFabricationSupport',
    'officialResources',
    'resources',
    'contact',
    'requestQuote',
    'privacyPolicy',
    'terms',
    'sitemap',
    'thankYou',
  ]) {
    assert.equal(pageData[key].evidenceImages, undefined, `${key} should not render evidence images`);
  }

  assert.doesNotMatch(
    manifestSource,
    /sourceUrl|sourcePage|ownershipStatus|allowedSlots|client-confirmation|legacy-site-source/i
  );
  assert.match(auditManifestSource, /sourceUrl/);
  assert.match(auditManifestSource, /ownershipStatus/);
  assert.match(auditManifestSource, /client-confirmation-required/);
  assert.match(auditManifestSource, /legacy-site-source-client-confirmation-required/);
  assert.doesNotMatch(manifestSource, /Confirm people-image|facility ownership before publication/i);
});

test('canonical domain signals use the approved Venture public identity', async () => {
  const layout = await readProjectFile('src/app/layout.tsx');
  const home = await readProjectFile('src/app/page.tsx');
  const metadata = await readProjectFile('src/components/venture-site/pages/page-metadata.ts');
  const channels = await readProjectFile('src/components/venture-site/content/contact-channels.ts');
  const identitySchema = await readProjectFile('src/components/venture-site/schema/site-identity.ts');
  const sitemapRoute = await readProjectFile('src/app/sitemap.ts');
  const robotsRoute = await readProjectFile('src/app/robots.ts');

  assert.match(layout, /metadataBase: siteBaseUrl/);
  assert.match(layout, /ventureIdentityStructuredData/);
  assert.match(identitySchema, /CONTACT_CHANNELS\.currentMainWebsite/);
  assert.match(channels, /currentMainWebsite: "https:\/\/www\.venture-mfg\.com\/"/);
  assert.doesNotMatch(layout, /sameAs/);
  assert.doesNotMatch(layout, /contactPoint/);
  assert.doesNotMatch(identitySchema, /sameAs/);
  assert.doesNotMatch(identitySchema, /contactPoint/);
  assert.doesNotMatch(identitySchema, /faxNumber/);
  assert.match(identitySchema, /"@id": "https:\/\/www\.venture-mfg\.com\/#organization"/);
  assert.match(home, /homeCanonical = 'https:\/\/www\.venture-mfg\.com\/'/);
  assert.match(home, /canonical: homeCanonical/);
  assert.match(metadata, /canonical: page\.href/);
  assert.match(metadata, /page\.seoTitle \?\? `\$\{page\.label\} \| \$\{siteName\}`/);
  assert.match(metadata, /page\.metaDescription \?\? page\.summary/);
  assert.match(sitemapRoute, /sitemapLinks\.map/);
  assert.match(sitemapRoute, /https:\/\/www\.venture-mfg\.com/);
  assert.match(robotsRoute, /disallow: \['\/thank-you\/'\]/);
  assert.match(robotsRoute, /sitemap: `\$\{siteBaseUrl\}\/sitemap\.xml`/);
});

test('metadata routes return the approved indexable URL set', () => {
  const { default: sitemap } = loadProjectTsModule('src/app/sitemap.ts');
  const { default: robots } = loadProjectTsModule('src/app/robots.ts');
  const { pageData, sitemapLinks } = loadProjectTsModule('src/components/venture-site/site-data.ts');

  const expectedUrls = sitemapLinks.map((link) =>
    new URL(link.href, 'https://www.venture-mfg.com').toString(),
  );
  const actualUrls = sitemap().map((entry) => entry.url);
  const robotsOutput = robots();

  assert.deepEqual(actualUrls, expectedUrls);
  assert.ok(actualUrls.every((url) => url.startsWith('https://www.venture-mfg.com/')));
  assert.ok(actualUrls.every((url) => !url.includes('/thank-you/')));
  assert.ok(actualUrls.every((url) => !url.includes('venture-pcba.com')));
  assert.deepEqual(robotsOutput.rules, {
    userAgent: '*',
    allow: '/',
    disallow: ['/thank-you/'],
  });
  assert.equal(robotsOutput.sitemap, 'https://www.venture-mfg.com/sitemap.xml');
  assert.equal(pageData.thankYou.noIndex, true);
  assert.equal(pageData.thankYou.showRelatedLinks, false);
});

test('official resources categorizes Venture domain roles without expanding official schema or footer links', async () => {
  const { domainGovernanceGroups, navItems, pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const layout = await readProjectFile('src/app/layout.tsx');
  const footer = await readProjectFile('src/components/venture-site/site/Footer.tsx');
  const header = await readProjectFile('src/components/venture-site/site/Header.tsx');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const pageRenderer = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const sourceCss = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');

  const quickAnswerSections = pageData.officialResources.sections.filter((section) => section.kind === 'quick-answer');
  const domainSections = pageData.officialResources.sections.filter((section) => section.kind === 'domain-cards');
  const domainTableSections = pageData.officialResources.sections.filter((section) => section.kind === 'domain-table');
  const faqSections = pageData.officialResources.sections.filter((section) => section.kind === 'faq');
  const renderedDomainSections = pageData.officialResources.sections.filter((section) =>
    ['domain-cards', 'domain-table'].includes(section.kind),
  );

  assert.equal(pageData.officialResources.title, 'Official Websites, Domains & Company Entities');
  assert.equal(pageData.officialResources.label, 'Official Websites, Domains & Company Entities');
  assert.equal(pageData.officialResources.heroDensity, 'compact');
  assert.equal(pageData.officialResources.showHeroVisual, false);
  assert.match(pageData.officialResources.seoTitle, /Official Venture Electronics Websites/);
  assert.match(pageData.officialResources.role, /Buyer guide/i);
  assert.match(pageData.officialResources.summary, /which channels buyers should use for inquiries/i);
  assert.doesNotMatch(pageData.officialResources.role, /source-of-truth|public entity guidance/i);
  assert.doesNotMatch(pageData.officialResources.summary, /source-of-truth|AI systems/i);
  assert.equal(quickAnswerSections.length, 1);
  assert.equal(
    quickAnswerSections[0].quickAnswers.find((row) => row.question === 'Current official main website').answer,
    'venture-mfg.com',
  );
  assert.equal(
    quickAnswerSections[0].quickAnswers.find((row) => row.question === 'Main inquiry path').answer,
    'info@venture-mfg.com',
  );
  assert.equal(
    quickAnswerSections[0].quickAnswers.find((row) => row.question === 'Not Venture-owned domain').answer,
    'venturepcb.com',
  );
  assert.deepEqual(
    quickAnswerSections[0].links.map((link) => link.href),
    [
      '#current-website',
      '#legacy-assets',
      '#associated-sites',
      '#historical-domains',
      '#reserved-domains',
      '#not-official',
      '#verification',
      '#faq',
    ],
  );
  assert.ok(
    pageData.officialResources.sections.some((section) =>
      section.items?.some((item) => item.includes('Last reviewed: 2026-06-28')),
    ),
  );
  assert.doesNotMatch(siteData, /AI systems|search engines/i);
  assert.doesNotMatch(siteData, /client-provided|pending final client confirmation|search results/i);
  assert.equal(domainSections.length, 5);
  assert.equal(domainTableSections.length, 1);
  assert.equal(faqSections.length, 1);
  assert.equal(pageData.officialResources.faqs.length, 6);
  const aboutNav = navItems.find((item) => item.label === 'About');
  const resourcesNav = navItems.find((item) => item.label === 'Resources');
  assert.ok(aboutNav.children.some((child) => child.label === 'Official Websites, Domains & Company Entities' && child.href === '/official-resources/'));
  assert.ok(resourcesNav.children.every((child) => child.href !== '/official-resources/'));
  assert.ok(navItems.some((item) => item.label === 'Contact' && item.href === '/contact/'));
  assert.ok(
    navItems.every((item) => !(item.label === 'Official Websites' && item.href === '/official-resources/')),
    'Official Websites should not be a standalone top-level nav item',
  );
  assert.match(header, /usePathname/);
  assert.match(header, /normalizePath/);
  assert.match(header, /aria-current=\{active \? "page" : undefined\}/);
  assert.match(pageRenderer, /stage3-quick-answer/);
  assert.match(pageRenderer, /stage3-domain-card/);
  assert.match(pageRenderer, /stage3-domain-table/);
  assert.match(pageRenderer, /What it is/);
  assert.match(pageRenderer, /How it is used/);
  assert.match(pageRenderer, /Buyer guidance/);
  assert.doesNotMatch(pageRenderer, /Safe for public inquiries/);
  assert.match(pageRenderer, /stage3-page-faq/);
  assert.match(sourceCss, /\.venture-site \.stage3-quick-answer/);
  assert.match(sourceCss, /\.venture-site \.stage3-domain-grid/);
  assert.match(sourceCss, /\.venture-site \.stage3-domain-table/);
  assert.match(sourceCss, /\.venture-site \.stage3-page-faq/);
  assert.deepEqual(
    domainGovernanceGroups.map((group) => group.title),
    [
      'Current official main website',
      'Legacy / vertical web assets',
      'Venture-owned or associated web assets',
      'Historical email / redirected domains',
      'Registered / reserved / unused / candidate domains',
      'Not Venture-owned / not official',
    ],
  );
  assert.deepEqual(
    renderedDomainSections.map((section) => section.title),
    domainGovernanceGroups.map((group) => group.title),
  );

  const expectedDomains = [
    'venture-mfg.com',
    'venture-pcba.com',
    'pcb-supplier.com',
    'v-cst.com',
    'venturegroup-mfg.com',
    'venturegroup-mfg.net',
    'uni-venture.com',
    'venture-pcb.com',
    'ventureems.com',
    'venture-ems.com',
    'venturepcba.com',
    'venturepcb.com',
  ];

  for (const domain of expectedDomains) {
    const domainRecord = domainGovernanceGroups
      .flatMap((group) => group.domains)
      .find((record) => record.domain === domain);

    assert.ok(domainRecord, `${domain} should be listed in domain governance data`);
    assert.ok(domainRecord.currentRole, `${domain} should include a current role`);
    assert.ok(domainRecord.howItIsUsed, `${domain} should include how it is used`);
    assert.ok(domainRecord.buyerGuidance, `${domain} should include buyer guidance`);
    assert.ok(domainRecord.safePublicInquiries, `${domain} should include inquiry safety guidance`);
    assert.ok(
      renderedDomainSections.some((section) => section.domainRecords?.some((record) => record.domain === domain)),
      `${domain} should render through structured domain data, not a flattened facts bullet`,
    );
    assert.match(siteData, new RegExp(domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.equal(
    domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === 'venture-mfg.com').safePublicInquiries,
    'Yes - use the current Venture Electronics contact path on venture-mfg.com.',
  );
  assert.equal(
    domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === 'pcb-supplier.com').currentRole,
    'Venture-owned / associated web asset. Not the current official main Venture Electronics website.',
  );
  assert.equal(
    domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === 'v-cst.com').currentRole,
    'Related company / registry-linked asset.',
  );
  assert.equal(
    domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === 'venturepcb.com').currentRole,
    'Not Venture-owned / not official.',
  );
  assert.equal(
    domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === 'venturepcb.com').buyerGuidance,
    'venturepcb.com is not owned or operated by Venture Electronics and should not be used for Venture Electronics inquiries.',
  );
  assert.equal(
    domainTableSections[0].title,
    'Registered / reserved / unused / candidate domains',
  );

  for (const linkedDomain of ['venture-mfg.com', 'venture-pcba.com', 'pcb-supplier.com']) {
    assert.ok(
      domainGovernanceGroups.flatMap((group) => group.domains).find((record) => record.domain === linkedDomain).href,
      `${linkedDomain} should have an explicit active link`,
    );
  }

  for (const unsafeHrefDomain of [
    'v-cst.com',
    'venturegroup-mfg.com',
    'venturegroup-mfg.net',
    'uni-venture.com',
    'venture-pcb.com',
    'ventureems.com',
    'venture-ems.com',
    'venturepcba.com',
    'venturepcb.com',
  ]) {
    assert.doesNotMatch(
      siteData,
      new RegExp(`href: ['"]https?:\\/\\/(?:www\\.)?${unsafeHrefDomain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`),
      `${unsafeHrefDomain} should be plain text, not an active official website link`,
    );
    assert.doesNotMatch(footer, new RegExp(unsafeHrefDomain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.doesNotMatch(layout, new RegExp(unsafeHrefDomain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(layout, /sameAs/);
  assert.match(footer, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(footer, /CONTACT_CHANNELS\.generalEmail/);
  assert.match(footer, /CONTACT_CHANNELS\.rfqEmail === CONTACT_CHANNELS\.generalEmail/);
  assert.match(footer, /Email \/ RFQ: \$\{CONTACT_CHANNELS\.rfqEmail\}/);
  assert.match(footer, /General inquiry: \$\{CONTACT_CHANNELS\.generalEmail\}/);
  assert.doesNotMatch(footer, /support@venture-mfg\.com/);
});

test('buyer-facing content tables are supported by the shared Venture page renderer', async () => {
  const pageTypes = await readProjectFile('src/components/venture-site/content/page-types.ts');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const pageRenderer = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const css = await readProjectFile('src/app/(homes)/home-6/venture-exact.css');

  assert.match(pageTypes, /type ContentTableColumn/);
  assert.match(pageTypes, /table\?: ContentTable/);
  assert.match(pageTypes, /"content-table"/);
  assert.match(siteData, /kind: "content-table"/);
  assert.match(pageRenderer, /function ContentTable/);
  assert.match(pageRenderer, /stage3-content-table/);
  assert.match(pageRenderer, /pageFaqs/);
  assert.match(css, /\.venture-site \.stage3-content-table/);
});

test('about page reads as a buyer-facing company page with claim boundaries', () => {
  const { domainGovernanceGroups, pageData, routes } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const aboutSections = pageData.about.sections;
  const aboutText = JSON.stringify(aboutSections);
  const nonCanonicalDomains = domainGovernanceGroups
    .flatMap((group) => group.domains.map((record) => record.domain))
    .filter((domain) => domain !== 'venture-mfg.com');

  assert.equal(pageData.about.title, 'About Venture Electronics');
  assert.match(pageData.about.seoTitle, /PCB Assembly, PCBA & EMS Manufacturing Partner in China/);
  assert.ok(aboutSections.some((section) => section.title === 'Company facts' && section.kind === 'content-table'));
  assert.ok(aboutSections.some((section) => section.title === 'Who we are'));
  assert.ok(aboutSections.some((section) => section.title === 'What Venture supports' && section.kind === 'content-table'));
  assert.ok(aboutSections.some((section) => section.title === 'How Venture works with buyers'));
  assert.ok(aboutSections.some((section) => section.title === 'Project fit' && section.kind === 'content-table'));
  assert.ok(aboutSections.some((section) => section.title === 'How quality scope is confirmed' && section.kind === 'content-table'));

  const officialDomainTeaser = aboutSections.find(
    (section) => section.title === 'Official websites, domains and company entity clarification',
  );
  assert.ok(officialDomainTeaser);
  assert.match(officialDomainTeaser.body, /current official main website/i);
  assert.deepEqual(officialDomainTeaser.links, [
    { label: 'View Official Websites, Domains & Company Entities', href: routes.officialResources },
  ]);
  assert.deepEqual(pageData.about.relatedLinks, [
    { label: 'Official Websites, Domains & Company Entities', href: routes.officialResources },
    { label: 'Services', href: routes.services },
    { label: 'RFQ Checklist', href: routes.resources },
  ]);
  assert.equal(pageData.about.cta.label, 'Request a Quote');
  assert.equal(pageData.about.secondaryCta.label, 'View RFQ Checklist');

  for (const domain of nonCanonicalDomains) {
    assert.doesNotMatch(aboutText, new RegExp(domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(aboutText, /24\/7|24h response|No MOQ|Since 2010|IPC Class 3|IATF|BSCI/);
});

test('Services page explains service hierarchy without rebuilding thin legacy pages', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const enhancements = await readProjectFile('src/components/venture-site/pages/PageEnhancements.tsx');

  assert.match(siteData, /How Venture services fit together/);
  assert.match(siteData, /PCB Assembly \/ PCBA is the main buyer entry point/);
  assert.match(siteData, /Turnkey PCBA is a delivery model/);
  assert.match(siteData, /EMS & Box Build is a higher manufacturing scope/);
  assert.match(siteData, /Supporting capabilities that should not become confusing top-level pages/);
  assert.doesNotMatch(enhancements, /CoreServicesBlock/);
  assert.doesNotMatch(enhancements, /VentureIdentityBlock/);
  assert.doesNotMatch(siteData, /Home 01|service-details|Ocean Freight|Warehousing/);
});

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

test('PCBA page is a conservative buyer conversion page', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /PCB Assembly capability review/);
  assert.match(siteData, /PCB Assembly delivery models/);
  assert.match(siteData, /Assembly process overview/);
  assert.match(siteData, /Schedule boundary/);
  assert.match(siteData, /Reviewed by project/);
  assert.doesNotMatch(siteData, /1-5 days|10-16 days|No MOQ|IPC Class 3/);
});

test('Quality page explains testing methods with project-specific boundaries', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /Inspection and testing method matrix/);
  assert.match(siteData, /SPI/);
  assert.match(siteData, /AOI/);
  assert.match(siteData, /X-Ray/);
  assert.match(siteData, /ICT/);
  assert.match(siteData, /FCT/);
  assert.match(siteData, /Buyer inputs required for test planning/);
  assert.match(siteData, /Records and traceability discussion/);
  assert.doesNotMatch(siteData, /every project includes ICT|every project includes FCT|guaranteed testing/);
});

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

test('P1 buyer-support pages include human-friendly manufacturing guidance without overclaims', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const composer = await readProjectFile('src/components/venture-site/pages/RfqEmailComposer.tsx');
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');

  const expectedTables = [
    [pageData.emsBoxBuild, 'EMS & Box Build scope matrix'],
    [pageData.componentSourcingBomDfmReview, 'BOM risk review matrix'],
    [pageData.pcbFabricationSupport, 'Fabrication inputs buyers should provide'],
    [pageData.resources, 'RFQ checklist'],
    [pageData.contact, 'Choose the right contact path'],
  ];

  for (const [page, title] of expectedTables) {
    const section = page.sections.find((item) => item.kind === 'content-table' && item.title === title);
    assert.ok(section, `${page.href} should include ${title}`);
    assert.ok(section.table.columns.length > 0, `${title} should define columns`);
    assert.ok(section.table.rows.length > 0, `${title} should define rows`);

    for (const row of section.table.rows) {
      for (const column of section.table.columns) {
        assert.ok(row[column.key], `${title} row should include ${column.key}`);
      }
    }
  }

  assert.match(siteData, /EMS & Box Build scope matrix/);
  assert.match(siteData, /When a PCBA project becomes EMS or Box Build/);
  assert.match(siteData, /BOM risk review matrix/);
  assert.match(siteData, /Venture Electronics does not replace parts without buyer approval/);
  assert.match(siteData, /Fabrication inputs buyers should provide/);
  assert.match(siteData, /What stays consolidated instead of becoming thin pages/);
  assert.match(siteData, /RFQ checklist/);
  assert.match(siteData, /Choose the right contact path/);
  assert.match(siteData, /This first-launch RFQ page does not upload files directly/);
  assert.match(siteData, /Schedule is reviewed by project/);
  assert.match(siteData, /Email \/ RFQ: \$\{CONTACT_CHANNELS\.rfqEmail\}/);
  assert.match(composer, /Contact person/);
  assert.match(composer, /Files available/);
  assert.match(composer, /Delivery destination/);
  assert.match(composer, /Testing needs/);
  assert.match(composer, /Copy RFQ Details/);
  assert.match(composer, /navigator\.clipboard\.writeText/);
  assert.doesNotMatch(
    `${siteData}\n${composer}`,
    /24\/7|24h response|No MOQ for all projects|fixed lead time for every project|customer logos|IPC Class 3|IATF|BSCI|aerospace|defense/i,
  );
});

function collectVisiblePageText(page) {
  function collect(value) {
    if (!value) return '';
    if (typeof value === 'string') return `${value} `;
    if (Array.isArray(value)) return value.map(collect).join('');
    if (typeof value === 'object') return Object.values(value).map(collect).join('');
    return '';
  }

  const visibleSections = page.sections.map((section) => ({
    title: section.title,
    label: section.label,
    body: section.body,
    items: section.items,
    links: section.links?.map((link) => link.label),
    quickAnswers: section.quickAnswers,
    table: section.table,
    faqItems: section.faqItems,
  }));

  return collect({
    title: page.title,
    summary: page.summary,
    directAnswer: page.directAnswer,
    sections: visibleSections,
    faqs: page.faqs,
  });
}

test('four service child pages have page-specific buyer-facing GEO depth', () => {
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const expectedSectionsByPage = {
    pcba: [
      'What PCB Assembly / PCBA means for Venture Electronics',
      'PCB Assembly delivery models',
      'Assembly methods and project types',
      'How Turnkey PCBA connects fabrication, sourcing, assembly and testing',
      'BOM and component sourcing relationship',
      'Inspection and testing dependency',
      'When to move from PCBA to EMS & Box Build',
    ],
    emsBoxBuild: [
      'When a PCBA project becomes EMS or Box Build',
      'EMS & Box Build scope matrix',
      'System-level testing and configuration',
      'Packaging, labeling and delivery preparation',
      'EMS & Box Build boundaries',
    ],
    componentSourcingBomDfmReview: [
      'Why BOM and DFM review matter before PCBA',
      'BOM risk review matrix',
      'Component sourcing rules buyers should define',
      'Customer-approved alternative flow',
      'DFM / DFA review areas',
      'What this page does not promise',
    ],
    pcbFabricationSupport: [
      'PCB Fabrication Support for assembly-ready boards',
      'Fabrication inputs buyers should provide',
      'How fabrication decisions affect PCB Assembly',
      'Board capability categories to review',
      'Panelization and assembly preparation',
      'Fabrication-to-assembly review flow',
      'What stays consolidated instead of becoming thin pages',
      'PCB Fabrication Support boundaries',
    ],
  };

  for (const [pageKey, expectedSections] of Object.entries(expectedSectionsByPage)) {
    const page = pageData[pageKey];
    const sectionTitles = page.sections.map((section) => section.title);
    const visibleText = collectVisiblePageText(page);

    for (const expectedSection of expectedSections) {
      assert.ok(sectionTitles.includes(expectedSection), `${page.href} is missing ${expectedSection}`);
      assert.match(visibleText, new RegExp(expectedSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }

    assert.doesNotMatch(
      visibleText,
      /24\/7|24h response|No MOQ|Since 2010|IPC Class 3|IATF|BSCI|Aerospace|Defense|all under one roof|every project includes every test/i,
      `${page.href} should not expose forbidden or unsupported claims`,
    );
  }
});

test('four service child pages expose visible FAQ content for FAQPage schema', () => {
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const { buildPageStructuredData } = loadProjectTsModule('src/components/venture-site/schema/structured-data.ts');

  for (const page of [
    pageData.pcba,
    pageData.emsBoxBuild,
    pageData.componentSourcingBomDfmReview,
    pageData.pcbFabricationSupport,
  ]) {
    assert.ok(page.faqs?.length >= 8, `${page.href} should have at least 8 FAQs`);
    assert.ok(
      page.sections.some((section) => section.kind === 'faq'),
      `${page.href} should render a visible FAQ section`,
    );

    const graph = buildPageStructuredData(page)['@graph'];
    const faq = graph.find((entry) => entry['@type'] === 'FAQPage');
    assert.ok(faq, `${page.href} should emit FAQPage schema`);
    assert.equal(faq.mainEntity.length, page.faqs.length);

    for (const [index, pageFaq] of page.faqs.entries()) {
      assert.equal(faq.mainEntity[index].name, pageFaq.question);
      assert.equal(faq.mainEntity[index].acceptedAnswer.text, pageFaq.answer);
    }
  }
});

test('four service child pages are not thin placeholder pages', () => {
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const minimumTextChars = {
    pcba: 12000,
    emsBoxBuild: 9000,
    componentSourcingBomDfmReview: 8500,
    pcbFabricationSupport: 8500,
  }

  for (const [pageKey, minimumLength] of Object.entries(minimumTextChars)) {
    const text = collectVisiblePageText(pageData[pageKey]);
    assert.ok(
      text.length >= minimumLength,
      `${pageData[pageKey].href} visible content is still too thin: ${text.length} chars`,
    );
  }
});

test('public contact and RFQ paths use the centralized approved email channel', async () => {
  const page = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const composer = await readProjectFile('src/components/venture-site/pages/RfqEmailComposer.tsx');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const footer = await readProjectFile('src/components/venture-site/site/Footer.tsx');
  const channels = await readProjectFile('src/components/venture-site/content/contact-channels.ts');

  const combined = `${page}\n${composer}\n${siteData}\n${footer}\n${channels}`;

  assert.match(combined, /info@venture-mfg\.com/);
  assert.doesNotMatch(combined, /support@venture-mfg\.com/);
  assert.match(channels, /rfqEmail:\s*"info@venture-mfg\.com"/);
  assert.match(siteData, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(siteData, /CONTACT_CHANNELS\.generalEmail/);
  assert.match(composer, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(composer, /Prepare RFQ Email/);
  assert.match(composer, /Copy RFQ Details/);
  assert.match(composer, /mailto:/);
  assert.match(page, /const isMailto = href\.startsWith\("mailto:"\)/);
  assert.match(page, /<a href=\{row\.href\} \{\.\.\.getExternalAnchorProps\(row\.href\)\}>/);
});

test('Venture pages emit conservative page-level structured data', () => {
  const { domainGovernanceGroups, pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const {
    buildPageStructuredData,
    serviceSchemaPages,
  } = loadProjectTsModule('src/components/venture-site/schema/structured-data.ts');
  const { ventureIdentityStructuredData } = loadProjectTsModule('src/components/venture-site/schema/site-identity.ts');

  assert.deepEqual(serviceSchemaPages, [
    '/services/pcb-assembly-pcba/',
    '/services/ems-box-build/',
    '/services/component-sourcing-bom-dfm-review/',
    '/services/pcb-fabrication-support/',
    '/quality-testing/',
  ]);

  const pcbaGraph = buildPageStructuredData(pageData.pcba)['@graph'];
  assert.ok(pcbaGraph.some((entry) => entry['@type'] === 'BreadcrumbList'));
  assert.ok(pcbaGraph.some((entry) => entry['@type'] === 'Service' && entry.serviceType === 'PCB Assembly / PCBA'));
  assert.ok(pcbaGraph.some((entry) => entry['@type'] === 'FAQPage'));
  assert.ok(JSON.stringify(pcbaGraph).includes('https://www.venture-mfg.com/#organization'));
  assert.ok(!JSON.stringify(pcbaGraph).includes('Wei Chi'));

  const resourcesGraph = buildPageStructuredData(pageData.resources)['@graph'];
  assert.ok(resourcesGraph.some((entry) => entry['@type'] === 'FAQPage'));

  for (const page of [pageData.services, pageData.qualityTesting]) {
    const graph = buildPageStructuredData(page)['@graph'];
    const faq = graph.find((entry) => entry['@type'] === 'FAQPage');
    assert.ok(faq, `${page.href} should emit FAQPage schema from visible page FAQs`);
    assert.equal(
      faq.mainEntity.length,
      page.faqs.length,
      `${page.href} FAQPage schema should stay synced with visible page FAQs`,
    );
    for (const item of page.faqs) {
      assert.ok(
        JSON.stringify(faq).includes(item.question),
        `${page.href} FAQPage schema should include visible FAQ question: ${item.question}`,
      );
    }
  }

  const officialResourcesGraph = buildPageStructuredData(pageData.officialResources)['@graph'];
  const officialResourcesJson = JSON.stringify(officialResourcesGraph);
  const domainStatusMap = officialResourcesGraph.find((entry) => entry['@type'] === 'ItemList');
  const officialResourcesFaq = officialResourcesGraph.find((entry) => entry['@type'] === 'FAQPage');
  const expectedDomains = domainGovernanceGroups.flatMap((group) =>
    group.domains.map((record) => record.domain),
  );
  const nonCanonicalDomains = expectedDomains.filter((domain) => domain !== 'venture-mfg.com');

  assert.ok(domainStatusMap);
  assert.equal(domainStatusMap.name, 'Venture Electronics domain status map');
  assert.equal(domainStatusMap.itemListElement.length, expectedDomains.length);
  assert.ok(
    domainStatusMap.itemListElement.every((entry) => entry.item?.['@type'] === 'Thing'),
    'Domain status ItemList entries should remain clarification Things, not Organization or WebSite nodes',
  );

  const domainStatusJson = JSON.stringify(domainStatusMap);
  for (const domain of expectedDomains) {
    assert.ok(domainStatusJson.includes(domain), `${domain} should appear in the runtime ItemList`);
  }

  assert.ok(officialResourcesJson.includes('venturepcb.com'));
  assert.doesNotMatch(officialResourcesJson, /https?:\/\/(?:www\.)?venturepcb\.com/);
  assert.ok(officialResourcesFaq);
  assert.equal(officialResourcesFaq.mainEntity.length, 6);
  assert.doesNotMatch(officialResourcesJson, /sameAs/);

  assert.ok(
    officialResourcesGraph.every((entry) => !['Organization', 'WebSite'].includes(entry['@type'])),
    'Page-level structured data should not redefine Organization or WebSite identity',
  );

  const identityGraph = ventureIdentityStructuredData['@graph'];
  const identityJson = JSON.stringify(ventureIdentityStructuredData);
  const organization = identityGraph.find((entry) => entry['@type'] === 'Organization');
  const website = identityGraph.find((entry) => entry['@type'] === 'WebSite');

  assert.equal(organization.url, 'https://www.venture-mfg.com/');
  assert.equal(website.url, 'https://www.venture-mfg.com/');
  assert.doesNotMatch(identityJson, /sameAs/);
  assert.doesNotMatch(identityJson, /contactPoint/);

  for (const domain of nonCanonicalDomains) {
    assert.ok(
      domainStatusJson.includes(domain),
      `${domain} may appear inside the domain-status ItemList`,
    );
    assert.doesNotMatch(
      identityJson,
      new RegExp(domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
      `${domain} should not appear in Organization/WebSite schema`,
    );
  }
});

test('Venture route renderer injects page-level structured data', async () => {
  const page = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');

  assert.match(page, /buildPageStructuredData/);
  assert.match(page, /<StructuredData data=\{structuredData\}/);
});

test('claim evidence matrix documents capability claim boundaries', async () => {
  const matrix = await readFile(
    new URL('../docs/venture-content/claim-evidence-matrix.md', root),
    'utf8',
  );

  for (const expected of [
    '# Venture Claim Evidence Matrix',
    'Claim level',
    'Source / evidence needed',
    'Public wording rule',
    'SMT assembly',
    'SPI / AOI / FAI / X-Ray',
    'ICT / FCT',
    'Three-proof coating / conformal coating',
    'Certificates and standards',
    'Do not publish legal relationship claims until the customer confirms what can be public.',
  ]) {
    assert.match(matrix, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(matrix, /Wei Chi|WeiChi/);
});

test('homepage emits structured data for visible buyer FAQ content', async () => {
  const home = await readProjectFile('src/app/page.tsx');
  const homeFaq = await readProjectFile('src/components/venture-site/home/HomeFAQBlock.tsx');
  const { buildHomeStructuredData } = loadProjectTsModule('src/components/venture-site/schema/structured-data.ts');
  const { homeFaqs } = loadProjectTsModule('src/components/venture-site/site-data.ts');

  assert.match(home, /buildHomeStructuredData/);
  assert.match(home, /<StructuredData data=\{homeStructuredData\}/);
  assert.match(homeFaq, /homeFaqs\.map/);

  const graph = buildHomeStructuredData({
    title: 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner',
    description:
      'China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner with turnkey PCBA, sourcing, testing, and box build support.',
    faqs: homeFaqs,
  })['@graph'];

  assert.ok(graph.some((entry) => entry['@type'] === 'BreadcrumbList'));
  const faq = graph.find((entry) => entry['@type'] === 'FAQPage');
  assert.ok(faq);
  assert.equal(faq.mainEntity.length, 5);
});

test('approved Venture content does not expose internal implementation boundaries', async () => {
  const files = await Promise.all([
    readProjectFile('src/app/layout.tsx'),
    readProjectFile('src/components/venture-site/site-data.ts'),
    readProjectFile('src/components/venture-site/pages/VenturePage.tsx'),
    readProjectFile('src/components/venture-site/site/Footer.tsx'),
    readProjectFile('src/components/venture-home/home-six-content.tsx'),
  ]);
  const combined = files.join('\n');

  for (const phrase of [
    'Current placeholder boundary',
    'RFQ form placeholder',
    'Placeholder only',
    'What is intentionally not expanded',
    'Claim boundary',
    'Public claim limits',
    'Scope that stays out of this PR',
    'Language to avoid',
    'Evidence boundary',
    'Publishing boundary',
    'First-release service structure',
    'First-release GEO site shell',
    'Public-safe company facts',
    'Launch-safe homepage order',
    'unconfirmed asset modules hidden',
    'public-safe draft wording',
    'evidence-bounded',
    'final facts are confirmed',
  ]) {
    assert.doesNotMatch(combined, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('RFQ launch path is mailto-only and has no inactive visual form', async () => {
  const page = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const composer = await readProjectFile('src/components/venture-site/pages/RfqEmailComposer.tsx');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(page, /<RfqEmailComposer \/>/);
  assert.match(composer, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(composer, /mailto:/);
  assert.match(composer, /Prepare RFQ Email/);
  assert.match(siteData, /cta: \{ label: ["']Prepare RFQ Email["'], href: routes\.requestQuote \}/);
  assert.doesNotMatch(composer, /type=["']file["']/);
  assert.doesNotMatch(composer, /alert\(JSON\.stringify/);
});

test('legal and utility pages use plain headers with no related link block', async () => {
  const page = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(page, /stage3-plain-header/);
  assert.match(page, /showHeroHeader = page\.showHeroHeader !== false/);

  for (const key of ['privacyPolicy', 'terms', 'sitemap', 'thankYou']) {
    assert.match(
      siteData,
      new RegExp(`${key}: \\{[\\s\\S]*?showHeroHeader: false,[\\s\\S]*?showHeroVisual: false,[\\s\\S]*?showRelatedLinks: false,`)
    );
  }
});

test('unconfirmed homepage asset modules are not part of the live homepage order', async () => {
  const home = await readProjectFile('src/components/venture-home/home-six-content.tsx');
  const catalog = await readProjectFile('src/components/venture-site/home/CatalogBanner.tsx');
  const factory = await readProjectFile('src/components/venture-site/home/FactoryShowcase.tsx');
  const blog = await readProjectFile('src/components/venture-site/home/HomeResourcesTeaser.tsx');

  assert.doesNotMatch(home, /<CatalogBanner|<FactoryShowcase|<HomeResourcesTeaser/);
  assert.match(catalog, /return null/);
  assert.match(factory, /return null/);
  assert.match(blog, /return null/);
});

test('demo template routes are redirected away from public access', async () => {
  const nextConfig = await readProjectFile('next.config.mjs');

  for (const route of disabledDemoRoutes) {
    assert.match(nextConfig, new RegExp(`['"]${route.replace(/[/*:-]/g, '\\$&')}['"]`));
  }
  assert.match(nextConfig, /disabledDemoRoutes\.map/);
  assert.match(nextConfig, /destination: ['"]\/['"]/);
});

test('demo template route files are removed from the app router tree', async () => {
  for (const routeFile of disabledDemoRouteFiles) {
    await assert.rejects(
      access(new URL(routeFile, root), constants.R_OK),
      /ENOENT/,
    );
  }
});
