import type { Metadata } from "next";
import { pageData } from "@/components/venture-site/site-data";
import { createPageMetadata } from "@/components/venture-site/pages/page-metadata";
import { RoutePage } from "@/components/venture-site/pages/RoutePage";

export const metadata: Metadata = createPageMetadata(pageData.terms);

export default function TermsPage() {
  return <RoutePage page={pageData.terms} />;
}
