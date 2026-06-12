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
import AboutThree from '@/components/about/about-three';
import ServiceTwo from '@/components/service/service-two';
import TextSliderOne from '@/components/text-slider/text-slider-one';
import StepOne from '@/components/step/step-one';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import ChooseThree from '@/components/choose/choose-three';

const AboutMain = () => {
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
        <Breadcrumb title="About Us" subtitle="About" />
        <AboutThree />
        <ServiceTwo />
        <TextSliderOne />
        <StepOne />
        <TestimonialOne />
        <ChooseThree />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default AboutMain;
