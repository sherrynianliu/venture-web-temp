import Link from 'next/link';
import { serviceDataTwo } from '@/data/service-data';
import ServiceItemTwo from './service-item/service-item-two';

const ServiceTwo = () => {
  return (
    <div id="service" className="it-service-2-area pt-130 pb-130 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-65">
              <span className="it-section-subtitle it-split-text it-split-in-right">
                Our Services
              </span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                Dependable Logistics for Seamless <br />
                Global Transportation.
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataTwo
            .map((service, i) => (
              <div
                key={service.id}
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + 0.2 * i}s`}
              >
                <ServiceItemTwo service={service} />
              </div>
            ))
            .slice(0, 4)}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-service-btn text-center mt-40 it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <Link className="it-btn-orange" href="/service">
                <span>More Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceTwo;
