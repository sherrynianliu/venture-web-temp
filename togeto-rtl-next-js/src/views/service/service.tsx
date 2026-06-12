'use client';

import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import { useGsapAnimations } from '@/hooks/use-gsap-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import ServiceArea from '@/components/service/service-area';
import FunFactOne from '@/components/funfact/funfact-one';
import InformationOne from '@/components/information/information-one';
import StepOne from '@/components/step/step-one';
import BrandOne from '@/components/brand/brand-one';
import ChooseThree from '@/components/choose/choose-three';

const ServiceMain = () => {
  // Enable Gsap ANimations
  useGsapAnimations();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
      textAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title="Services" />
        <ServiceArea />
        <FunFactOne />
        <InformationOne />
        <StepOne />
        <BrandOne />
        <ChooseThree />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ServiceMain;
