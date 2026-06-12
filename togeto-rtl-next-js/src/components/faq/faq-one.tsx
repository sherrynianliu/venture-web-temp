import Image from 'next/image';
import TrackingForm from '../form/tracking-form';
import FaqItemOne from './faq-item/faq-item-one';
import { faqDataOne } from '@/data/faq-data';

import shapeImg from '@/assets/img/shape/tracking.png';

const FaqOne = () => {
  return (
    <div id="faq" className="it-faq-area gray-bg pt-130 pb-110">
      <div className="container">
        <div className="row align-item-start">
          <div className="col-lg-6">
            <div className="it-tracking-content z-index-1 p-relative">
              <h4 className="it-section-title text-white pb-20">
                Real Time Tracking
              </h4>
              <div className="it-tracking-input-box mb-40">
                <TrackingForm />
                <p className="mb-0">
                  Enter the ID of Your Project To track it’s status <br />
                  (Demo Projects IDs are 1234, 5482 and 5422.)
                </p>
              </div>
              <div className="it-tracking-line d-flex justify-content-between mb-35">
                <span className="active">Payment Pending</span>
                <span>Processing</span>
                <span>Shipped</span>
                <span>Delivered</span>
              </div>
              <div className="it-tracking-textarea-box">
                <textarea placeholder="12 march, 2023 - 13.38     Thank you ror shiping to voucer"></textarea>
              </div>
              <Image
                className="it-tracking-shape-1 image-height-auto"
                src={shapeImg}
                alt="shape-img"
                width={372}
                height={326}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="it-faq-right">
              <div className="it-section-title-box mb-30">
                <span className="it-section-subtitle">Faq’s</span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Get the best logistic service Faq
                </h4>
              </div>
              <div className="it-faq-wrap">
                <div className="it-custom-accordion">
                  <FaqItemOne
                    faqs={faqDataOne}
                    preExpand={faqDataOne[0].uuid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqOne;
