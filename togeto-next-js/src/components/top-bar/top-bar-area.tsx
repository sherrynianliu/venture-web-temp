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
                    <a href="tel:008757845682">(91) 187 047 5767</a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-light fa-envelope-open-text"></i>
                    <a href="mailto:mcssainfo@gmail.com">
                      togetoinfo@gmail.com
                    </a>
                  </span>
                </li>
                <li className="d-none d-xxl-inline-block">
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/@23.843848,90.3081992,17.5z?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                    >
                      238, Arimantab, Moska - USA.
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
