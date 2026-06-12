import { Metadata } from 'next';
import { serviceData } from '@/data/service-data';
import ServiceDetailsMain from '@/views/service-details/service-details';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = serviceData.find(
    (service) => String(service.id) === params.id
  );
  return {
    title: service ? `Togeto - ${service.title}` : 'Togeto - Service Not Found',
  };
}

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    id: String(service.id),
  }));
}

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const service = serviceData.find(
    (service) => String(service.id) === params.id
  );
  return service ? (
    <ServiceDetailsMain service={service} />
  ) : (
    <div className="text-center pt-100">
      Service not found with ID: {params.id}
    </div>
  );
}
