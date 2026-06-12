import { StaticImageData } from 'next/image';

export interface IPortfolioDT {
  id: number;
  image: StaticImageData;
  subtitle?: string;
  title: string;
  detailsImage?: StaticImageData;
}
