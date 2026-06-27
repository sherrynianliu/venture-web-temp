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
      images: ['firstArticleInspection', 'aoiInspection'],
      afterSectionIndex: 0,
    },
  ]);
  assert.deepEqual(pageData.about.evidenceImages, [
    {
      title: 'Factory visit and production review context',
      images: ['factoryVisit03', 'factoryVisit04'],
      afterSectionIndex: 1,
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
  const sitemapRoute = await readProjectFile('src/app/sitemap.ts');
  const robotsRoute = await readProjectFile('src/app/robots.ts');

  assert.match(layout, /metadataBase: siteBaseUrl/);
  assert.match(layout, /url: 'https:\/\/www\.venture-mfg\.com\/'/);
  assert.doesNotMatch(layout, /sameAs/);
  assert.doesNotMatch(layout, /contactPoint/);
  assert.doesNotMatch(layout, /faxNumber/);
  assert.match(layout, /'@id': 'https:\/\/www\.venture-mfg\.com\/#organization'/);
  assert.match(home, /homeCanonical = 'https:\/\/www\.venture-mfg\.com\/'/);
  assert.match(home, /canonical: homeCanonical/);
  assert.match(metadata, /canonical: page\.href/);
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

test('public Venture domain outputs exclude unapproved domain candidates', async () => {
  const publicFiles = await Promise.all([
    readProjectFile('src/app/layout.tsx'),
    readProjectFile('src/app/page.tsx'),
    readProjectFile('src/app/robots.ts'),
    readProjectFile('src/app/sitemap.ts'),
    readProjectFile('src/components/venture-site/site-routes.ts'),
    readProjectFile('src/components/venture-site/site-data.ts'),
    readProjectFile('src/components/venture-site/home/BrandAuthorityTeaser.tsx'),
    readProjectFile('src/components/venture-site/site/Footer.tsx'),
    readProjectFile('src/components/social/social-box.tsx'),
  ]);
  const combined = publicFiles.join('\n');

  assert.match(combined, /venture-mfg\.com/);
  assert.match(combined, /venture-pcba\.com/);
  assert.match(combined, /support@venture-mfg\.com/);

  for (const forbidden of [
    'venturepcba.com',
    'venture-pcb.com',
    'ventureems.com',
    'venture-ems.com',
    'venturepcb.com',
    'pcb-supplier.com',
    'v-cst.com',
    'uni-venture.com',
    'venturegroup-mfg.net',
    'venturegroup-mfg.com',
    'vk.com/venturepcb',
  ]) {
    assert.doesNotMatch(combined, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('public contact and RFQ paths show both approved email channels', async () => {
  const page = await readProjectFile('src/components/venture-site/pages/VenturePage.tsx');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const footer = await readProjectFile('src/components/venture-site/site/Footer.tsx');

  const combined = `${page}\n${siteData}\n${footer}`;

  assert.match(combined, /info@venture-mfg\.com/);
  assert.match(combined, /support@venture-mfg\.com/);
  assert.match(siteData, /RFQ files: support@venture-mfg\.com/);
  assert.match(siteData, /General inquiry: info@venture-mfg\.com/);
  assert.match(page, /mailto:support@venture-mfg\.com\?subject=Venture%20Electronics%20RFQ/);
  assert.match(page, /Email support@venture-mfg\.com/);
});

test('Venture pages emit conservative page-level structured data', () => {
  const { pageData } = loadProjectTsModule('src/components/venture-site/site-data.ts');
  const {
    buildPageStructuredData,
    serviceSchemaPages,
  } = loadProjectTsModule('src/components/venture-site/schema/structured-data.ts');

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
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(page, /mailto:support@venture-mfg\.com/);
  assert.match(page, /Email support@venture-mfg\.com/);
  assert.match(siteData, /cta: \{ label: ['"]Email RFQ Files['"], href: ['"]mailto:support@venture-mfg\.com\?subject=Venture%20Electronics%20RFQ['"] \}/);
  assert.doesNotMatch(page, /<form className=["']contact-form["']/);
  assert.doesNotMatch(page, /type=["']button["'][\s\S]*Placeholder only/);
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
