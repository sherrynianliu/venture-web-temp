import Link from 'next/link';
import ServiceItemOne from './service-item/service-item-one';
import { serviceDataOne } from '@/data/service-data';

const ServiceOne = () => {
  return (
    <div
      id="service"
      className="it-service-area p-relative z-index-1 black-bg pt-130 pb-130"
    >
      <div className="container">
        <div className="it-service-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <h4 className="it-section-title text-white it-split-text it-split-in-right">
                  Solutions That
                  <br />
                  Make Changes
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="it-service-btn text-lg-end it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange hover-2" href="/service">
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataOne.map((service) => (
            <div key={service.id} className="col-12">
              <ServiceItemOne service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceOne;
