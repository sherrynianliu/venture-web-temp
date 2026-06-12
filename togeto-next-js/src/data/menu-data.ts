import { IMenuDT } from '@/types/menu-d-t';

import homeImg1 from '@/assets/img/menu/home-1.jpg';
import homeImg2 from '@/assets/img/menu/home-2.jpg';
import homeImg3 from '@/assets/img/menu/home-3.jpg';
import homeImg4 from '@/assets/img/menu/home-4.jpg';
import homeImg5 from '@/assets/img/menu/home-5.jpg';
import homeImg6 from '@/assets/img/venture-home/hero-pcba-smt.jpg';

const homeMenuData: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    home_menus: [
      {
        title: 'Home 01',
        link: '/',
        img: homeImg1,
        buttons: [
          { label: 'Multi Page', href: '/' },
          { label: 'One Page', href: '/home-one-page' },
        ],
      },
      {
        title: 'Home 02',
        link: '/home-2',
        img: homeImg2,
        buttons: [
          { label: 'Multi Page', href: '/home-2' },
          { label: 'One Page', href: '/home-2-one-page' },
        ],
      },
      {
        title: 'Home 03',
        link: '/home-3',
        img: homeImg3,
        buttons: [
          { label: 'Multi Page', href: '/home-3' },
          { label: 'One Page', href: '/home-3-one-page' },
        ],
      },
      {
        title: 'Home 04',
        link: '/home-4',
        img: homeImg4,
        buttons: [
          { label: 'Multi Page', href: '/home-4' },
          { label: 'One Page', href: '/home-4-one-page' },
        ],
      },
      {
        title: 'Home 05',
        link: '/home-5',
        img: homeImg5,
        buttons: [
          { label: 'Multi Page', href: '/home-5' },
          { label: 'One Page', href: '/home-5-one-page' },
        ],
      },
      {
        title: 'Home 06',
        link: '/home-6',
        img: homeImg6,
        buttons: [{ label: 'Multi Page', href: '/home-6' }],
      },
    ],
  },
];

export const menuData: IMenuDT[] = [
  // Venture Electronics sitemap — unified across all template pages.
  // Sections without a dedicated page yet are mapped to the closest existing
  // page as a placeholder until those pages are built.
  // Home keeps the multi-home mega-menu so every home variant (incl. Home 06)
  // stays reachable from the nav.
  ...homeMenuData,
  { id: 2, title: 'About', link: '/about' },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'PCB Assembly / PCBA', link: '/service-details/1' },
      { title: 'Turnkey PCB Assembly', link: '/service-details/2' },
      { title: 'EMS & Box Build', link: '/service-details/3' },
      { title: 'Component Sourcing & BOM Review', link: '/service-details/4' },
      { title: 'Testing & Quality Control', link: '/service-details/5' },
      { title: 'PCB Fabrication', link: '/service-details/6' },
      { title: 'All Services', link: '/service' },
    ],
  },
  { id: 4, title: 'Quality & Testing', link: '/service-details/5' },
  { id: 5, title: 'Engineering', link: '/service-details/6' },
  { id: 6, title: 'Industries', link: '/portfolio' },
  {
    id: 7,
    title: 'Resources',
    link: '/blog',
    dropdown_menus: [
      { title: 'Blog', link: '/blog' },
      { title: 'FAQ', link: '/faq' },
    ],
  },
  { id: 8, title: 'Contact', link: '/contact' },
];

export const onePageDataOne: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 5,
    title: 'Team',
    link: '#team',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataTwo: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 5,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 6,
    title: 'Faq',
    link: '#faq',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataThree: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 5,
    title: 'Team',
    link: '#team',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataFour: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 3,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 4,
    title: 'Service',
    link: '#service',
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataFive: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 4,
    title: 'Team',
    link: '#team',
  },
  {
    id: 5,
    title: 'Faq',
    link: '#faq',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];
