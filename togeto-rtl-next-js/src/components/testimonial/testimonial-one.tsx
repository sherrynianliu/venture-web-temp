'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { testimonialDataOne } from '@/data/testimonial-data';
import { Circle, NextArrow, PrevArrow, Quote } from '../svg';

import avatarImg from '@/assets/img/testimonial/avata-1-1.png';

const TestimonialOne = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    autoplay: {
      delay: 3000,
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
      className="it-testimonial-area gray-bg z-index-1 pt-130 pb-130"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10">
            <div className="it-section-title-box text-center pb-85">
              <h4 className="it-section-title it-split-text it-split-in-right">
                Why <span>Clients</span> <br />
                Love <span>Working</span> with Us
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-9 col-xl-8 col-lg-10">
            <div className="it-testimonial-wrapper p-relative">
              <div className="swiper-container">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  {...sliderOptions}
                  className="swiper-wrapper it-testimonial-active"
                >
                  {testimonialDataOne.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="it-testimonial-item text-center">
                        <div className="it-testimonial-avatar mb-60 p-relative">
                          <Image
                            className="image-height-auto"
                            src={item.avatar || avatarImg}
                            alt={item.author}
                          />
                          <div className="it-testimonial-avatar-shape">
                            <Circle />
                          </div>
                        </div>
                        <div className="it-testimonial-text">
                          <p className="mb-40">{item.description}</p>
                        </div>
                        <div className="it-testimonial-quote mb-15">
                          <Quote />
                        </div>
                        <span>
                          {item.author}, {item.designation}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="it-testimonial-dots text-center mt-55"></div>
              <div className="it-testimonial-arrow-wrap d-none d-xl-block">
                <button className="arrow-prev">
                  <PrevArrow />
                  Prev
                </button>
                <button className="arrow-next">
                  Next
                  <NextArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialOne;
