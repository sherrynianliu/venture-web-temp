'use client';

import { HomeHero } from '@/components/venture-site/home/HomeHero';
import { CoreServicesBlock } from '@/components/venture-site/home/CoreServicesBlock';
import { VentureIdentityBlock } from '@/components/venture-site/home/VentureIdentityBlock';
import { CapabilityEvidence } from '@/components/venture-site/home/CapabilityEvidence';
import { ProjectPathStepper } from '@/components/venture-site/home/ProjectPathStepper';
import { BrandAuthorityTeaser } from '@/components/venture-site/home/BrandAuthorityTeaser';
import { HomeFAQBlock } from '@/components/venture-site/home/HomeFAQBlock';
import { HomeFinalCTA } from '@/components/venture-site/home/HomeFinalCTA';

const HomeSixContent = () => {
  return (
    <main>
      <HomeHero />
      <CoreServicesBlock />
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
