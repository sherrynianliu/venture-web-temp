import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const repoRoot = join(projectRoot, '..');

async function readRepoFile(path) {
  return readFile(join(repoRoot, path), 'utf8');
}

async function readProjectFile(path) {
  return readFile(join(projectRoot, path), 'utf8');
}

function assertGitIgnores(path) {
  const result = spawnSync('git', ['check-ignore', '--quiet', path], {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  assert.equal(
    result.status,
    0,
    `${path} should be ignored by git. stderr: ${result.stderr}`,
  );
}

test('root gitignore keeps local visual QA artifacts out of working tree noise', async () => {
  const gitignore = await readRepoFile('.gitignore');

  for (const expected of [
    '.DS_Store',
    '/.playwright-mcp/',
    '/output/',
    '/togeto-next-js/output/',
    '/venture-*.png',
    '/togeto-next-js/venture-*.png',
  ]) {
    assert.match(
      gitignore,
      new RegExp(`(^|\\n)${expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\n|$)`),
      `.gitignore should include ${expected}`,
    );
  }

  for (const ignoredPath of [
    '.playwright-mcp/',
    'output/',
    'togeto-next-js/output/',
    'venture-home-desktop.png',
    'togeto-next-js/venture-home-desktop.png',
    'docs/.DS_Store',
  ]) {
    assertGitIgnores(ignoredPath);
  }
});

test('GitHub Actions runs source tests, production build, and runtime route smoke', async () => {
  const workflow = await readRepoFile('.github/workflows/venture-verification.yml');
  const manifest = JSON.parse(await readProjectFile('package.json'));
  const readme = await readProjectFile('README.md');

  assert.equal(
    manifest.scripts?.['test:source'],
    'node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs tests/repo-hygiene.test.mjs',
  );
  assert.match(readme, /npm run test:source/);
  assert.match(workflow, /name:\s*Venture verification/);
  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /push:/);
  assert.match(workflow, /branches:\s*\[\s*main\s*\]/);
  assert.match(workflow, /working-directory:\s*togeto-next-js/);
  assert.match(workflow, /node-version:\s*20/);
  assert.match(workflow, /cache-dependency-path:\s*togeto-next-js\/package-lock\.json/);
  assert.match(workflow, /npm ci/);
  assert.match(workflow, /npm run test:source/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /npm run smoke:routes/);
});
