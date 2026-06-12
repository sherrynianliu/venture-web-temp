'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { NextArrowThree, PrevArrowThree } from '@/components/svg';
import { portfolioDataOne } from '@/data/portfolio-data';
import PortfolioItemOne from '../portfolio-item/portfolio-item-one';

const PortfolioRelatedArea = () => {
  const sliderOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 3,
      },
      '992': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
    navigation: {
      prevEl: '.arrow-prev',
      nextEl: '.arrow-next',
    },
  };
  return (
    <div className="it-portfolio-area it-portfolio-inner-style z-index-1 pb-120">
      <div className="container">
        <div className="it-portfolio-top-wrap mb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="it-section-title-box">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Related Project
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-4">
              <div className="it-testimonial-2-arrow-box d-flex justify-content-lg-end">
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <button className="arrow-prev mr-20 active">
                    <PrevArrowThree />
                  </button>
                </div>
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".7"
                >
                  <button className="arrow-next">
                    <NextArrowThree />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="it-portfolio-wrap">
              <div className="swiper-container it-portfolio-active-3 fix">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {portfolioDataOne.map((portfolio) => (
                    <SwiperSlide key={portfolio.id} className="swiper-slide">
                      <PortfolioItemOne portfolio={portfolio} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioRelatedArea;
