import Link from 'next/link';
import { Dribble, Facebook, Instagram, X } from '@/components/svg';

const socialData = [
  { id: 1, url: '#', platform: <Facebook /> },
  { id: 2, url: '#', platform: <X /> },
  { id: 3, url: '#', platform: <Dribble /> },
  { id: 4, url: '#', platform: <Instagram /> },
];

const SocialBox = () => {
  return (
    <>
      {socialData.map((social) => (
        <Link key={social.id} href={social.url}>
          <span>{social.platform}</span>
        </Link>
      ))}
    </>
  );
};
export default SocialBox;
