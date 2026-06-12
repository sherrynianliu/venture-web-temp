'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import { IProductDT } from '@/types/product-d-t';
import ShopDetailsArea from '@/components/shop/shop-details/shop-details-area';

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsMain = ({ product }: ShopDetailsProps) => {
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
        <Breadcrumb title={product?.title} subtitle="Shop Details" />
        <ShopDetailsArea product={product} />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ShopDetailsMain;
