'use client';

import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { NextArrowThree, PrevArrowThree } from '@/components/svg';
import { serviceDataTwo } from '@/data/service-data';
import ServiceItemTwo from '../service-item/service-item-two';

const ServiceRelatedArea = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 35,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 4,
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
    <div className="it-service-area it-service-inner-style z-index-1 pb-120">
      <div className="container">
        <div className="it-portfolio-top-wrap mb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="it-section-title-box">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Related Services
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
            <div className="it-service-wrap">
              <div className="swiper-container it-service-active fix">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {serviceDataTwo
                    .map((service) => (
                      <SwiperSlide key={service.id} className="swiper-slide">
                        <ServiceItemTwo service={service} />
                      </SwiperSlide>
                    ))
                    .slice(0, 6)}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceRelatedArea;
