import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const repoRoot = join(projectRoot, '..');

async function readProjectFile(path) {
  return readFile(join(projectRoot, path), 'utf8');
}

const liveFiles = [
  'src/app/layout.tsx',
  'src/app/error.tsx',
  'src/app/not-found.tsx',
  'src/app/page.tsx',
  'src/components/top-bar/top-bar-area.tsx',
  'src/components/venture-site/site-data.ts',
  'src/components/venture-site/site/Header.tsx',
  'src/components/venture-site/site/Footer.tsx',
  'src/components/venture-site/pages/VenturePage.tsx',
  'src/components/venture-site/pages/RfqEmailComposer.tsx',
  'src/components/venture-site/schema/structured-data.ts',
  'src/components/venture-home/home-six-content.tsx',
  'src/components/venture-home/use-venture-reveals.ts',
  'src/app/(homes)/home-6/venture-overrides.css',
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
  'support@venture-mfg.com',
  'Wei Chi',
  '威驰',
  'Chinese entity',
  '/assets/css/theme-main.css',
  '/venture-static/vendor/bootstrap.min.css',
  '/venture-static/vendor/swiper-bundle.min.css',
  '/venture-static/vendor/modal-video.min.css',
  'it-header-top-area',
  'it-header-top-ptb',
  'it-header-top-list-box',
  'it-btn-orange',
  'black-bg',
  'fa-light',
  'fa-solid',
  'fa-regular',
  'fa-brands',
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

test('public source authority is centralized and public copy avoids unconfirmed entity relationships', async () => {
  const channels = await readProjectFile('src/components/venture-site/content/contact-channels.ts');
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');
  const schema = await readProjectFile('src/components/venture-site/schema/structured-data.ts');

  assert.match(channels, /CONTACT_CHANNELS/);
  assert.match(channels, /rfqEmail:\s*"info@venture-mfg\.com"/);
  assert.match(channels, /generalEmail:\s*"info@venture-mfg\.com"/);
  assert.match(siteData, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(siteData, /CONTACT_CHANNELS\.generalEmail/);
  assert.doesNotMatch(siteData, /Wei Chi|威驰|Chinese entity/i);
  assert.doesNotMatch(schema, /venture-pcba\.com|venturegroup-mfg|uni-venture|v-cst|venturepcb\.com/);
});

test('official websites page lives under About navigation', async () => {
  const siteData = await readProjectFile('src/components/venture-site/site-data.ts');

  assert.match(siteData, /label:\s*"About Venture Electronics",\s*href:\s*routes\.about/);
  assert.match(
    siteData,
    /label:\s*"Official Websites, Domains & Company Entities",\s*href:\s*routes\.officialResources/,
  );
  assert.match(siteData, /label:\s*"Contact",\s*href:\s*routes\.contact/);
  assert.doesNotMatch(siteData, /label:\s*"Official Websites",\s*href:\s*routes\.officialResources/);
  const resourceLinksBlock = siteData.match(/const resourceLinks:[\s\S]*?\];/)?.[0] ?? '';
  assert.doesNotMatch(resourceLinksBlock, /routes\.officialResources/);
});

test('RFQ first launch uses mailto composer without fake backend or upload promise', async () => {
  const composer = await readProjectFile('src/components/venture-site/pages/RfqEmailComposer.tsx');

  assert.match(composer, /Prepare RFQ Email/);
  assert.match(composer, /CONTACT_CHANNELS\.rfqEmail/);
  assert.match(composer, /mailto:/);
  assert.doesNotMatch(composer, /alert\(JSON\.stringify/);
  assert.doesNotMatch(composer, /type=["']file["']/);
});

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

const retiredRepoTemplatePaths = [
  'togeto-documentation',
  'togeto-rtl-next-js',
];

const retiredTemplateSourcePaths = [
  'src/components/about',
  'src/components/blog',
  'src/components/bradcrumb',
  'src/components/brand',
  'src/components/career',
  'src/components/cart',
  'src/components/checkout',
  'src/components/choose',
  'src/components/compare',
  'src/components/copyright',
  'src/components/faq',
  'src/components/footer-widget',
  'src/components/form',
  'src/components/funfact',
  'src/components/hero',
  'src/components/information',
  'src/components/map',
  'src/components/modal',
  'src/components/modal-video',
  'src/components/newsletter',
  'src/components/offcanvas',
  'src/components/portfolio',
  'src/components/preloader',
  'src/components/price',
  'src/components/progress',
  'src/components/scroll-to-top',
  'src/components/search-popup',
  'src/components/select',
  'src/components/service',
  'src/components/shop',
  'src/components/social',
  'src/components/step',
  'src/components/svg',
  'src/components/team',
  'src/components/testimonial',
  'src/components/text-slider',
  'src/components/ui/pagination.tsx',
  'src/components/video',
  'src/components/wishlist',
  'src/components/item-not-found.tsx',
  'src/components/error-msg.tsx',
  'src/data/menu-data.ts',
  'src/data/service-data.tsx',
  'src/data/faq-data.ts',
  'src/data/blog-data.ts',
  'src/data/portfolio-data.ts',
  'src/data/product-data.ts',
  'src/data/team-data.tsx',
  'src/data/testimonial-data.ts',
  'src/hooks/redux-hooks.ts',
  'src/hooks/use-gsap-animation.tsx',
  'src/hooks/use-header-scroll.tsx',
  'src/hooks/use-is-client.ts',
  'src/hooks/use-paginate.ts',
  'src/hooks/use-reveal-bg.tsx',
  'src/layouts/footers/footer-one.tsx',
  'src/layouts/footers/footer-two.tsx',
  'src/layouts/headers/header-menus-onepage.tsx',
  'src/layouts/headers/header-menus.tsx',
  'src/layouts/headers/header.tsx',
  'src/layouts/wrapper.tsx',
  'src/redux/store.ts',
  'src/redux/rootReducer.ts',
  'src/redux/selectors/cart-selector.ts',
  'src/redux/selectors/compare-selector.ts',
  'src/redux/selectors/header-selector.ts',
  'src/redux/selectors/modal-selector.ts',
  'src/redux/selectors/product-filter-selector.ts',
  'src/redux/selectors/product-modal-selector.ts',
  'src/redux/selectors/product-sort-selector.ts',
  'src/redux/selectors/wishlist-selectors.ts',
  'src/redux/slices/cart-slice.ts',
  'src/redux/slices/compare-slice.ts',
  'src/redux/slices/header-slice.ts',
  'src/redux/slices/modal-slice.ts',
  'src/redux/slices/product-filter-slice.ts',
  'src/redux/slices/product-modal-slice.ts',
  'src/redux/slices/product-sort-slice.ts',
  'src/redux/slices/wishlist-slice.ts',
  'src/app/store-provider.tsx',
  'src/views/about',
  'src/views/blog',
  'src/views/blog-details',
  'src/views/blog-sidebar',
  'src/views/cart',
  'src/views/checkout',
  'src/views/compare',
  'src/views/contact',
  'src/views/error',
  'src/views/faq',
  'src/views/home-1',
  'src/views/home-2',
  'src/views/home-3',
  'src/views/home-4',
  'src/views/home-5',
  'src/views/portfolio',
  'src/views/portfolio-details',
  'src/views/price',
  'src/views/service',
  'src/views/service-details',
  'src/views/shop',
  'src/views/shop-details',
  'src/views/shop-sidebar',
  'src/views/team',
  'src/views/team-details',
  'src/views/testimonial',
  'src/views/wishlist',
];

const retiredTemplateUtilitySourcePaths = [
  'src/utils/constants.ts',
  'src/utils/filtering.tsx',
  'src/utils/helper.tsx',
  'src/utils/sorting.tsx',
  'src/utils/title-animation.ts',
  'src/types/blog-d-t.ts',
  'src/types/bootstrap.d.ts',
  'src/types/faq-d-t.ts',
  'src/types/menu-d-t.ts',
  'src/types/portfolio-d-t.ts',
  'src/types/product-d-t.ts',
  'src/types/service-d-t.ts',
  'src/types/team-d-t.ts',
  'src/types/testimonial-d-t.ts',
  'src/types/wowjs-d-t.ts',
];

const retiredTemplateStyleSourcePaths = [
  'src/app/globals.scss',
  'public/assets/scss',
  'public/assets/css/custom-animation.css',
  'public/assets/css/font-awesome-pro.css',
  'public/assets/css/spacing.css',
  'public/assets/css/theme-main.css',
  'public/assets/fonts',
  'public/venture-static/vendor/bootstrap.min.css',
  'public/venture-static/vendor/swiper-bundle.min.css',
  'public/venture-static/vendor/modal-video.min.css',
];

const retiredTemplatePublicAssetPaths = [
  'public/assets/img/service/download/company-report.txt',
];

const retiredTemplateRuntimeDependencies = [
  '@gsap/react',
  '@hookform/resolvers',
  '@reduxjs/toolkit',
  '@types/react-modal-video',
  'animate.css',
  'bootstrap',
  'gsap',
  'rc-slider',
  'react-accessible-accordion',
  'react-countup',
  'react-fast-marquee',
  'react-hook-form',
  'react-intersection-observer',
  'react-modal-video',
  'react-paginate',
  'react-redux',
  'react-tabs',
  'react-toastify',
  'sass',
  'swiper',
  'wowjs',
  'yup',
];

const allowedRuntimeDependencies = ['next', 'react', 'react-dom'];

const retiredTemplateAnimationSourcePaths = [
  'src/plugins/gsap-scroll-to-plugin.js',
  'src/plugins/gsap-scroll-trigger.js',
  'src/plugins/gsap-split-text.js',
  'src/plugins/index.js',
  'src/utils/resolve-wow-constructor.mjs',
  'tests/resolve-wow-constructor.test.mjs',
];

test('retired repo-level Togeto template directories are removed', async () => {
  for (const path of retiredRepoTemplatePaths) {
    await assert.rejects(
      access(join(repoRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in this repository`,
    );
  }
});

test('retired high-risk template files are removed from active source', async () => {
  for (const path of retiredTemplateSourcePaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in active source`,
    );
  }
});

test('retired template utility and type sources are removed from active source', async () => {
  for (const path of retiredTemplateUtilitySourcePaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in active source`,
    );
  }
});

test('retired SCSS and source-only template styles are removed from public source', async () => {
  for (const path of retiredTemplateStyleSourcePaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in public or app source`,
    );
  }
});

test('retired public template artifacts are removed', async () => {
  for (const path of retiredTemplatePublicAssetPaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain in public assets`,
    );
  }
});

test('template-only runtime dependencies are removed from the live app manifest', async () => {
  const manifest = JSON.parse(await readProjectFile('package.json'));
  const dependencies = Object.keys(manifest.dependencies ?? {});

  assert.deepEqual(
    dependencies.sort(),
    allowedRuntimeDependencies.sort(),
    'live runtime dependencies should stay limited to the Next/React app runtime',
  );

  for (const dependency of retiredTemplateRuntimeDependencies) {
    assert.equal(
      manifest.dependencies?.[dependency],
      undefined,
      `${dependency} should not remain in package.json after template cleanup`,
    );
  }
});

test('unused template animation helper sources are removed', async () => {
  for (const path of retiredTemplateAnimationSourcePaths) {
    await assert.rejects(
      access(join(projectRoot, path), constants.R_OK),
      /ENOENT/,
      `${path} should not remain after GSAP/WOW runtime cleanup`,
    );
  }
});
