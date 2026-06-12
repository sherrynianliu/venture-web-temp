import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('home 06 route is registered as a separate home page', async () => {
  const page = await readProjectFile('src/app/(homes)/home-6/page.tsx');

  assert.match(page, /HomeSixMain/);
  assert.match(page, /Home Six Page/);
});

test('home 06 keeps the current template shell and effects', async () => {
  const view = await readProjectFile('src/views/home-6/home-6.tsx');

  assert.match(view, /<Wrapper>/);
  assert.match(view, /<Header/);
  assert.match(view, /<FooterOne/);
  assert.match(view, /useGsapAnimations/);
  assert.match(view, /fadeAnimation/);
  assert.match(view, /splitAnimation/);
});

test('home menu exposes Home 06 without replacing the existing home routes', async () => {
  const menu = await readProjectFile('src/data/menu-data.ts');

  assert.match(menu, /Home 01/);
  assert.match(menu, /Home 05/);
  assert.match(menu, /Home 06/);
  assert.match(menu, /\/home-6/);
});
