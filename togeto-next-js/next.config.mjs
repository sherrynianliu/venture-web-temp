import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

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
  '/contact',
  '/blog',
  '/blog-left-sidebar',
  '/blog-right-sidebar',
  '/blog-details-left-sidebar/:path*',
  '/blog-details-right-sidebar/:path*',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: false,
  },
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: '/home-6',
        destination: '/',
        permanent: true,
      },
      ...disabledDemoRoutes.map((source) => ({
        source,
        destination: '/',
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
