import Link from 'next/link';
import { portfolioDataThree } from '@/data/portfolio-data';
import PortfolioItemOne from './portfolio-item/portfolio-item-one';

const PortfolioTwo = () => {
  return (
    <div
      id="portfolio"
      className="it-portfolio-area p-relative z-index-1 pt-130 pb-95"
    >
      <div className="container">
        <div className="it-portfolio-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle">Projects</span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Solutions That <br />
                  Make Changes
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="it-portfolio-btn text-lg-end it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange" href="/project">
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolioDataThree
            .map((portfolio) => (
              <div
                key={portfolio.id}
                className="col-xl-4 col-lg-6 col-md-6 mb-35 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <PortfolioItemOne portfolio={portfolio} />
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};
export default PortfolioTwo;
