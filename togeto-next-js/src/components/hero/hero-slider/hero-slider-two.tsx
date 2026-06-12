'use client';

import Link from 'next/link';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { NextArrowThree, PrevArrowThree } from '@/components/svg';

const sliderData = [
  {
    id: 1,
    bgImg: '/assets/img/slider/slider-2-1.jpg',
    title: 'Efficient Logistics <br /> for Global Shipping',
    subtitle: `Delivering Cargo Beyond country's`,
    description: `Efficient logistics enhances global shipping by reducing <br>
                    delays and optimizing supply chain management.`,
    btnUrl: '/contact',
    btnText: 'Get Started Now',
  },
  {
    id: 2,
    bgImg: '/assets/img/slider/slider-2-2.jpg',
    title: 'Modern Logistics <br> Transportation',
    subtitle: `EFFORTLESS SHIPPING`,
    description: `Efficient logistics enhances global shipping by reducing <br>
                    delays and optimizing supply chain management.`,
    btnUrl: '/contact',
    btnText: 'Get Started Now',
  },
  {
    id: 3,
    bgImg: '/assets/img/slider/slider-1-3.jpg',
    title: 'Trusted Global <br> Freight Solutions',
    subtitle: `INNOVATIVE LOGISTICS`,
    description: `Efficient logistics enhances global shipping by reducing <br>
                    delays and optimizing supply chain management.`,
    btnUrl: '/contact',
    btnText: 'Get Started Now',
  },
];

const HeroSliderTwo = () => {
  const sliderOptions: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.arrow-prev',
      nextEl: '.arrow-next',
    },
  };

  return (
    <div className="it-slider-area it-slider-style-2">
      <div className="it-slider-wrap">
        <div className="swiper-container it-slider-active p-relative">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            {...sliderOptions}
            className="swiper-wrapper"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="it-slider-overlay z-index-1 fix p-relative">
                  <div
                    className="it-slider-bg"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="it-slider-content z-index-1">
                          <span className="it-slider-subtitle">
                            {item.subtitle}
                          </span>
                          <h1
                            className="it-slider-title p-relative"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h1>
                          <div className="it-slider-text d-flex pb-20">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></p>
                          </div>
                          <div className="it-slider-btn">
                            <Link
                              className="it-btn-orange hover-2"
                              href={item.btnUrl}
                            >
                              <span>{item.btnText}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="it-slider-arrow-box d-none d-lg-block">
            <div>
              <button className="arrow-next mb-25">
                <NextArrowThree />
              </button>
              <button className="arrow-prev active">
                <PrevArrowThree />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSliderTwo;
