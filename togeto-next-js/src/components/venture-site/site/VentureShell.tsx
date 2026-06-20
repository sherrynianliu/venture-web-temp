"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { useGsapAnimations } from "@/hooks/use-gsap-animation";
import { useVentureReveals } from "@/components/venture-home/use-venture-reveals";
import { setIsOnePage, setOnePageData } from "@/redux/slices/header-slice";
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from "@/utils/title-animation";
import { LOADING_ANIMATION_TIMEOUT } from "@/utils/constants";
import Wrapper from "@/layouts/wrapper";
import TopBarArea from "@/components/top-bar/top-bar-area";
import { Header } from "./Header";
import { Footer } from "./Footer";

type VentureShellProps = {
  children: ReactNode;
};

export function VentureShell({ children }: VentureShellProps) {
  const dispatch = useAppDispatch();

  useGsapAnimations();
  useVentureReveals();

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
      <div className="venture-top-strip">
        <TopBarArea />
      </div>
      <div className="venture-site">
        <Header variant="solid" />
        {children}
        <Footer />
      </div>
    </Wrapper>
  );
}
