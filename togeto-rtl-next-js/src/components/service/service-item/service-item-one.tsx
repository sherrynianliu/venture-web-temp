import Image from 'next/image';
import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';
import { RightArrowUp } from '@/components/svg';

import serviceImg from '@/assets/img/service/service-1-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemOne = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-item-wrap">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="it-service-left">
            <h4 className="it-service-title">
              <Link
                className="border-line-white"
                href={`/service-details/${service.id}`}
              >
                {service.title}
              </Link>
            </h4>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="it-service-right d-flex justify-content-between align-items-center">
            <div className="it-service-text">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="it-service-thumb p-relative">
            <Image
              className="w-100 image-height-auto"
              src={service.image || serviceImg}
              alt="service-img"
              width={303}
              height={150}
            />
            <Link
              href={`/service-details/${service.id}`}
              className="it-service-arrow"
            >
              <RightArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceItemOne;
