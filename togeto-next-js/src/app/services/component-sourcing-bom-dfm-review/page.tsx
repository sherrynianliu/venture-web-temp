import type { Metadata } from "next";
import { pageData } from "@/components/venture-site/site-data";
import { createPageMetadata } from "@/components/venture-site/pages/page-metadata";
import { RoutePage } from "@/components/venture-site/pages/RoutePage";

export const metadata: Metadata = createPageMetadata(pageData.componentSourcingBomDfmReview);

export default function ComponentSourcingBomDfmReviewPage() {
  return <RoutePage page={pageData.componentSourcingBomDfmReview} />;
}
