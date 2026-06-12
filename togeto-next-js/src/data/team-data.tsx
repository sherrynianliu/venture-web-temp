import { ITeamDT } from '@/types/team-d-t';

import teamImg1 from '@/assets/img/team/team-1-1.jpg';
import teamImg2 from '@/assets/img/team/team-1-2.jpg';
import teamImg3 from '@/assets/img/team/team-1-3.jpg';
import teamImg4 from '@/assets/img/team/team-1-4.jpg';
import teamImg5 from '@/assets/img/team/team-1-5.jpg';
import { Dribble, Facebook, Instagram, X } from '@/components/svg';

export const teamDataOne: ITeamDT[] = [
  {
    id: 1,
    name: 'Earnestine Lucero',
    designation: 'CEO & Founder',
    image: teamImg1,
    phone: '(01) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '90' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '82' },
    ],
  },
  {
    id: 2,
    name: 'Francis Roman',
    designation: 'Foreman',
    image: teamImg2,
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '80' },
      { title: 'Development', value: '85' },
      { title: 'Finance', value: '92' },
    ],
  },
  {
    id: 3,
    name: 'Isco Alarcon',
    designation: 'Manager',
    image: teamImg3,
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '88' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '83' },
    ],
  },
  {
    id: 4,
    name: 'Kali Ryan',
    designation: 'Warehouse Supervisor',
    image: teamImg4,
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '78' },
      { title: 'Development', value: '85' },
      { title: 'Finance', value: '59' },
    ],
  },
  {
    id: 5,
    name: 'Nathan Lyon',
    designation: 'Inventory Controller',
    image: teamImg5,
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '92' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '63' },
    ],
  },
  {
    id: 6,
    name: 'Tori Black',
    designation: 'Fleet Coordinator',
    image: teamImg3,
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '78' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '93' },
    ],
  },
];

export const teamData: ITeamDT[] = [...teamDataOne];
