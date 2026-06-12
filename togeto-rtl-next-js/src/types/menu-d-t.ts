import { StaticImageData } from 'next/image';

interface IHomeMenuDT {
  title: string;
  link: string;
  img: StaticImageData;
  buttons: { label: string; href: string }[];
}

export interface IMenuDT {
  id: number;
  title: string;
  link: string;
  home_menus?: IHomeMenuDT[];
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}
