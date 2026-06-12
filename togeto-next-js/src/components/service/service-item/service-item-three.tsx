'use client';

import { useRef } from 'react';
import Link from 'next/link';
import useRevealBgAnim from '@/hooks/use-reveal-bg';
import { IServiceDT } from '@/types/service-d-t';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemThree = ({ service }: ServiceItemProps) => {
  const revealItemRef = useRef<HTMLDivElement>(null);

  useRevealBgAnim({ revealItemRef, revealBgIndex: 1 });

  return (
    <div
      ref={revealItemRef}
      className="it-service-item-wrap it-service-reveal-item"
    >
      <Link href={`/service-details/${service.id}`}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="it-service-left">
              <h4 className="it-service-title">
                <span>{service.serviceCount}.</span> {service.title}
              </h4>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="it-service-arrow-2 text-sm-end">
              <span>
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="it-service-reveal-bg"
        style={{
          backgroundImage: `url(${
            service.bgImage || 'assets/img/service/service-3-1.jpg'
          })`,
        }}
      ></div>
    </div>
  );
};
export default ServiceItemThree;
