'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import CouponArea from '@/components/checkout/coupon-area';
import CheckoutArea from '@/components/checkout/checkout-area';

const CheckoutMain = () => {
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
        <Breadcrumb title="Checkout" />
        <CouponArea />
        <CheckoutArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default CheckoutMain;
