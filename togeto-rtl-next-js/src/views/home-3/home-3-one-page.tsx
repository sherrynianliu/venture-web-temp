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
import { onePageDataThree } from '@/data/menu-data';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import MainContentThree from './main-content-three';

const HomeThreeOnePageMain = () => {
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
    dispatch(setOnePageData(onePageDataThree));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header
        headerClass="it-header-area it-header-ptb it-header-transparent"
        hasPopUp={false}
        hasTopBar={false}
      />

      <MainContentThree />

      <FooterTwo />
    </Wrapper>
  );
};
export default HomeThreeOnePageMain;
