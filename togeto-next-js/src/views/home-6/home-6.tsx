'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import { useGsapAnimations } from '@/hooks/use-gsap-animation';
import { useVentureReveals } from '@/components/venture-home/use-venture-reveals';
import { setIsOnePage, setOnePageData } from '@/redux/slices/header-slice';
import Wrapper from '@/layouts/wrapper';
import { Header } from '@/components/venture-site/site/Header';
import { Footer } from '@/components/venture-site/site/Footer';
import TopBarArea from '@/components/top-bar/top-bar-area';
import HomeSixContent from '@/components/venture-home/home-six-content';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';

const HomeSixMain = () => {
  const dispatch = useAppDispatch();

  // Template UI effects: scroll-zoom + GSAP scroll triggers
  useGsapAnimations();

  // Template UI effects: WOW.js scroll-reveal on the ported Venture sections
  useVentureReveals();

  // Template UI effects: split-text / line-reveal / fade-in (after preloader)
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
      textAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    dispatch(setIsOnePage(false));
    dispatch(setOnePageData([]));
  }, [dispatch]);

  return (
    <Wrapper>
      {/* Template top contact strip, fixed above the glass header. */}
      <div className="venture-top-strip">
        <TopBarArea />
      </div>
      {/* `.venture-site` scopes the ported Venture design system (venture-exact.css)
          to this page only; the template Wrapper still provides preloader,
          scroll-to-top and WOW.js / GSAP init for the layered effects. */}
      <div className="venture-site">
        <Header />
        <HomeSixContent />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default HomeSixMain;
