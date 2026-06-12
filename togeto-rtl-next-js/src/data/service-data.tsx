import { IServiceDT } from '@/types/service-d-t';

import serviceImg1 from '@/assets/img/service/service-1-1.jpg';
import serviceImg2 from '@/assets/img/service/service-1-2.jpg';
import serviceImg3 from '@/assets/img/service/service-1-3.jpg';
import serviceImg4 from '@/assets/img/service/service-1-4.jpg';
import serviceImg5 from '@/assets/img/service/service-5-1.jpg';
import serviceDetailsImg from '@/assets/img/service/service-details.jpg';
import {
  ServiceIconEight,
  ServiceIconEleven,
  ServiceIconFive,
  ServiceIconFour,
  ServiceIconNine,
  ServiceIconOne,
  ServiceIconSeven,
  ServiceIconSix,
  ServiceIconTen,
  ServiceIconThree,
  ServiceIconTwelve,
  ServiceIconTwo,
} from '@/components/svg';

export const serviceDataOne: IServiceDT[] = [
  {
    id: 1,
    image: serviceImg1,
    title: 'Long Distance Moves',
    description: `Logistics ensures the efficient movement of goods,
                          managing transportation, storage, and delivery. It
                          plays a vital role in connecting businesses and
                          customers.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 2,
    image: serviceImg2,
    title: 'International Moves',
    description: `Logistics ensures the efficient movement of goods,
                          managing transportation, storage, and delivery. It
                          plays a vital role in connecting businesses and
                          customers.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 3,
    image: serviceImg3,
    title: 'Corporate Moves',
    description: `Logistics ensures the efficient movement of goods,
                          managing transportation, storage, and delivery. It
                          plays a vital role in connecting businesses and
                          customers.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 4,
    image: serviceImg4,
    title: 'Local Moves in Town',
    description: `Logistics ensures the efficient movement of goods,
                          managing transportation, storage, and delivery. It
                          plays a vital role in connecting businesses and
                          customers.`,
    detailsImage: serviceDetailsImg,
  },
];

export const serviceDataTwo: IServiceDT[] = [
  {
    id: 5,
    icon: <ServiceIconOne />,
    title: 'Global Shipping',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 6,
    icon: <ServiceIconTwo />,
    title: 'Ocean Freight',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 7,
    icon: <ServiceIconThree />,
    title: 'Warehousing',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 8,
    icon: <ServiceIconFour />,
    title: 'Rail Freight',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 9,
    icon: <ServiceIconOne />,
    title: 'Supply Management',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 10,
    icon: <ServiceIconTwo />,
    title: 'Reverse Logistics',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 11,
    icon: <ServiceIconThree />,
    title: 'Warehousing',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 12,
    icon: <ServiceIconFour />,
    title: 'Rail Freight',
    description: `Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
];

export const serviceDataThree: IServiceDT[] = [
  {
    id: 13,
    bgImage: '/assets/img/portfolio/portfolio-3-5.jpg',
    serviceCount: '01',
    title: 'Long Distance Moves',
    detailsImage: serviceDetailsImg,
  },
  {
    id: 14,
    bgImage: 'assets/img/portfolio/portfolio-3-2.jpg',
    serviceCount: '02',
    title: 'International Moves',
    detailsImage: serviceDetailsImg,
  },
  {
    id: 15,
    bgImage: '/assets/img/portfolio/portfolio-3-3.jpg',
    serviceCount: '03',
    title: 'Corporate Moves',
    detailsImage: serviceDetailsImg,
  },
  {
    id: 16,
    bgImage: 'assets/img/portfolio/portfolio-3-4.jpg',
    serviceCount: '04',
    title: 'Local Moves in Town',
    detailsImage: serviceDetailsImg,
  },
  {
    id: 17,
    bgImage: 'assets/img/portfolio/portfolio-3-5.jpg',
    serviceCount: '05',
    title: 'Ocean Freight',
    detailsImage: serviceDetailsImg,
  },
];

export const serviceDataFour: IServiceDT[] = [
  {
    id: 18,
    icon: <ServiceIconFive />,
    title: 'Fast Delivery',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 19,
    icon: <ServiceIconSix />,
    title: 'Advance technology',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 20,
    icon: <ServiceIconSeven />,
    title: 'Shipping Insurance',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 21,
    icon: <ServiceIconEight />,
    title: 'Ecological balance',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 22,
    icon: <ServiceIconNine />,
    title: 'Global Shipping',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 23,
    icon: <ServiceIconTen />,
    title: 'Intermodal Transport',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 24,
    icon: <ServiceIconEleven />,
    title: 'Container Services',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
  {
    id: 25,
    icon: <ServiceIconTwelve />,
    title: 'Real-Time Tracking',
    description: `Togeto specializes in international shipping, offering fast,
                  secure, <br /> and cost-effective solution.`,
  },
];

export const serviceDataFive: IServiceDT[] = [
  {
    id: 26,
    image: serviceImg5,
    serviceCount: '01',
    title: 'Long Distance Moves',
    description: `At Togeto, our mission is to revolutionize logistics by
                      providing seamless, reliable, and cost-effective
                      solutions.`,
  },
  {
    id: 27,
    image: serviceImg5,
    serviceCount: '02',
    title: 'International Moves',
    description: `At Togeto, our mission is to revolutionize logistics by
                      providing seamless, reliable, and cost-effective
                      solutions.`,
  },
  {
    id: 28,
    image: serviceImg5,
    serviceCount: '03',
    title: 'Corporate Moves',
    description: `At Togeto, our mission is to revolutionize logistics by
                      providing seamless, reliable, and cost-effective
                      solutions.`,
  },
  {
    id: 29,
    image: serviceImg5,
    serviceCount: '04',
    title: 'Local Moves in Town',
    description: `At Togeto, our mission is to revolutionize logistics by
                      providing seamless, reliable, and cost-effective
                      solutions.`,
  },
  {
    id: 30,
    image: serviceImg5,
    serviceCount: '05',
    title: 'Ocean Freight',
    description: `At Togeto, our mission is to revolutionize logistics by
                      providing seamless, reliable, and cost-effective
                      solutions.`,
  },
];

export const serviceData: IServiceDT[] = [
  ...serviceDataOne,
  ...serviceDataTwo,
  ...serviceDataThree,
  ...serviceDataFour,
  ...serviceDataFive,
];
