import ContactFormThree from '../form/contact-form-three';
import { LocationTwo, MailTwo, PhoneFour } from '../svg';

const ContactArea = () => {
  return (
    <div className="it-contact-area it-contact-innar-style it-contact-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
            <div className="it-contact-inner-list">
              <span className="it-section-subtitle">Our Locations Contact</span>
              <h4 className="it-section-title pb-10">Get in touch</h4>
              <p className="mb-55">
                Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect
              </p>
              <ul>
                <li>
                  <i>
                    <PhoneFour />
                  </i>
                  <div>
                    <span>Have any question?</span>
                    <a className="border-line-black" href="tel:+86075585296692">
                      +86-0755-8529 6692
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <MailTwo />
                  </i>
                  <div>
                    <span>Write email</span>
                    <a
                      className="border-line-black"
                      href="mailto:info@venture-mfg.com"
                    >
                      info@venture-mfg.com
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <LocationTwo />
                  </i>
                  <div>
                    <span>Visit anytime</span>
                    <a
                      className="border-line-black"
                      target="_blank"
                      href="https://maps.google.com/?q=Chentian+Industrial+Area+Xixiang+Bao%27an+Shenzhen"
                    >
                      Building 36, Chentian Industrial Area, Xixiang, Bao&apos;an District, Shenzhen, Guangdong, China
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-0 order-lg-1">
            <div className="it-contact-form-box z-index-1 p-relative">
              <h4 className="it-section-title pb-40">Contact For Queries?</h4>
              <ContactFormThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
