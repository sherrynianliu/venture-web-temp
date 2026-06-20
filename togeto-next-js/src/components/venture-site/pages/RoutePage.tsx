import { VentureShell } from "@/components/venture-site/site/VentureShell";
import { VenturePage } from "./VenturePage";
import type { PageData } from "@/components/venture-site/site-data";

export function RoutePage({ page }: { page: PageData }) {
  return (
    <VentureShell>
      <VenturePage page={page} />
    </VentureShell>
  );
}
