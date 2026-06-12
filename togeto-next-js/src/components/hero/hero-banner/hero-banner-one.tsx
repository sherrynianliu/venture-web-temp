import Image from 'next/image';
import Link from 'next/link';

import shapeImg from '@/assets/img/shape/hero-1-1.png';
import heroImg from '@/assets/img/hero/hero-1.jpg';

const HeroSection = () => {
  return (
    <div className="it-hero-area">
      <div className="it-hero-wrap p-relative">
        <Image
          className="it-hero-shape-1 image-height-auto"
          src={shapeImg}
          alt="shape-img"
          width={1716}
          height={378}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-12">
              <div className="it-hero-content text-center" data-aos="fade-up">
                <h1 className="it-hero-title it-split-text it-split-in-right">
                  Grow Your Business. <span>We Will</span>
                  <span>Take</span> Care All Your Logistics
                </h1>
                <p
                  className="mb-50 wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  Logistics ensures the efficient movement of goods, managing
                  transportation, <br />
                  storage, and delivery. It plays a vital role in connecting
                  businesses and customers, <br />
                  optimizing supply chains for success.
                </p>
                <div className="it-hero-btn d-flex align-items-center justify-content-center">
                  <div
                    className="it-fade-anim"
                    data-fade-from="top"
                    data-ease="bounce"
                    data-delay=".5"
                  >
                    <Link className="it-btn-black mr-30 mb-20" href="/contact">
                      <span>Get Started Now</span>
                    </Link>
                  </div>
                  <div
                    className="it-fade-anim"
                    data-fade-from="top"
                    data-ease="bounce"
                    data-delay=".7"
                  >
                    <Link className="it-btn-orange mb-20" href="/contact">
                      <span>Book a Call</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1750">
        <div className="row">
          <div className="col-12">
            <div className="it-hero-thumb-wrap p-relative">
              <div className="it-hero-thumb shine-effect-2">
                <Image
                  className="image-height-auto"
                  src={heroImg}
                  alt="hero-img"
                  width={1720}
                  height={793}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
