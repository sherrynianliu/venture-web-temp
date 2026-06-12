import Image from 'next/image';
import Link from 'next/link';

import shapeImg1 from '@/assets/img/shape/about-1-1.png';
import shapeImg2 from '@/assets/img/shape/about-1-2.png';
import aboutImg from '@/assets/img/about/about-1-1.jpg';

const AboutOne = () => {
  return (
    <div
      id="about"
      className="it-about-area z-index-1 p-relative pt-130 pb-130 white-bg"
    >
      <Image
        className="it-about-shape-1"
        src={shapeImg1}
        alt="shape-img"
        width={777}
        height={786}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="it-about-left it-text-anim">
              <div className="it-section-title-box">
                <h4 className="it-section-title pb-20 it-split-text it-split-in-right">
                  Swift Delivery, <br /> Safe <span>Packaging</span>{' '}
                  <span>Trusted</span> Every Time
                </h4>
              </div>
              <p className="mb-30">
                Logistics ensures the efficient movement of goods, <br />
                managing transportation, storage, and delivery. It plays <br />a
                vital role in connecting businesses and customers,
              </p>
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
          <div
            className="col-xl-7 col-lg-7 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-about-thumb-wrap p-relative">
              <Image
                className="it-about-shape-2 image-height-auto"
                src={shapeImg2}
                alt="shape-img"
                width={307}
                height={289}
              />
              <div className="it-about-thumb text-end img-style">
                <Image
                  className="image-height-auto"
                  src={aboutImg}
                  alt="about-img"
                  width={645}
                  height={635}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutOne;
