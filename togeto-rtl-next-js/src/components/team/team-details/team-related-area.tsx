'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { NextArrowThree, PrevArrowThree } from '@/components/svg';
import { teamDataOne } from '@/data/team-data';
import TeamItemOne from '../team-item/team-item-one';

const TeamRelatedArea = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
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
    <div className="it-team-area z-index-1 pt-130 pb-130">
      <div className="container">
        <div className="it-team-top-wrap mb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Qualified Experts
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
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
            <div className="it-team-wrap">
              <div className="swiper-container it-team-active fix">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {teamDataOne
                    .map((team) => (
                      <SwiperSlide key={team.id} className="swiper-slide">
                        <TeamItemOne team={team} />
                      </SwiperSlide>
                    ))
                    .slice(0, 5)}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamRelatedArea;
