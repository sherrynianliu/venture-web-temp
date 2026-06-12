import brandImg1 from '@/assets/img/shop/brand-1.png';
import brandImg2 from '@/assets/img/shop/brand-2.png';
import brandImg3 from '@/assets/img/shop/brand-3.png';
import brandImg4 from '@/assets/img/shop/brand-4.png';
import brandImg5 from '@/assets/img/shop/brand-5.png';
import brandImg6 from '@/assets/img/shop/brand-6.png';
import brandImg7 from '@/assets/img/shop/brand-7.png';
import brandImg8 from '@/assets/img/shop/brand-8.png';

import Image from 'next/image';

//Brand Data
const brands = [
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg7,
  brandImg8,
];

const BrandFilter = () => {
  return (
    <div className="it-shop-widget mb-50">
      <h3 className="it-shop-widget-title">Popular Brands</h3>
      <div className="it-shop-widget-content ">
        <div className="it-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
          {brands.map((brand, i) => (
            <div key={i} className="it-shop-widget-brand-item">
              <a href="#">
                <Image
                  className="image-height-auto"
                  src={brand}
                  alt="brand-img"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BrandFilter;
