import Image from 'next/image';
import Link from 'next/link';

import shapeImg from '@/assets/img/shape/hero-4-1.png';

const HeroBannerThree = () => {
  return (
    <div className="it-hero-2-area it-hero-ptb fix p-relative">
      <Image
        className="it-hero-2-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={1920}
        height={696}
      />
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-8 col-xl-7">
            <div className="it-hero-content">
              <h1 className="it-hero-2-title mb-0 it-split-text it-split-in-right">
                Seamless Train <br /> Cargo Transforming Regional Logistics
              </h1>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5">
            <div className="it-hero-content">
              <p className="mb-30">
                Logistics ensures the efficient movement <br /> of goods,
                managing transportation, storage, <br /> and delivery. It plays
                a vital role in
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
  );
};
export default HeroBannerThree;
