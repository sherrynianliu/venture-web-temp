import { StaticImageData } from 'next/image';

export interface IProductDT {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
  rating: number;
  quality?: string;
  hasDiscount?: string;
  images: StaticImageData[];
  reviewCount: number;
  description?: string;
  categories: string;
  tag: string;
  isNew?: boolean;
  outOfStock?: boolean;
  color: string;
  btnText?: string;
}
