import Image from 'next/image';
import { serviceDataFour } from '@/data/service-data';
import ServiceItemFour from './service-item/service-item-four';

import shapeImg from '@/assets/img/shape/service-4-bg.png';

const ServiceFour = () => {
  return (
    <div
      id="choose"
      className="it-service-2-area p-relative fix it-service-2-style-2 pt-130 pb-140"
    >
      <Image
        className="it-service-2-shape-1"
        src={shapeImg}
        alt="shape-img"
        width={1920}
        height={1133}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-65">
              <span className="it-section-subtitle">Why Choose Us?</span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                Unleashing The Power of <br />
                Seamless Logistics
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataFour
            .map((service, i) => (
              <div
                key={service.id}
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + 0.2 * i}s`}
              >
                <ServiceItemFour service={service} />
              </div>
            ))
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};
export default ServiceFour;
