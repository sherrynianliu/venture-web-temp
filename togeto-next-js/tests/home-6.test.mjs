import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('root route renders the Venture Home 06 experience', async () => {
  const page = await readProjectFile('src/app/page.tsx');

  assert.match(page, /HomeSixMain/);
  assert.match(page, /Venture Electronics/);
  assert.doesNotMatch(page, /home-1/);
  assert.doesNotMatch(page, /Togeto/);
});

test('home 06 redirects to the canonical root home page', async () => {
  const page = await readProjectFile('src/app/(homes)/home-6/page.tsx');

  assert.match(page, /redirect\(['"]\/['"]\)/);
  assert.doesNotMatch(page, /HomeSixMain/);
});

test('home 06 keeps the Venture shell components', async () => {
  const view = await readProjectFile('src/views/home-6/home-6.tsx');

  assert.match(view, /<Header/);
  assert.match(view, /<TopBarArea/);
  assert.match(view, /<HomeSixContent/);
  assert.match(view, /<Footer/);
  assert.match(view, /className=["']venture-site["']/);
  assert.doesNotMatch(view, /<Wrapper>/);
});
