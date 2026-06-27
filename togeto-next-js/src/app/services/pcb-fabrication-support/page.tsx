import type { Metadata } from "next";
import { pageData } from "@/components/venture-site/site-data";
import { createPageMetadata } from "@/components/venture-site/pages/page-metadata";
import { RoutePage } from "@/components/venture-site/pages/RoutePage";

export const metadata: Metadata = createPageMetadata(pageData.pcbFabricationSupport);

export default function PcbFabricationSupportPage() {
  return <RoutePage page={pageData.pcbFabricationSupport} />;
}
