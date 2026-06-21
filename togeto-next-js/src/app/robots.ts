import type { MetadataRoute } from 'next';

const siteBaseUrl = 'https://www.venture-mfg.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you/'],
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  };
}
