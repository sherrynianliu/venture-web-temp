'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import { testimonialDataFour } from '@/data/testimonial-data';
import TestimonialFunFactOne from './testimonial-funfact/testimonial-funfact-one';
import ModalVideoWrapper from '../modal-video/modal-video';
import { NextArrowThree, PrevArrowThree, Quote, Star, VideoPlay } from '../svg';

import videoImg from '@/assets/img/video/video-4-2.jpg';

const TestimonialFour = () => {
  const dispatch = useAppDispatch();

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };

  // Slider Options
  const sliderOption: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    autoplay: { delay: 3500 },
    navigation: {
      prevEl: '.arrow-prev',
      nextEl: '.arrow-next',
    },
  };

  return (
    <div
      id="testimonial"
      className="it-testimonial-2-area it-testimonial-style-2 gray-bg p-relative z-index-1 pt-130 pb-130"
    >
      {/* Modal Video Wrapper */}
      <ModalVideoWrapper />
      {/* Modal Video Wrapper */}

      <div className="container">
        <div className="pb-75">
          <div className="row align-items-end justify-content-lg-end">
            <div className="col-xl-8 col-lg-7">
              <div className="it-section-title-box">
                <span className="it-section-subtitle">Our testimonial</span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Sound From our <br />
                  happy partners
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7">
              <TestimonialFunFactOne />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="it-testimonial-wrapper p-relative">
              <div className="swiper-container it-testimonial-active fix">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {testimonialDataFour.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="swiper-slide">
                      <div className="it-testimonial-2-item-wrap">
                        <div className="it-testimonial-2-item">
                          <div className="it-testimonial-2-ratting mb-25">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <span key={starIndex}>
                                <Star />
                              </span>
                            ))}
                          </div>
                          <div className="it-testimonial-text">
                            <p className="mb-20">{testimonial.description}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="it-testimonial-avatar-wrap d-flex align-items-center">
                              <div className="it-testimonial-avatar-info">
                                <h5 className="it-testimonial-avatar-name">
                                  {testimonial.author}
                                </h5>
                                <span>{testimonial.designation}</span>
                              </div>
                            </div>
                            <span className="it-testimonial-quote">
                              <Quote />
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="it-testimonial-2-arrow-box mt-40">
                <button className="arrow-prev mr-10 active">
                  <PrevArrowThree />
                </button>
                <button className="arrow-next">
                  <NextArrowThree />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="it-testimonial-wrap p-relative wow img-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <div className="it-testimonial-thumb">
                <Image
                  className="w-100 image-height-auto"
                  src={videoImg}
                  alt="video-img"
                  width={416}
                  height={450}
                />
              </div>
              <div className="it-video-icon">
                <Link
                  href="#"
                  className="popup-video ripple-white"
                  onClick={handleLinkClick}
                >
                  <span>
                    <VideoPlay />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialFour;
