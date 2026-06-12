import { StaticImageData } from 'next/image';

export interface ITeamDT {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
  email: string;
  phone: string;
  address: string;
  socials: {
    platform: React.ReactNode;
    link: string;
  }[];
  skills: {
    title: string;
    value: string;
  }[];
}
