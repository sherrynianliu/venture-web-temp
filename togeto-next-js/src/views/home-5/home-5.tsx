'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import { useGsapAnimations } from '@/hooks/use-gsap-animation';
import { setIsOnePage, setOnePageData } from '@/redux/slices/header-slice';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import MainContentFive from './main-content-five';

const HomeFiveMain = () => {
  const dispatch = useAppDispatch();

  // Enable Gsap ANimations
  useGsapAnimations();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    // Set global state for the header
    dispatch(setIsOnePage(false));
    dispatch(setOnePageData([]));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header headerClass="it-header-area it-header-ptb it-header-style-2" />

      <MainContentFive />

      <FooterTwo />
    </Wrapper>
  );
};
export default HomeFiveMain;
