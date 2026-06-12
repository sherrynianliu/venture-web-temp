import Link from 'next/link';
import { serviceDataThree } from '@/data/service-data';
import ServiceItemThree from './service-item/service-item-three';

const ServiceThree = () => {
  return (
    <div
      id="service"
      className="it-service-area it-service-style-2 p-relative z-index-1 gray-bg pt-130 pb-130"
    >
      <div className="container">
        <div className="it-service-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  Premium Services
                </span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Solutions That <br />
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
                <Link className="it-btn-orange" href="/service">
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataThree.map((service) => (
            <div key={service.id} className="col-12">
              <ServiceItemThree service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceThree;
