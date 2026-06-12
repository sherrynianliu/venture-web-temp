import { Location, Mail } from '../svg';
import SocialBox from '../social/social-box';

const FooterWidgetThree = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-15">
          <span>
            <Location />
          </span>
          <a
            className="border-line-white"
            target="_blank"
            href="https://maps.google.com/?q=Chentian+Industrial+Area+Xixiang+Bao%27an+Shenzhen"
          >
            Building 36, Chentian Industrial Area, Xixiang, Bao&apos;an District, Shenzhen,
            Guangdong, China
          </a>
        </div>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Mail />
          </span>
          <a className="border-line-white" href="mailto:info@venture-mfg.com">
            info@venture-mfg.com
          </a>
        </div>
        <div className="it-footer-widget-social">
          <SocialBox />
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetThree;
