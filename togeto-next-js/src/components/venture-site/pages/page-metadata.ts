import type { Metadata } from "next";
import type { PageData } from "@/components/venture-site/site-data";

const siteName = "Venture Electronics";

export function createPageMetadata(page: PageData): Metadata {
  return {
    title: `${page.label} | ${siteName}`,
    description: page.summary,
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}
