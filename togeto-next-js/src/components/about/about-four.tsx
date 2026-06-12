import Image from 'next/image';
import Link from 'next/link';
import { CheckMark } from '../svg';

import shapeImg1 from '@/assets/img/shape/about-4-1.png';
import shapeImg2 from '@/assets/img/shape/about-4-2.png';
import aboutImg1 from '@/assets/img/about/about-4-1.jpg';
import aboutImg2 from '@/assets/img/about/about-4-2.jpg';
import aboutImg3 from '@/assets/img/about/about-4-3.jpg';

const itemData = [
  'Aerospace & Defense',
  'Automotive',
  'Fashion & Retail',
  'Fashion & Retail',
];

const AboutFour = () => {
  return (
    <div id="about" className="it-about-4-area p-relative pb-180">
      <Image
        className="it-about-4-shape-2 truck d-none d-xl-block"
        src={shapeImg2}
        alt="shape=img"
        width={697}
        height={124}
      />
      <div className="container">
        <div className="row align-items-end justify-content-center">
          <div className="col-xl-5 col-lg-6 order-1 order-md-0">
            <div className="it-about-4-thumb-wrap p-relative">
              <div className="it-about-4-thumb shine-effect-2">
                <Image
                  className="image-height-auto"
                  src={aboutImg1}
                  alt="about-img"
                  width={452}
                  height={595}
                />
              </div>
              <div className="it-about-4-thumb-sm shine-effect-2">
                <Image
                  className="image-height-auto"
                  src={aboutImg2}
                  alt="about-img"
                  width={315}
                  height={335}
                />
              </div>
              <div className="it-about-4-client-box d-flex align-items-center">
                <Image
                  className="mr-20 image-height-auto"
                  src={aboutImg3}
                  alt="about-img"
                  width={107}
                  height={111}
                />
                <div className="it-about-4-client-info">
                  <h5>3500+</h5>
                  <span>Satisfied Client</span>
                </div>
              </div>
              <Image
                className="it-about-4-shape-1 image-height-auto"
                src={shapeImg1}
                alt="shape-img"
                width={30}
                height={159}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 order-0 order-md-1">
            <div className="it-about-4-left">
              <div className="it-section-title-box">
                <span className="it-section-subtitle">More About us</span>
                <h4 className="it-section-title pb-20 it-split-text it-split-in-right">
                  Reliable & Sustainable <br />
                  Train Transport
                </h4>
              </div>
              <p
                className="mb-30 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                Our mission is to provide reliable, efficient, and eco-friendly
                train <br />
                transport services, connecting people and businesses seamlessly.
                <br />
                With a commitment to safety and sustainability.
              </p>
              <div
                className="it-about-list mb-40 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <ul>
                  {itemData.map((item, i) => (
                    <li key={i}>
                      <span>
                        <CheckMark />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
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
        </div>
      </div>
    </div>
  );
};
export default AboutFour;
