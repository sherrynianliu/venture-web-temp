import AboutThree from '@/components/about/about-three';
import BlogThree from '@/components/blog/blog-three';
import BrandOne from '@/components/brand/brand-one';
import ChooseThree from '@/components/choose/choose-three';
import ContactOne from '@/components/contact/contact-one';
import HeroBannerTwo from '@/components/hero/hero-banner/hero-banner-two';
import PortfolioOne from '@/components/portfolio/portfolio-one';
import ServiceThree from '@/components/service/service-three';
import StepOne from '@/components/step/step-one';
import TeamTwo from '@/components/team/team-two';
import TestimonialThree from '@/components/testimonial/testimonial-three';
import TextSliderOne from '@/components/text-slider/text-slider-one';
import { portfolioDataTwo } from '@/data/portfolio-data';

const MainContentThree = () => {
  return (
    <main>
      <HeroBannerTwo />
      <ContactOne />
      <AboutThree />
      <ServiceThree />
      <TextSliderOne itemClass="it-text-slider-area it-text-slider-ptb black-bg" />
      <ChooseThree />
      <PortfolioOne
        itemClass="it-portfolio-area it-portfolio-style-2 z-index-1 it-portfolio-bg pt-120"
        portfolios={portfolioDataTwo}
      />
      <TeamTwo />
      <StepOne itemClass="it-step-area it-step-bg pt-130 pb-100 gray-bg" />
      <TestimonialThree />
      <BrandOne />
      <BlogThree hasShape />
    </main>
  );
};
export default MainContentThree;
