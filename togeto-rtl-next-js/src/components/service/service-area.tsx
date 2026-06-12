import { serviceDataTwo } from '@/data/service-data';
import ServiceItemTwo from './service-item/service-item-two';

const ServiceArea = () => {
  return (
    <div className="it-service-2-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          {serviceDataTwo.map((service, i) => (
            <div
              key={service.id}
              className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <ServiceItemTwo service={service} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-service-btn text-center mt-40 it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <a className="it-btn-orange" href="#">
                <span>More Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceArea;
