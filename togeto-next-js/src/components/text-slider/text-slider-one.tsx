'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import iconImg from '@/assets/img/shape/text-slider.png';

interface TextSliderProps {
  itemClass?: string;
}

const textSliderData = [
  { id: 1, icon: iconImg, text: 'Transport & Logistics' },
  { id: 2, icon: iconImg, text: 'Reliable Freight Solutions' },
  { id: 3, icon: iconImg, text: 'Smart Logistics Hub' },
  { id: 4, icon: iconImg, text: 'Global Shipping Experts' },
  { id: 5, icon: iconImg, text: 'Reliable Freight Solutions' },
];

const TextSliderOne = ({ itemClass }: TextSliderProps) => {
  return (
    <div
      className={itemClass || 'it-text-slider-area it-text-slider-ptb theme-bg'}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <Marquee speed={200} loop={0}>
              {textSliderData.map((item) => (
                <div key={item.id} className="it-text-slider-item">
                  <span>{item.text}</span>
                  <Image
                    src={item.icon}
                    alt="icon-img"
                    width={40}
                    height={41}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSliderOne;
