import NewsletterForm from '../form/newsletter-form';

const Newsletter = () => {
  return (
    <div className="it-newsletter-area pt-75 pb-75">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-newsletter-left">
              <h4 className="it-section-title text-white">
                Subscribe Togeto ...
              </h4>
            </div>
          </div>
          <div
            className="col-lg-7 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-newsletter-input-box">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
