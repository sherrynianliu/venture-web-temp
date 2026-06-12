import { StaticImageData } from 'next/image';

export interface ITestimonialDT {
  id: number;
  description: string;
  author: string;
  designation: string;
  avatar?: StaticImageData;
}
