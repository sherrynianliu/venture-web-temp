'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { testimonialDataThree } from '@/data/testimonial-data';
import { NextArrowTwo, PrevArrowTwo } from '../svg';
import TestimonialItem from './tesimonial-item';

import shapeImg1 from '@/assets/img/shape/testimonial-3-1.png';
import shapeImg2 from '@/assets/img/shape/testimonial-3-2.png';

const TestimonialThree = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 35,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '992': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: '.it-testimonial-dots',
      clickable: true,
    },
    navigation: {
      prevEl: '.arrow-prev',
      nextEl: '.arrow-next',
    },
  };
  return (
    <div
      id="testimonial"
      className="it-testimonial-2-area it-testimonial-2-style-2 p-relative z-index-1 pt-130 pb-130"
    >
      <Image
        className="it-testimonial-2-shape-2 plan-down d-none d-xl-block"
        src={shapeImg1}
        alt="shape-img"
        width={276}
        height={199}
      />
      <Image
        className="it-testimonial-2-shape-3 plan-down2 d-none d-xl-block"
        src={shapeImg2}
        alt="shape-img"
        width={159}
        height={191}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="it-section-title-box text-center pb-90">
              <span className="it-section-subtitle">Testimonial</span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                What our clients say <br />
                about our service
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <div className="it-testimonial-wrapper p-relative">
              <div className="it-testimonial-2-black-box"></div>
              <div className="swiper-container it-testimonial-active-3 fix">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {testimonialDataThree
                    .map((testimonial) => (
                      <SwiperSlide
                        key={testimonial.id}
                        className="swiper-slide"
                      >
                        <TestimonialItem testimonial={testimonial} />
                      </SwiperSlide>
                    ))
                    .slice(0, 4)}
                </Swiper>
              </div>
              <div className="it-testimonial-arrow-wrap d-none d-xl-block">
                <button className="arrow-prev">
                  <NextArrowTwo />
                </button>
                <button className="arrow-next">
                  <PrevArrowTwo />
                </button>
              </div>
            </div>
            <div className="it-testimonial-dots text-center mt-95"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialThree;
