'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOnePage, setOnePageData } from '@/redux/slices/header-slice';
import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import { useGsapAnimations } from '@/hooks/use-gsap-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import { onePageDataFive } from '@/data/menu-data';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import MainContentFive from './main-content-five';

const HomeFiveOnePageMain = () => {
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    // Set global state for the header
    dispatch(setIsOnePage(true));
    dispatch(setOnePageData(onePageDataFive));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header headerClass="it-header-area it-header-ptb it-header-style-2" />

      <MainContentFive />

      <FooterTwo />
    </Wrapper>
  );
};

export default HomeFiveOnePageMain;
