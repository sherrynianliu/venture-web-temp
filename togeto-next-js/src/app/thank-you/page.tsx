import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageData } from "@/components/venture-site/site-data";
import { createPageMetadata } from "@/components/venture-site/pages/page-metadata";

export const metadata: Metadata = createPageMetadata(pageData.thankYou);

export default function ThankYouPage() {
  redirect("/");
}
