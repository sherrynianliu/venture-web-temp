import Image from 'next/image';
import Link from 'next/link';

import shapeImg from '@/assets/img/shape/hero-3-1.png';
import heroImg from '@/assets/img/hero/hero-3.jpg';

const HeroBannerTwo = () => {
  return (
    <div className="it-hero-area it-hero-style-2 p-relative pb-130">
      <div className="it-hero-wrap it-hero-ptb p-relative">
        <Image
          className="it-hero-shape-2 image-height-auto"
          src={shapeImg}
          alt="shape-img"
          width={1920}
          height={378}
        />
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-7">
              <div className="it-hero-content">
                <h1 className="it-hero-title it-split-text it-split-in-right">
                  Grow Your Business.
                  <br />
                  <span> We Will Take </span>Care <br /> All Your Logistics
                </h1>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5">
              <div className="it-hero-content text-xl-end">
                <p className="mb-30 it-split-text it-split-in-right">
                  Logistics ensures the efficient movement <br />
                  managing transportation, storage, and <br />
                  delivery. It plays a vital role in
                </p>
                <div
                  className="it-hero-btn it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-black" href="/contact">
                    <span>Get Started Now</span>
                  </Link>
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
                  className="w-100 image-height-auto"
                  src={heroImg}
                  alt="hero-img"
                  width={1730}
                  height={850}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerTwo;
