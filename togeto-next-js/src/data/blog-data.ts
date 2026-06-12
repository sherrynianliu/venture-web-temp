import { IBlogDT } from '@/types/blog-d-t';

import blogImg1 from '@/assets/img/blog/blog-1-1.jpg';
import blogImg2 from '@/assets/img/blog/blog-1-2.jpg';
import blogImg3 from '@/assets/img/blog/blog-1-3.jpg';
import blogImg4 from '@/assets/img/blog/details-1-1.jpg';
import blogImg5 from '@/assets/img/blog/details-1-1.jpg';
import detailsImg from '@/assets/img/blog/details-1-1.jpg';

export const blogDataOne: IBlogDT[] = [
  {
    id: 1,
    image: blogImg1,
    title: 'Why Route Optimization is Vital for Retailers',
    publishedDate: 'December 24,2024',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
  {
    id: 2,
    image: blogImg2,
    title: 'Streamlining Supply Chains with Modern Logistics',
    publishedDate: 'January 14,2024',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
  {
    id: 3,
    image: blogImg3,
    title: 'The Role of Technology in Enhancing Last-Mile Delivery',
    publishedDate: 'March 08,2020',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
  {
    id: 4,
    image: blogImg3,
    title: 'Why Route Optimization is Vital for Retailers',
    publishedDate: 'December 24,2024',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
  {
    id: 5,
    image: blogImg1,
    title: 'Streamlining Supply Chains with Modern Logistics',
    publishedDate: 'January 14,2024',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
  {
    id: 6,
    image: blogImg2,
    title: 'The Role of Technology in Enhancing Last-Mile Delivery',
    publishedDate: 'March 08,2020',
    detailsImage: detailsImg,
    btnText: 'Discover More',
  },
];

export const blogDataTwo: IBlogDT[] = [
  {
    id: 7,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'Streamlining Global Supply Chains Our Logistics Solutions',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
  {
    id: 8,
    images: [blogImg4, blogImg5],
    blogAuthor: 'Alarcon Isco',
    title: 'Why is Supply Chain Visibility so Important?',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
  {
    id: 9,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'We are Professional Logistics Service',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
  {
    id: 10,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'Streamlining Global Supply Chains Our Logistics Solutions',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
    hasModalVideo: true,
  },
  {
    id: 11,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'Streamlining Global Supply Chains Our Logistics Solutions',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
  {
    id: 12,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'We are Professional Logistics Service',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
  {
    id: 13,
    image: blogImg4,
    blogAuthor: 'Francis Isco',
    title: 'Why is Supply Chain Visibility so Important?',
    publishedDate: '10 March 2023',
    commentCount: '18',
    detailsImage: detailsImg,
    description: `Maintaining health and wellness is vital for people with disabilities,
                    encompassing a holistic approach that includes physical, mental, and emotional 
                    well-being. Regular physical activity, adapted to individual abilities, is crucial 
                    for improving strength, flexibility, and cardiovascular health.`,
    btnText: 'More Details',
  },
];

export const blogData: IBlogDT[] = [...blogDataOne, ...blogDataTwo];
