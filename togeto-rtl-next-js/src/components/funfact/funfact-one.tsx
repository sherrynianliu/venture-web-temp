import Image from 'next/image';
import Counter from './counter-item/counter-item';
import {
  FunFactIconFour,
  FunFactIconOne,
  FunFactIconThree,
  FunFactIconTwo,
} from '../svg';

import shapeImg from '@/assets/img/shape/funfact-1.png';

const counterData = [
  {
    id: 1,
    countIcon: <FunFactIconOne />,
    countNum: 8,
    countSuffix: 'K+',
    countTitle: 'Project Completed',
  },
  {
    id: 2,
    countIcon: <FunFactIconTwo />,
    countNum: 7,
    countSuffix: 'K+',
    countTitle: 'Happy Customer',
  },
  {
    id: 3,
    countIcon: <FunFactIconThree />,
    countNum: 120,
    countSuffix: '+',
    countTitle: 'Award Winning',
  },
  {
    id: 4,
    countIcon: <FunFactIconFour />,
    countNum: 150,
    countSuffix: '+',
    countTitle: 'Worldwide Office',
  },
];

const FunFactOne = () => {
  return (
    <div className="it-funfact-area p-relative z-index-1 black-bg pt-130 pb-70">
      <Image
        className="it-funfact-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={1920}
        height={378}
      />
      <div className="container">
        <div className="row">
          {counterData.map((item, i) => (
            <div
              key={item.id}
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <div className="it-funfact-item mb-30 d-flex align-items-center justify-content-center">
                <span className="it-funfact-icon mr-20">{item.countIcon}</span>
                <div className="it-funfact-content">
                  <h5 className="it-funfact-title">
                    <Counter
                      start={0}
                      end={item.countNum}
                      duration={3}
                      counterSuffix={item.countSuffix}
                    />
                  </h5>
                  <span className="it-funfact-text">{item.countTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FunFactOne;
