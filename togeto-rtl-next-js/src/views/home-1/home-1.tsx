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
import { setIsOnePage, setOnePageData } from '@/redux/slices/header-slice';
import Wrapper from '@/layouts/wrapper';
import MainContent from './main-contanet';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import FooterOne from '@/layouts/footers/footer-one';
import Header from '@/layouts/headers/header';

const HomeMain = () => {
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
    dispatch(setIsOnePage(false));
    dispatch(setOnePageData([]));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header
        headerClass="it-header-area it-header-ptb"
        hasPopUp={false}
        hasTopBar={false}
      />

      <MainContent />

      <FooterOne />
    </Wrapper>
  );
};
export default HomeMain;
