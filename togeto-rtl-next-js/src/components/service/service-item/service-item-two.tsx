import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemTwo = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-2-item mb-30">
      <span className="it-service-2-icon d-block mb-35">{service.icon}</span>
      <h4 className="it-service-2-title mb-25">
        <Link
          className="border-line-white"
          href={`/service-details/${service.id}`}
        >
          {service.title}
        </Link>
      </h4>
      <p>{service.description}</p>
      <Link
        className="it-btn-sm border-style"
        href={`/service-details/${service.id}`}
      >
        <span>{service.btnText}</span>
      </Link>
    </div>
  );
};
export default ServiceItemTwo;
