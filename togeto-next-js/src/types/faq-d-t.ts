import { StaticImageData } from 'next/image';

export interface IFaqDT {
  uuid: string;
  title: string;
  image?: StaticImageData;
  description: string;
}
