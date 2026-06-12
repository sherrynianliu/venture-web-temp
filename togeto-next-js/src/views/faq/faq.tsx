'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import FaqTwo from '@/components/faq/faq-two';

const FaqMain = () => {
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
        <Breadcrumb title="Faq" />
        <FaqTwo
          itemClass="it-faq-area pt-130 pb-110"
          accordionClass="it-custom-accordion it-custom-accordion-style-2"
        />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default FaqMain;
