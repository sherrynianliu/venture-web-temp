'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import PriceArea from '@/components/price/price-area';
import FaqTwo from '@/components/faq/faq-two';

const PriceMain = () => {
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
        <Breadcrumb title="Pricing" />
        <PriceArea />
        <FaqTwo />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default PriceMain;
