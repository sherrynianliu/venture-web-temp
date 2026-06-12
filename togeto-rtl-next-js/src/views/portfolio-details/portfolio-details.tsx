'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import { IPortfolioDT } from '@/types/portfolio-d-t';
import PortfolioDetailsArea from '@/components/portfolio/portfolio-details/portfolio-details-area';
import PortfolioRelatedArea from '@/components/portfolio/portfolio-details/portfolio-related-area';

interface PortfolioDetailsProps {
  portfolio: IPortfolioDT;
}

const PortfolioDetailsMain = ({ portfolio }: PortfolioDetailsProps) => {
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
        <Breadcrumb title={portfolio?.title} subtitle="Portfolio Details" />
        <PortfolioDetailsArea portfolio={portfolio} />
        <PortfolioRelatedArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default PortfolioDetailsMain;
