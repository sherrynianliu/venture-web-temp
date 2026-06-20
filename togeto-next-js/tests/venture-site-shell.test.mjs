import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);

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
  '/insights/',
  '/privacy-policy/',
  '/terms/',
  '/sitemap/',
  '/thank-you/',
];

const routeFiles = [
  'src/app/page.tsx',
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
  'src/app/insights/page.tsx',
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

test('approved public routes have route files', async () => {
  await Promise.all(
    routeFiles.map((path) => access(new URL(path, root), constants.R_OK)),
  );
});

test('site data exposes only the approved public sitemap routes', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  for (const route of publicRoutes) {
    assert.match(siteData, new RegExp(`href: ['"]${route.replace(/[/-]/g, '\\$&')}['"]`));
  }

  for (const route of [
    '/engineering-support/',
    '/industries/',
    '/resources/blog/',
    '/resources/faq/',
    '/brand/venture-electronics-vs-venture-pcb-pcba/',
    '/services/pcb-fabrication/',
  ]) {
    assert.doesNotMatch(siteData, new RegExp(route.replace(/[/-]/g, '\\$&')));
  }
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
    'insights',
    'privacyPolicy',
    'terms',
    'sitemap',
    'thankYou',
  ]) {
    assert.match(siteData, new RegExp(`${key}: \\{[\\s\\S]*?visual: pageVisuals\\.`));
  }
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
