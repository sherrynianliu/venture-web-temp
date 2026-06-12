import AboutFour from '@/components/about/about-four';
import BlogThree from '@/components/blog/blog-three';
import BrandOne from '@/components/brand/brand-one';
import CareerOne from '@/components/career/career-one';
import ContactTwo from '@/components/contact/contact-two';
import HeroBannerThree from '@/components/hero/hero-banner/hero-banner-three';
import PortfolioTwo from '@/components/portfolio/portfolio-two';
import ServiceFive from '@/components/service/service-five';
import ServiceFour from '@/components/service/service-four';
import StepOne from '@/components/step/step-one';
import TestimonialFour from '@/components/testimonial/testimonial-four';
import TextSliderOne from '@/components/text-slider/text-slider-one';
import VideoOne from '@/components/video/video-one';

const MainContentFour = () => {
  return (
    <main>
      <HeroBannerThree />
      <ContactTwo />
      <ServiceFour />
      <AboutFour />
      <ServiceFive />
      <VideoOne />
      <PortfolioTwo />
      <TextSliderOne />
      <TestimonialFour />
      <StepOne />
      <BrandOne />
      <CareerOne />
      <BlogThree itemClass="it-blog-area it-blog-bg p-relative gray-bg pt-130 pb-100" />
    </main>
  );
};
export default MainContentFour;
