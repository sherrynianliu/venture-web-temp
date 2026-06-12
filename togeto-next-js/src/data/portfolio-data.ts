import { IPortfolioDT } from '@/types/portfolio-d-t';

import portfolioImg1 from '@/assets/img/portfolio/portfolio-2-1.jpg';
import portfolioImg2 from '@/assets/img/portfolio/portfolio-2-2.jpg';
import portfolioImg3 from '@/assets/img/portfolio/portfolio-2-3.jpg';
import portfolioImg4 from '@/assets/img/portfolio/portfolio-2-4.jpg';
import portfolioImg5 from '@/assets/img/portfolio/portfolio-4-6.jpg';
import portfolioImg6 from '@/assets/img/portfolio/portfolio-3-1.jpg';
import portfolioImg7 from '@/assets/img/portfolio/portfolio-3-2.jpg';
import portfolioImg8 from '@/assets/img/portfolio/portfolio-3-3.jpg';
import portfolioImg9 from '@/assets/img/portfolio/portfolio-3-4.jpg';
import portfolioImg10 from '@/assets/img/portfolio/portfolio-3-5.jpg';
import portfolioImg11 from '@/assets/img/portfolio/portfolio-4-1.jpg';
import portfolioImg12 from '@/assets/img/portfolio/portfolio-4-2.jpg';
import portfolioImg13 from '@/assets/img/portfolio/portfolio-4-3.jpg';
import portfolioImg14 from '@/assets/img/portfolio/portfolio-4-4.jpg';
import portfolioImg15 from '@/assets/img/portfolio/portfolio-4-5.jpg';
import portfolioImg16 from '@/assets/img/portfolio/portfolio-4-6.jpg';

import detailsImg from '@/assets/img/portfolio/details-1-1.jpg';

export const portfolioDataOne: IPortfolioDT[] = [
  {
    id: 1,
    image: portfolioImg1,
    subtitle: 'Helping care',
    title: 'Efficient Cargo Transportation',
    detailsImage: detailsImg,
  },
  {
    id: 2,
    image: portfolioImg2,
    subtitle: 'Helping care',
    title: 'Precision Ground Handling',
    detailsImage: detailsImg,
  },
  {
    id: 3,
    image: portfolioImg3,
    subtitle: 'Helping care',
    title: 'Seamless Logistics Solutions',
    detailsImage: detailsImg,
  },
  {
    id: 4,
    image: portfolioImg4,
    subtitle: 'Helping care',
    title: 'Intensive Care',
    detailsImage: detailsImg,
  },
  {
    id: 5,
    image: portfolioImg5,
    subtitle: 'Helping care',
    title: 'Precision Ground Handling',
    detailsImage: detailsImg,
  },
  {
    id: 6,
    image: portfolioImg3,
    subtitle: 'Helping care',
    title: 'Seamless Logistics Solutions',
    detailsImage: detailsImg,
  },
];

export const portfolioDataTwo: IPortfolioDT[] = [
  {
    id: 7,
    image: portfolioImg6,
    subtitle: 'Helping care',
    title: 'Global Air Freight Services',
  },
  {
    id: 8,
    image: portfolioImg7,
    subtitle: 'Helping care',
    title: 'Seamless Logistics Solutions',
  },
  {
    id: 9,
    image: portfolioImg8,
    subtitle: 'Helping care',
    title: 'Precision Ground Handling',
  },
  {
    id: 10,
    image: portfolioImg9,
    subtitle: 'Helping care',
    title: 'Intensive Care',
  },
  {
    id: 11,
    image: portfolioImg10,
    subtitle: 'Helping care',
    title: 'Efficient Cargo Transportation',
  },
  {
    id: 12,
    image: portfolioImg8,
    subtitle: 'Helping care',
    title: 'Seamless Logistics Solutions',
  },
];

export const portfolioDataThree: IPortfolioDT[] = [
  {
    id: 13,
    image: portfolioImg11,
    subtitle: 'Worldwide Shipping',
    title: 'Maritime Services',
  },
  {
    id: 14,
    image: portfolioImg12,
    subtitle: 'Worldwide Shipping',
    title: 'Seamless Logistics Solutions',
  },
  {
    id: 15,
    image: portfolioImg13,
    subtitle: 'Worldwide Shipping',
    title: 'Precision Ground Handling',
  },
  {
    id: 16,
    image: portfolioImg14,
    subtitle: 'Worldwide Shipping',
    title: 'Maritime Services',
  },
  {
    id: 17,
    image: portfolioImg15,
    subtitle: 'Worldwide Shipping',
    title: 'Seamless Logistics Solutions',
  },
  {
    id: 18,
    image: portfolioImg16,
    subtitle: 'Worldwide Shipping',
    title: 'Precision Ground Handling',
  },
  {
    id: 19,
    image: portfolioImg2,
    subtitle: 'Worldwide Shipping',
    title: 'Maritime Services',
  },
  {
    id: 20,
    image: portfolioImg3,
    subtitle: 'Worldwide Shipping',
    title: 'Seamless Logistics Solutions',
  },
  {
    id: 21,
    image: portfolioImg4,
    subtitle: 'Worldwide Shipping',
    title: 'Precision Ground Handling',
  },
];

export const portfolioData: IPortfolioDT[] = [
  ...portfolioDataOne,
  ...portfolioDataTwo,
  ...portfolioDataThree,
];
