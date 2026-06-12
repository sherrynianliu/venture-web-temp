import { StaticImageData } from 'next/image';

export interface IServiceDT {
  id: number;
  image?: StaticImageData;
  bgImage?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  detailsImage?: StaticImageData;
  serviceCount?: string;
  btnText?: string;
}
