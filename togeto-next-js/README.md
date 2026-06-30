# Venture Electronics GEO Site

Next.js App Router website for the Venture Electronics public GEO site.

## Local Preview Notes

Use:

```bash
npm run dev -- --port 3002 --hostname 127.0.0.1
```

The default development script uses Webpack because the current verified local preview and build path use Webpack.

The first App Router request in local development can take 40-60 seconds while Next compiles the route. After the first compile, repeated route loads should return quickly. This is development cold-compile behavior, not evidence that the route's React application code is slow.

Turbopack remains available for comparison:

```bash
npm run dev:turbo -- --port 3002 --hostname 127.0.0.1
```

## Verification

```bash
node --test tests/home-6.test.mjs tests/venture-site-shell.test.mjs tests/template-cleanup.test.mjs
npm run build
```

## Runtime Route Smoke Test

After a successful production build, run:

```bash
npm run smoke:routes
```

This starts `next start` on an available `127.0.0.1` port, checks the canonical public routes, and verifies the trailing-slash redirects that can otherwise look like broken rendering in a local browser preview.
