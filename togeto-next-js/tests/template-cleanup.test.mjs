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
  'src/components/venture-site/pages/RfqEmailComposer.tsx',
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
  'support@venture-mfg.com',
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
