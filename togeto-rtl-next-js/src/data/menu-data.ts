import { IMenuDT } from '@/types/menu-d-t';

import homeImg1 from '@/assets/img/menu/home-1.jpg';
import homeImg2 from '@/assets/img/menu/home-2.jpg';
import homeImg3 from '@/assets/img/menu/home-3.jpg';
import homeImg4 from '@/assets/img/menu/home-4.jpg';
import homeImg5 from '@/assets/img/menu/home-5.jpg';

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
    ],
  },
];

export const menuData: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'Service', link: '/service' },
      { title: 'Service Details', link: '/service-details/1' },
    ],
  },
  {
    id: 4,
    title: 'Pages',
    link: '#',
    dropdown_menus: [
      { title: 'Team', link: '/team' },
      { title: 'Team Details', link: '/team-details/1' },
      { title: 'Price', link: '/price' },
      { title: 'Testimonial', link: '/testimonial' },
      { title: 'Shop', link: '/shop' },
      { title: 'Shop Sidebar', link: '/shop-sidebar' },
      { title: 'Shop Details', link: '/shop-details/1' },
      { title: 'Wishlist', link: '/wishlist' },
      { title: 'Compare', link: '/compare' },
      { title: 'Cart', link: '/cart' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Faq', link: '/faq' },
      { title: 'Error', link: '/404' },
    ],
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '/portfolio',
    dropdown_menus: [
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Portfolio Details', link: '/portfolio-details/1' },
    ],
  },
  {
    id: 6,
    title: 'Blog',
    link: '/blog',
    dropdown_menus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Blog Left Sidebar', link: '/blog-left-sidebar' },
      { title: 'Blog Right Sidebar', link: '/blog-right-sidebar' },
      {
        title: 'Blog Details Left Sidebar',
        link: '/blog-details-left-sidebar/1',
      },
      {
        title: 'Blog Details Right Sidebar',
        link: '/blog-details-right-sidebar/1',
      },
    ],
  },
  {
    id: 7,
    title: 'Contact',
    link: '/contact',
  },
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
