import { portfolioDataThree } from '@/data/portfolio-data';
import PortfolioItemOne from './portfolio-item/portfolio-item-one';

const PortfolioArea = () => {
  return (
    <div className="it-portfolio-area p-relative z-index-1 pt-130 pb-130">
      <div className="container">
        <div className="it-portfolio-top-wrap pb-65">
          <div className="row">
            <div className="col-12">
              <div className="it-section-title-box text-center">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Transport & Logistics <br />
                  projects that we provide
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolioDataThree.map((portfolio) => (
            <div
              key={portfolio.id}
              className="col-xl-4 col-lg-6 col-md-6 mb-35 wow img-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <PortfolioItemOne portfolio={portfolio} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-portfolio-btn mt-45 text-center it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <a className="it-btn-orange" href="#">
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioArea;
