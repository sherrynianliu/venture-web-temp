import Image from 'next/image';
import ChooseItemOne from './choose-item/choose-item-one';

import chooseImg from '@/assets/img/choose/choose-1.jpg';
import shapeImg from '@/assets/img/shape/choose-1.png';

const ChooseOne = () => {
  return (
    <div
      id="choose"
      className="it-choose-area counterUp p-relative pt-130 pb-130"
    >
      <Image
        className="it-choose-shape-1 truck image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={352}
        height={291}
      />
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-choose-thumb fix">
              <Image
                className="image-height-auto"
                src={chooseImg}
                alt="choose-img"
                width={601}
                height={539}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="it-choose-right">
              <div className="it-choose-title-box it-text-anim">
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
        </div>
      </div>
    </div>
  );
};
export default ChooseOne;
