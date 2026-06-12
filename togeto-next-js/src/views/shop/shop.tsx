'use client';

import { useGSAP } from '@gsap/react';
import { splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import ShopArea from '@/components/shop/shop-area';
import ProductModal from '@/components/modal/product-modal';

const ShopMain = () => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <ProductModal />
      <Header />

      <main>
        <Breadcrumb title="Shop" />
        <ShopArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ShopMain;
