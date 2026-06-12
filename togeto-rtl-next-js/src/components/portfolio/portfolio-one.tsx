'use client';

import Image from 'next/image';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextArrowTwo, PrevArrowTwo } from '../svg';
import { portfolioDataOne } from '@/data/portfolio-data';
import PortfolioItemOne from './portfolio-item/portfolio-item-one';
import { IPortfolioDT } from '@/types/portfolio-d-t';

import shapeImg from '@/assets/img/shape/funfact-1.png';

// Props Type
interface PortfolioProps {
  itemClass?: string;
  portfolios?: IPortfolioDT[];
}

const PortfolioOne = ({
  itemClass,
  portfolios = portfolioDataOne,
}: PortfolioProps) => {
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 35,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1600': {
        slidesPerView: 5,
      },
      '1400': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
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
    <div
      id="portfolio"
      className={
        itemClass || 'it-portfolio-area z-index-1 it-portfolio-bg pt-120'
      }
    >
      <Image
        className="it-portfolio-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={1920}
        height={378}
      />
      <div className="container">
        <div className="it-portfolio-top-wrap mb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="it-section-title-box">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  Our Recent Work
                </span>
                <h4 className="it-section-title text-white it-split-text it-split-in-right">
                  Exceptional Results <br />
                  Delivered by Togeto
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-4">
              <div className="it-portfolio-arrow-box d-flex justify-content-md-end">
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".7"
                >
                  <button className="arrow-prev mr-10">
                    <NextArrowTwo />
                  </button>
                </div>
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <button className="arrow-next active">
                    <PrevArrowTwo />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="it-portfolio-wrap">
              <div className="swiper-container it-portfolio-active-2 fix">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {portfolios.map((portfolio) => (
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
export default PortfolioOne;
