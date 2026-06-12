import Link from 'next/link';
import { serviceDataFour } from '@/data/service-data';
import ServiceItemFour from './service-item/service-item-four';

const ServiceFive = () => {
  return (
    <div
      id="service"
      className="it-service-2-area p-relative gray-bg fix it-service-2-style-2 it-service-2-style-3 pt-130 pb-130"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-65">
              <span className="it-section-subtitle">Our Services</span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                Dependable Logistics for Seamless <br />
                Global Transportation.
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
            .slice(4, 8)}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-service-2-btn text-center mt-40 it-fade-anim"
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
    </div>
  );
};
export default ServiceFive;
