'use client';

// Home 06 — exact port of the Venture Electronics homepage (reference site),
// composed in the reference's section order. Template UI effects are layered
// on top inside the individual section components. Styling comes from the
// scoped `venture-exact.css` (imported by the route) under `.venture-site`.

import { HomeHero } from '@/components/venture-site/home/HomeHero';
import { CoreServicesBlock } from '@/components/venture-site/home/CoreServicesBlock';
import { VentureIdentityBlock } from '@/components/venture-site/home/VentureIdentityBlock';
import { CapabilityEvidence } from '@/components/venture-site/home/CapabilityEvidence';
import { ProjectPathStepper } from '@/components/venture-site/home/ProjectPathStepper';
import { CatalogBanner } from '@/components/venture-site/home/CatalogBanner';
import { FactoryShowcase } from '@/components/venture-site/home/FactoryShowcase';
import { EMSBoxBuildBlock } from '@/components/venture-site/home/EMSBoxBuildBlock';
import { BrandAuthorityTeaser } from '@/components/venture-site/home/BrandAuthorityTeaser';
import { HomeResourcesTeaser } from '@/components/venture-site/home/HomeResourcesTeaser';
import { HomeFAQBlock } from '@/components/venture-site/home/HomeFAQBlock';
import { HomeFinalCTA } from '@/components/venture-site/home/HomeFinalCTA';

const HomeSixContent = () => {
  return (
    <main>
      {/* Order follows the reference homepage (EN Implementation Plan §C1) */}
      <HomeHero />
      <CoreServicesBlock />
      <VentureIdentityBlock />
      <CapabilityEvidence />
      <ProjectPathStepper />
      <CatalogBanner />
      <FactoryShowcase />
      <EMSBoxBuildBlock />
      <BrandAuthorityTeaser />
      <HomeResourcesTeaser />
      <HomeFAQBlock />
      <HomeFinalCTA />
    </main>
  );
};

export default HomeSixContent;
