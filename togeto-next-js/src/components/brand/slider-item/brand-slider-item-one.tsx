'use client';

import Marquee from 'react-fast-marquee';
import Image, { StaticImageData } from 'next/image';

interface BrandProps {
  brandData: StaticImageData[];
  isRight?: boolean;
}

const BrandSliderItemOne = ({ brandData, isRight }: BrandProps) => {
  return (
    <div className="it-brand-active">
      <Marquee speed={150} loop={0} direction={isRight ? 'right' : 'left'}>
        {brandData.map((brand, i) => (
          <div key={i} className="it-brand-item mr-85">
            <Image
              className="image-height-auto"
              src={brand}
              alt={`Brand Img ${i + 1}`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default BrandSliderItemOne;
