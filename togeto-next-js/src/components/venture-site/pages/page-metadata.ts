import type { Metadata } from "next";
import type { PageData } from "@/components/venture-site/site-data";

const siteName = "Venture Electronics";

export function createPageMetadata(page: PageData): Metadata {
  const title = `${page.label} | ${siteName}`;

  return {
    title,
    description: page.summary,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      title,
      description: page.summary,
      url: page.href,
      siteName,
      type: "website",
    },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}
