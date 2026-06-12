'use client';

import { useGSAP } from '@gsap/react';
import { splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import ContactArea from '@/components/contact/contact-area';
import MapArea from '@/components/map/map-area';

const ContactMain = () => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title="Contact" />
        <ContactArea />
        <MapArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ContactMain;
