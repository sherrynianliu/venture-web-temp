import Image from 'next/image';
import Link from 'next/link';
import AboutFunFactTwo from './about-funfact/about-funfact-two';

import shapeImg1 from '@/assets/img/shape/about-5-1.png';
import shapeImg2 from '@/assets/img/shape/about-5-2.png';
import aboutImg1 from '@/assets/img/about/about-5-1.jpg';
import aboutImg2 from '@/assets/img/about/about-5-2.jpg';

const AboutFive = () => {
  return (
    <div id="about" className="it-about-5-area p-relative pt-130 pb-130">
      <Image
        className="it-about-5-shape-1 image-height-auto"
        src={shapeImg1}
        alt="shape-img"
        width={305}
        height={149}
      />
      <Image
        className="it-about-5-shape-2 train d-none d-xl-block"
        src={shapeImg2}
        alt="shape-img"
        width={473}
        height={132}
      />
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-9 col-xl-9">
            <div className="row align-items-center">
              <div
                className="col-lg-5 mb-75 order-1 order-lg-0 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <div className="it-about-5-thumb">
                  <Image
                    className="image-height-auto"
                    src={aboutImg2}
                    alt="about-img"
                    width={416}
                    height={443}
                  />
                </div>
              </div>
              <div className="col-lg-7 mb-75 order-0 order-lg-1">
                <div className="it-about-5-content">
                  <div className="it-section-title-box mb-10">
                    <span className="it-section-subtitle">More About us</span>
                    <h4 className="it-section-title it-split-text it-split-in-right">
                      Transport And Logistics Services <br />
                      We are the best
                    </h4>
                  </div>
                  <div
                    className="it-about-5-text wow animate__fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <p className="mb-40">
                      Our mission is to provide reliable, efficient, and
                      eco-friendly train transport services, connecting people
                      and businesses seamlessly.
                    </p>
                  </div>
                  <div
                    className="it-fade-anim"
                    data-fade-from="top"
                    data-ease="bounce"
                    data-delay=".5"
                  >
                    <Link className="it-btn-orange" href="/about">
                      <span>More About Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xxl-11 col-xl-11 col-lg-10 animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <AboutFunFactTwo />
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3">
            <div
              className="it-about-5-thumb thumb-style-1 text-xl-end wow img-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <Image
                className="image-height-auto"
                src={aboutImg1}
                alt="about-img"
                width={381}
                height={511}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutFive;
