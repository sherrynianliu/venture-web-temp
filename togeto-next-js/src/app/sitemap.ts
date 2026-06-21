import type { MetadataRoute } from 'next';
import { routes, sitemapLinks } from '@/components/venture-site/site-routes';

const siteBaseUrl = 'https://www.venture-mfg.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapLinks.map((link) => ({
    url: new URL(link.href, siteBaseUrl).toString(),
    changeFrequency: link.href === routes.home ? 'weekly' : 'monthly',
    priority: link.href === routes.home ? 1 : 0.7,
  }));
}
