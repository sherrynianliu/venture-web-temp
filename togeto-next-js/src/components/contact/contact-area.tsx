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
                    <a className="border-line-black" href="tel:008757845682">
                      (00) 875 784 5682
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
                      href="mailto:togetoinfo@gmail.com"
                    >
                      togetoinfo@gmail.com
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
                      href="https://www.google.com/maps/@-5.4432737,-73.6358025,8.83z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                    >
                      66 broklyn golden street. New York
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
