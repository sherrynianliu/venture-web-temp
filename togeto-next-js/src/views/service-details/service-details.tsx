'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import { IServiceDT } from '@/types/service-d-t';
import ServiceDetailsArea from '@/components/service/service-details/service-details-area';
import ServiceRelatedArea from '@/components/service/service-details/service-related-area';

interface ServiceDetailsProps {
  service: IServiceDT;
}

const ServiceDetailsMain = ({ service }: ServiceDetailsProps) => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title={service?.title} subtitle="Service Details" />
        <ServiceDetailsArea service={service} />
        <ServiceRelatedArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ServiceDetailsMain;
