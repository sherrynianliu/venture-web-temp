import BrandSliderItemOne from './slider-item/brand-slider-item-one';

import brandImg1 from '@/assets/img/brand/brand-1-1.png';
import brandImg2 from '@/assets/img/brand/brand-1-2.png';
import brandImg3 from '@/assets/img/brand/brand-1-3.png';
import brandImg4 from '@/assets/img/brand/brand-1-4.png';
import brandImg5 from '@/assets/img/brand/brand-1-5.png';
import brandImg6 from '@/assets/img/brand/brand-1-6.png';

const brandDataOne = [brandImg1, brandImg2, brandImg3, brandImg4];
const brandDataTwo = [brandImg4, brandImg5, brandImg6, brandImg1, brandImg3];

const BrandOne = () => {
  return (
    <div className="it-brand-area it-brand-ptb pt-100 pb-100 black-bg">
      <div className="container container-1050">
        <div className="it-brand-scroll-hr">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-9 col-lg-8 col-md-9">
              <BrandSliderItemOne brandData={brandDataOne} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-60 pb-60 it-brand-scroll-hr">
          <div className="row">
            <div className="col-xl-12">
              <BrandSliderItemOne brandData={brandDataTwo} isRight />
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1050">
        <div className="it-brand-scroll-hr">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-9 col-lg-8 col-md-9">
              <BrandSliderItemOne brandData={brandDataOne} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandOne;
