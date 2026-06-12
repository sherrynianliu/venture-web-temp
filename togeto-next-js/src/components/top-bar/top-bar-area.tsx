import SocialBox from '../social/social-box';
import { Phone } from '../svg';

const TopBarArea = () => {
  return (
    <div className="it-header-top-area it-header-top-ptb black-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
            <div className="it-header-top-list-box">
              <ul>
                <li className="d-none d-lg-inline-block">
                  <span>
                    <Phone />
                    <a href="tel:+86075585296692">+86-0755-8529 6692</a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-light fa-envelope-open-text"></i>
                    <a href="mailto:info@venture-mfg.com">
                      info@venture-mfg.com
                    </a>
                  </span>
                </li>
                <li className="d-none d-xxl-inline-block">
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                    <a
                      target="_blank"
                      href="https://maps.google.com/?q=Chentian+Industrial+Area+Xixiang+Bao%27an+Shenzhen"
                    >
                      Shenzhen, Guangdong, China
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 d-none d-sm-block">
            <div className="it-header-top-right d-flex align-items-center justify-content-end">
              <div className="it-header-top-contact d-none d-md-block mr-30">
                <a href="#">Help</a>
                <span>/</span>
                <a href="#">support</a>
                <span>/</span>
                <a href="#">contact</a>
              </div>
              <div className="it-header-top-social-box">
                <SocialBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBarArea;
