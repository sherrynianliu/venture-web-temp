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
            href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          >
            11555 Heron Bay Blvd, Suite 200, Coral Springs, Florida, 33076,
            United States
          </a>
        </div>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Mail />
          </span>
          <a className="border-line-white" href="mailto:togetoinfo@gmail.com">
            togetoinfo@gmail.com
          </a>
        </div>
        <div className="it-footer-widget-tel-box">
          <span>
            <PhoneTwo />
          </span>
          <a className="border-line-white" href="tel:912-345-987">
            912-345-987
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetFour;
