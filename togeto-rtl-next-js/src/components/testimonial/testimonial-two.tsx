'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import testimonialImg from '@/assets/img/testimonial/testimonial-2-1.jpg';
import { testimonialDataTwo } from '@/data/testimonial-data';
import { CircleTwo, NextArrowThree, PrevArrowThree, Quote, Star } from '../svg';

import shapeImg from '@/assets/img/shape/testimonial-2-1.png';
import avatarImg from '@/assets/img/testimonial/avata-1-1.png';

const TestimonialTwo = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    autoplay: { delay: 3000 },
    navigation: {
      prevEl: '.arrow-prev-2',
      nextEl: '.arrow-next-2',
    },
  };

  return (
    <div
      id="testimonial"
      className="it-testimonial-2-area p-relative z-index-1 pt-130 pb-130"
    >
      <Image
        className="it-testimonial-2-shape-1 d-none d-xl-block ship"
        src={shapeImg}
        alt="shape-img"
        width={363}
        height={403}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="it-section-title-box text-center pb-65">
              <span className="it-section-subtitle it-split-text it-split-in-right">
                Testimonial
              </span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                What our clients say <br />
                about our service
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-4">
            <div className="it-testimonial-2-thumb">
              <Image
                className="image-height-auto"
                src={testimonialImg}
                alt="testimonial-img"
                width={755}
                height={552}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="it-testimonial-2-item-wrap">
              <div className="it-testimonial-wrapper p-relative">
                <div className="swiper-container it-testimonial-active-2">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    {...sliderOptions}
                    className="swiper-wrapper"
                  >
                    {testimonialDataTwo.map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="it-testimonial-2-item">
                          <div className="it-testimonial-2-ratting mb-25">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <span key={starIndex}>
                                <Star />
                              </span>
                            ))}
                          </div>
                          <div className="it-testimonial-text">
                            <p className="mb-20">{item.description}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="it-testimonial-avatar-wrap d-flex align-items-center">
                              <div className="it-testimonial-avatar z-index-1 mr-20 d-lg-inline-block p-relative">
                                <Image
                                  className="image-height-auto"
                                  src={item.avatar || avatarImg}
                                  alt={item.author}
                                  width={100}
                                  height={100}
                                />
                                <div className="it-testimonial-avatar-shape">
                                  <CircleTwo />
                                </div>
                              </div>
                              <div className="it-testimonial-avatar-info">
                                <h5 className="it-testimonial-avatar-name">
                                  {item.author}
                                </h5>
                                <span>{item.designation}</span>
                              </div>
                            </div>
                            <span className="it-testimonial-quote">
                              <Quote />
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="it-testimonial-2-arrow-box mt-40 d-flex align-items-center justify-content-lg-end justify-content-center">
              <div
                className="it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <button className="arrow-prev mr-20 active arrow-prev-2">
                  <PrevArrowThree />
                </button>
              </div>
              <div
                className="it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".7"
              >
                <button className="arrow-next arrow-next-2">
                  <NextArrowThree />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialTwo;
