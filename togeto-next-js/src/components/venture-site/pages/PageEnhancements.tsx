import { CapabilityEvidence } from "@/components/venture-site/home/CapabilityEvidence";
import { CatalogBanner } from "@/components/venture-site/home/CatalogBanner";
import { CoreServicesBlock } from "@/components/venture-site/home/CoreServicesBlock";
import { EMSBoxBuildBlock } from "@/components/venture-site/home/EMSBoxBuildBlock";
import { FactoryShowcase } from "@/components/venture-site/home/FactoryShowcase";
import { HomeFAQBlock } from "@/components/venture-site/home/HomeFAQBlock";
import { HomeFinalCTA } from "@/components/venture-site/home/HomeFinalCTA";
import { ProjectPathStepper } from "@/components/venture-site/home/ProjectPathStepper";
import { VentureIdentityBlock } from "@/components/venture-site/home/VentureIdentityBlock";
import { routes, type PageData } from "@/components/venture-site/site-data";

type PageEnhancementsProps = {
  page: PageData;
};

export function PageEnhancements({ page }: PageEnhancementsProps) {
  if (page.href === routes.services) {
    return (
      <div className="stage3-enhancements stage3-enhancements--services">
        <CoreServicesBlock />
      </div>
    );
  }

  if (page.href === routes.pcba) {
    return (
      <div className="stage3-enhancements stage3-enhancements--pcba">
        <ProjectPathStepper />
        <CapabilityEvidence
          primaryLabel="Discuss PCBA Project"
          primaryHref={routes.requestQuote}
          secondaryLabel="View Quality & Testing"
          secondaryHref={routes.qualityTesting}
        />
      </div>
    );
  }

  if (page.href === routes.emsBoxBuild) {
    return (
      <div className="stage3-enhancements stage3-enhancements--ems">
        <EMSBoxBuildBlock />
      </div>
    );
  }

  if (page.href === routes.qualityTesting) {
    return (
      <div className="stage3-enhancements stage3-enhancements--quality">
        <CapabilityEvidence
          eyebrow="Quality support"
          title="Inspection and testing checkpoints around PCBA and EMS projects"
          primaryLabel="Send Testing Requirements"
          primaryHref={routes.requestQuote}
          secondaryLabel="View PCBA Service"
          secondaryHref={routes.pcba}
        />
      </div>
    );
  }

  if (page.href === routes.about) {
    return (
      <div className="stage3-enhancements stage3-enhancements--about">
        <VentureIdentityBlock />
        <FactoryShowcase />
      </div>
    );
  }

  if (page.href === routes.resources) {
    return (
      <div className="stage3-enhancements stage3-enhancements--resources">
        <CatalogBanner />
        <HomeFAQBlock />
      </div>
    );
  }

  if (page.href === routes.requestQuote) {
    return (
      <div className="stage3-enhancements stage3-enhancements--rfq">
        <ProjectPathStepper />
      </div>
    );
  }

  if (page.href === routes.contact) {
    return (
      <div className="stage3-enhancements stage3-enhancements--contact">
        <HomeFinalCTA />
      </div>
    );
  }

  return null;
}
