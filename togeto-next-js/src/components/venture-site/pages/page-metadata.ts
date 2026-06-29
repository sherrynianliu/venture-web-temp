import type { Metadata } from "next";
import type { PageData } from "@/components/venture-site/site-data";

const siteName = "Venture Electronics";

export function createPageMetadata(page: PageData): Metadata {
  const title = page.seoTitle ?? `${page.label} | ${siteName}`;
  const description = page.metaDescription ?? page.summary;

  return {
    title,
    description,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      title,
      description,
      url: page.href,
      siteName,
      type: "website",
    },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}
