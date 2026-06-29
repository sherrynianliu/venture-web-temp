'use client';

import { HomeHero } from '@/components/venture-site/home/HomeHero';
import { CoreServicesBlock } from '@/components/venture-site/home/CoreServicesBlock';
import { HomeBuyerPathBlock } from '@/components/venture-site/home/HomeBuyerPathBlock';
import { VentureIdentityBlock } from '@/components/venture-site/home/VentureIdentityBlock';
import { ProjectPathStepper } from '@/components/venture-site/home/ProjectPathStepper';
import { CapabilityEvidence } from '@/components/venture-site/home/CapabilityEvidence';
import { BrandAuthorityTeaser } from '@/components/venture-site/home/BrandAuthorityTeaser';
import { HomeFAQBlock } from '@/components/venture-site/home/HomeFAQBlock';
import { HomeFinalCTA } from '@/components/venture-site/home/HomeFinalCTA';

const HomeSixContent = () => {
  return (
    <main>
      <HomeHero />
      <CoreServicesBlock />
      <HomeBuyerPathBlock />
      <VentureIdentityBlock />
      <ProjectPathStepper />
      <CapabilityEvidence />
      <BrandAuthorityTeaser />
      <HomeFAQBlock />
      <HomeFinalCTA />
    </main>
  );
};

export default HomeSixContent;
