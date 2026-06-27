import type { PageStructuredData } from "./structured-data";

export function StructuredData({ data }: { data: PageStructuredData }) {
  if (!data["@graph"].length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
