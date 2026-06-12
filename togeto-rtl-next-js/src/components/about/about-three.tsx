import Image from 'next/image';
import Link from 'next/link';
import AboutFunFactOne from './about-funfact/about-funfact-one';

import shapeImg from '@/assets/img/shape/about-3.png';
import aboutImg1 from '@/assets/img/about/about-3-1.jpg';
import aboutImg2 from '@/assets/img/about/about-3-2.jpg';

const AboutThree = () => {
  return (
    <div
      id="about"
      className="it-about-3-area white-bg z-index-1 p-relative pt-130 pb-130"
    >
      <Image
        className="it-about-3-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={803}
        height={786}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 order-1 order-xl-0">
            <div
              className="it-about-3-thumb left-img shine-effect wow img-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <Image
                className="image-height-auto"
                src={aboutImg1}
                alt="about-img"
                width={515}
                height={675}
              />
            </div>
          </div>
          <div className="col-xl-8 order-0 order-xl-1">
            <div className="row">
              <div className="col-lg-8">
                <div className="it-about-left">
                  <div className="it-section-title-box">
                    <span className="it-section-subtitle it-split-text it-split-in-right">
                      More About us
                    </span>
                    <h4 className="it-section-title pb-20 it-split-text it-split-in-right">
                      Creating Long-Term Value For Stakeholder.
                    </h4>
                  </div>
                  <div
                    className="wow animate__fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <p className="mb-15">
                      We are a global technology provider who assists businesses
                      to accelerate their digital transformation journey while
                      achieving efficiency, scalability, and lower cost of
                      ownership.
                    </p>
                    <p className="mb-30">
                      Whatever your ambition may be from embracing new digital
                      capabilities to reimagining how your business operates, we
                      can help you set a new standard of excellence
                    </p>
                  </div>
                  <div
                    className="it-fade-anim"
                    data-fade-from="top"
                    data-ease="bounce"
                    data-delay=".5"
                  >
                    <Link className="it-btn-black" href="/about">
                      <span>More About Us</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow img-anim-right"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <div className="it-about-3-thumb shine-effect">
                  <Image
                    className="image-height-auto"
                    src={aboutImg2}
                    alt="about-img"
                    width={303}
                    height={384}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <AboutFunFactOne itemClass="it-about-2-funfcat-wrap mt-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutThree;
