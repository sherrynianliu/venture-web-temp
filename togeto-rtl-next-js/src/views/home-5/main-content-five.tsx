import AboutFive from '@/components/about/about-five';
import BlogTwo from '@/components/blog/blog-two';
import BrandOne from '@/components/brand/brand-one';
import FaqOne from '@/components/faq/faq-one';
import HeroSliderTwo from '@/components/hero/hero-slider/hero-slider-two';
import PortfolioTwo from '@/components/portfolio/portfolio-two';
import ServiceSix from '@/components/service/service-six';
import StepOne from '@/components/step/step-one';
import TeamOne from '@/components/team/team-one';
import TestimonialThree from '@/components/testimonial/testimonial-three';
import TextSliderOne from '@/components/text-slider/text-slider-one';
import InformationTwo from '@/components/information/information-two';
import ChooseFour from '@/components/choose/choose-four';

const MainContentFive = () => {
  return (
    <main>
      <HeroSliderTwo />
      <AboutFive />
      <TextSliderOne itemClass="it-text-slider-area it-text-slider-ptb black-bg" />
      <ServiceSix />
      <InformationTwo />
      <ChooseFour />
      <PortfolioTwo />
      <StepOne itemClass="it-step-area it-step-bg pt-130 pb-100 gray-bg" />
      <TeamOne />
      <FaqOne />
      <TestimonialThree />
      <BrandOne />
      <BlogTwo />
    </main>
  );
};
export default MainContentFive;
