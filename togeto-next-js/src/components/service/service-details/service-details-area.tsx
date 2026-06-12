import Image from 'next/image';
import DetailsSidebar from './details-sidebar';
import DetailsContent from './details-content';
import { IServiceDT } from '@/types/service-d-t';

import detailsImg from '@/assets/img/service/service-details.jpg';
import detailsImg2 from '@/assets/img/service/service-details-1-3.jpg';

interface ServiceDetailsProps {
  service: IServiceDT;
}

const ServiceDetailsArea = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="it-sv-details-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            {/* Sidebar Area */}
            <DetailsSidebar />
            {/* Sidebar Area */}
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="it-pro-details-wrap">
              <div
                className="it-pro-details-thumb mb-40 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <Image
                  className="image-height-auto"
                  src={service?.detailsImage || detailsImg}
                  alt="details-img"
                  width={904}
                  height={500}
                />
              </div>
              <h4 className="it-pro-details-title mb-15">
                {service?.title || 'Service Title Not Found'}
              </h4>
              <div className="it-pro-details-text">
                <p className="mb-20">
                  Reliability and punctuality are critical pillars of success in
                  any endeavor. Reliability ensures consistent performance,
                  builds trust, and fosters strong relationships. Punctuality
                  reflects professionalism and respect for others' time.
                  Together, they create a foundation of dependability, enhancing
                  productivity and credibility. Being reliable and punctual
                  demonstrates integrity and commitment to excellence.{' '}
                </p>
                <p className="mb-45">
                  We have more than twenty years of experience. During that
                  time, we’ve become expert in freight transportation by air and
                  all its related services. We work closely with all major
                  airlines around the world. Ongoing negotiations ensure that we
                  always have the cargo space we need and the ability to offer
                  you
                </p>
                <h4 className="it-pro-details-title mb-15">
                  Efficient Container Cargo Solutions
                </h4>
                <p className="mb-50">
                  Vestibulum in ipsum velit. Aliquam libero sem asfds asf,
                  rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem
                  sed erat pos se quam dignissim. Mauris feugiat, nisi nec
                  dapibuasas a gas dictum, ligula nulla gravida ante, non
                  aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo,
                  nec mattis risus auris consequat viverra sapien id lobortis.
                  Vivamus auctor turpis vel dignissim licitudin.
                </p>
              </div>
              {/* Service Details Content */}
              <DetailsContent />
              {/* Service Details Content */}
              <div className="row">
                <div className="col-12">
                  <div className="it-pro-details-text mb-55">
                    <p>
                      Vestibulum in ipsum velit. Aliquam libero sem asfds asf,
                      rutrum eu scelerisque ut, vehicula a erat. Phasellus ac
                      sem sed erat pos se quam dignissim. Mauris feugiat, nisi
                      nec dapibuasas a gas dictum, ligula nulla gravida ante,
                      non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus
                      justo, nec mattis risus auris consequat viverra sapien id
                      lobortis. Vivamus auctor turpis vel dignissim licitudin.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="it-pro-details-thumb mb-35 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <Image
                  className="image-height-auto"
                  src={detailsImg2}
                  alt="details-img"
                  width={904}
                  height={400}
                />
              </div>
              <h4 className="it-pro-details-title mb-15">How It Works</h4>
              <div className="it-pro-details-text">
                <p>
                  Togeto Logistics operates as an efficient, customer-focused
                  platform connecting businesses and individuals to reliable
                  transportation services. It streamlines logistics with
                  real-time tracking, optimized route planning, and transparent
                  pricing. Togeto ensures safe, punctual deliveries for goods of
                  all sizes, fostering seamless communication between clients
                  and drivers while maximizing efficiency and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailsArea;
