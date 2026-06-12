import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  image?: StaticImageData;
  images?: StaticImageData[];
  title: string;
  publishedDate?: string;
  category?: string;
  blogAuthor?: string;
  blogText?: string;
  commentCount?: string;
  detailsImage?: StaticImageData;
  description?: string;
  hasModalVideo?: boolean;
  btnText?: string;
}
