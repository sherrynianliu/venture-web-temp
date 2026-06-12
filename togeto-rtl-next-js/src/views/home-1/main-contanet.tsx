import AboutOne from '@/components/about/about-one';
import BlogOne from '@/components/blog/blog-one';
import BrandOne from '@/components/brand/brand-one';
import ChooseOne from '@/components/choose/choose-one';
import FunFactOne from '@/components/funfact/funfact-one';
import HeroBannerOne from '@/components/hero/hero-banner/hero-banner-one';
import InformationOne from '@/components/information/information-one';
import ServiceOne from '@/components/service/service-one';
import TeamOne from '@/components/team/team-one';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import TextSliderOne from '@/components/text-slider/text-slider-one';

const MainContent = () => {
  return (
    <main>
      <HeroBannerOne />
      <AboutOne />
      <ServiceOne />
      <TextSliderOne />
      <ChooseOne />
      <FunFactOne />
      <InformationOne />
      <TeamOne />
      <TestimonialOne />
      <BrandOne />
      <BlogOne />
    </main>
  );
};
export default MainContent;
