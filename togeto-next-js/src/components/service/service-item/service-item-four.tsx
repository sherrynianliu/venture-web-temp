import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemFour = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-2-item mb-30">
      <span className="it-service-2-icon d-block mb-35">{service.icon}</span>
      <h4 className="it-service-2-title mb-15">
        <Link
          className="border-line-white"
          href={`/service-details/${service.id}`}
        >
          {service.title}
        </Link>
      </h4>
      <p
        dangerouslySetInnerHTML={{
          __html: service.description || 'Service Description',
        }}
      ></p>
    </div>
  );
};
export default ServiceItemFour;
