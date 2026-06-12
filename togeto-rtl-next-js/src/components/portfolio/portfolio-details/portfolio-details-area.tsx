import Image from 'next/image';
import LeftSidebar from './left-sidebar';
import DetailsContent from './details-content';
import DetailsContentTwo from './details-content-two';
import { CheckMarkTwo } from '@/components/svg';
import { IPortfolioDT } from '@/types/portfolio-d-t';

import detailsImg from '@/assets/img/portfolio/details-1-1.jpg';
import detailsImg2 from '@/assets/img/portfolio/details-1-3.jpg';

interface PortfolioDetailsProps {
  portfolio: IPortfolioDT;
}

const listData = [
  'Efficient Sprint Planning',
  'Iterative Delivery Approach',
  'Standups and Demos',
  'Problem-solving',
];

const PortfolioDetailsArea = ({ portfolio }: PortfolioDetailsProps) => {
  return (
    <div className="it-pro-details-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 order-1 order-lg-0">
            {/* Sidebar Area */}
            <LeftSidebar />
            {/* Sidebar Area */}
          </div>
          <div className="col-xl-8 col-lg-8 order-0 order-lg-1">
            <div className="it-pro-details-wrap">
              <div className="it-pro-details-thumb mb-30">
                <Image
                  className="image-height-auto"
                  src={portfolio?.detailsImage || detailsImg}
                  alt="details-img"
                  width={904}
                  height={460}
                />
              </div>
              <div className="it-pro-details-border">
                <div className="it-pro-details-title">
                  <h4 className="it-pro-details-title">
                    {portfolio?.title || 'Title Not Found'}
                  </h4>
                </div>
                <div className="it-pro-details-text">
                  <p className="mb-40">
                    Reliability and punctuality are critical pillars of success
                    in any endeavor. Reliability ensures consistent performance,
                    builds trust, and fosters strong relationships. Punctuality
                    reflects professionalism and respect for others' time.
                    Together, they create a foundation of dependability,
                    enhancing productivity
                  </p>
                  <div className="it-pro-details-list list-style-1">
                    <ul>
                      {listData.map((item, i) => (
                        <li key={i}>
                          <CheckMarkTwo />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Details Content Area */}
              <DetailsContent />
              {/* Details Content Area */}
              <div className="row">
                <div className="col-12">
                  <div className="it-pro-details-text mb-55">
                    <p>
                      Vestibulum in ipsum velit. Aliquam libero sem asfds asf,
                      rutrum eu scelerisque ut, vehicula a erat. Phasellus ac
                      sem sed erat pos se quam dignissim. Mauris feugiat, nisi
                      nec dapibuasas a gas dictum, ligula nulla gravida ante,
                      non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus
                      justo, nec mattis risus auris consequat viverra sapien id
                      lobortis. Vivamus auctor turpis vel dignissim licitudin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="it-pro-details-thumb mb-35">
                <Image
                  className="image-height-auto"
                  src={detailsImg2}
                  alt="details-img"
                  width={904}
                  height={406}
                />
              </div>
              {/* Details Content Area */}
              <DetailsContentTwo />
              {/* Details Content Area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioDetailsArea;
