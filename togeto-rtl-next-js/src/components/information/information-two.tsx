import Image from 'next/image';
import InformationTab from './information-tab';

import shapeImg from '@/assets/img/shape/information-5-1.png';

const InformationTwo = () => {
  return (
    <div className="it-information-area it-information-style-2 p-relative pt-130 pb-130">
      <Image
        className="it-information-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={1920}
        height={378}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-65">
              <span className="it-section-subtitle">Trusted transport</span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                Transportation service <br />
                area often consider
              </h4>
            </div>
          </div>
        </div>

        <InformationTab
          itemClass="it-information-wrap black-bg"
          itemRightClass="it-information-right theme-bg"
          isThemeColor
        />
      </div>
    </div>
  );
};
export default InformationTwo;
