import Image from 'next/image';
import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

import serviceImg from '@/assets/img/service/service-5-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemFive = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-item-wrap p-relative">
      <Image
        className="it-service-item-bg"
        src={service.image || serviceImg}
        alt="service-img"
      />
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="it-service-left">
            <h4 className="it-service-title">
              <span>{service.serviceCount}.</span>
              <Link
                className="border-line-white"
                href={`/service-details/${service.id}`}
              >
                {service.title}
              </Link>
            </h4>
          </div>
        </div>
        <div className="col-lg-5 col-md-8">
          <div className="it-service-text">
            <p>{service.description}</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="it-service-arrow-2 text-md-end">
            <Link href={`/service-details/${service.id}`}>
              <span>
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceItemFive;
