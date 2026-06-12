import Image from 'next/image';
import ChooseItemOne from './choose-item/choose-item-one';

import chooseImg from '@/assets/img/choose/choose-3.jpg';

const ChooseThree = () => {
  return (
    <div className="it-choose-area it-choose-style-3 p-relative pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="it-choose-right">
              <div className="it-choose-title-box it-text-anim">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  Why choose us Togeto
                </span>
                <h4 className="it-section-title pb-25 it-split-text it-split-in-right">
                  Why Choose Us for <br />
                  Your <span>Logistics</span> Needs?
                </h4>
                <p className="mb-40">
                  Logistics ensures the efficient movement of goods, managing,
                  <br />
                  transportation, storage, and delivery. It plays a vital role
                  in
                </p>
              </div>

              {/* Choose Items */}
              <ChooseItemOne />
              {/* Choose Items */}
            </div>
          </div>
          <div
            className="col-lg-6 wow img-anim-top"
            data-wow-duration="1.5s"
            data-wow-delay="0.1"
          >
            <div className="it-choose-thumb shine-effect-2 text-end">
              <Image
                className="image-height-auto"
                src={chooseImg}
                alt="choose-img"
                width={565}
                height={554}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseThree;
