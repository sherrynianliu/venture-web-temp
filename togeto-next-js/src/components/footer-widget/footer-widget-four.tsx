import { Location, Mail, PhoneTwo } from '../svg';

const FooterWidgetFour = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-25">
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
        <div className="it-footer-widget-tel-box">
          <span>
            <PhoneTwo />
          </span>
          <a className="border-line-white" href="tel:+86075585296692">
            +86-0755-8529 6692
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetFour;
