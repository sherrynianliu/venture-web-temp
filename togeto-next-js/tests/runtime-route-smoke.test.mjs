import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import net from 'node:net';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const host = '127.0.0.1';

const canonicalRoutes = [
  { path: '/', expected: 'Venture Electronics' },
  { path: '/services', expected: 'How Venture services fit together' },
  { path: '/services/pcb-assembly-pcba', expected: 'PCB Assembly / PCBA' },
  { path: '/services/ems-box-build', expected: 'EMS & Box Build' },
  {
    path: '/services/component-sourcing-bom-dfm-review',
    expected: 'Component Sourcing, BOM & DFM Review',
  },
  { path: '/services/pcb-fabrication-support', expected: 'PCB Fabrication Support' },
  { path: '/quality-testing', expected: 'Quality & Testing for PCB Assembly' },
  { path: '/about', expected: 'About Venture Electronics' },
  { path: '/official-resources', expected: 'Official Websites, Domains & Company Entities' },
  { path: '/resources', expected: 'Prepare a clearer PCB Assembly' },
  { path: '/contact', expected: 'Contact Venture Electronics' },
  { path: '/request-a-quote', expected: 'Prepare RFQ Email' },
  { path: '/privacy-policy', expected: 'Privacy Policy' },
  { path: '/terms', expected: 'Terms' },
  { path: '/sitemap', expected: 'Sitemap' },
];

const trailingSlashRedirectRoutes = canonicalRoutes
  .filter((route) => route.path !== '/')
  .map((route) => `${route.path}/`);

const controlledRedirectRoutes = [
  { path: '/thank-you', status: 307, location: '/' },
];

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.once('error', reject);
    server.listen(0, host, () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForServer(baseUrl, child) {
  const deadline = Date.now() + 30_000;
  let lastError;

  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`next start exited early with code ${child.exitCode}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.status < 500) return;
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${baseUrl}: ${lastError?.message ?? 'no response'}`);
}

function startNext(port) {
  const child = spawn(
    process.execPath,
    ['node_modules/next/dist/bin/next', 'start', '--hostname', host, '--port', String(port)],
    {
      cwd: projectRoot,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
      detached: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  let output = '';
  child.stdout.on('data', (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    output += chunk.toString();
  });

  return { child, getOutput: () => output };
}

async function stopNext(child) {
  if (child.exitCode !== null) return;

  const signalProcessGroup = (signal) => {
    try {
      process.kill(-child.pid, signal);
    } catch (error) {
      if (error.code !== 'ESRCH') throw error;
    }
  };

  signalProcessGroup('SIGTERM');
  let exited = false;
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 3_000);
    child.once('exit', () => {
      exited = true;
      clearTimeout(timeout);
      resolve();
    });
  });

  if (!exited && child.exitCode === null) {
    signalProcessGroup('SIGKILL');
    await new Promise((resolve) => {
      const timeout = setTimeout(resolve, 1_000);
      child.once('exit', () => {
        clearTimeout(timeout);
        resolve();
      });
    });
  }
}

async function assertCanonicalRoute(baseUrl, route) {
  const response = await fetch(`${baseUrl}${route.path}`, { redirect: 'manual' });
  assert.equal(response.status, 200, `${route.path} should return 200`);

  const body = await response.text();
  assert.ok(
    body.includes(route.expected),
    `${route.path} should include route marker: ${route.expected}`,
  );
  assert.doesNotMatch(body, /Togeto|Application error|Internal Server Error/i);
}

async function assertTrailingSlashRedirect(baseUrl, route) {
  const response = await fetch(`${baseUrl}${route}`, { redirect: 'manual' });
  assert.equal(response.status, 308, `${route} should redirect to the canonical no-slash route`);

  const expectedLocation = route.replace(/\/$/, '');
  const location = response.headers.get('location') ?? '';
  assert.ok(
    location === expectedLocation || location.endsWith(expectedLocation),
    `${route} should redirect to ${expectedLocation}, got ${location}`,
  );

  const finalResponse = await fetch(`${baseUrl}${expectedLocation}`);
  assert.equal(finalResponse.status, 200, `${expectedLocation} should render after redirect`);
}

async function assertControlledRedirect(baseUrl, route) {
  const response = await fetch(`${baseUrl}${route.path}`, { redirect: 'manual' });
  assert.equal(response.status, route.status, `${route.path} should return ${route.status}`);

  const location = response.headers.get('location') ?? '';
  assert.equal(location, route.location, `${route.path} should redirect to ${route.location}`);
}

async function main() {
  await access(join(projectRoot, '.next', 'BUILD_ID'), constants.R_OK).catch(() => {
    throw new Error('Production build missing. Run `npm run build` before `npm run smoke:routes`.');
  });

  const port = await getFreePort();
  const baseUrl = `http://${host}:${port}`;
  const { child, getOutput } = startNext(port);

  try {
    await waitForServer(baseUrl, child);

    for (const route of canonicalRoutes) {
      await assertCanonicalRoute(baseUrl, route);
    }

    for (const route of trailingSlashRedirectRoutes) {
      await assertTrailingSlashRedirect(baseUrl, route);
    }

    for (const route of controlledRedirectRoutes) {
      await assertControlledRedirect(baseUrl, route);
    }

    console.log(`Runtime route smoke passed for ${canonicalRoutes.length} canonical routes.`);
  } catch (error) {
    console.error(getOutput());
    throw error;
  } finally {
    await stopNext(child);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
