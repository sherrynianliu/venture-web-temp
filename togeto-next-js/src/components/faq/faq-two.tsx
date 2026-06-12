import { faqDataTwo } from '@/data/faq-data';
import FaqItemOne from './faq-item/faq-item-one';

interface FaqProps {
  itemClass?: string;
  accordionClass?: string;
}

const FaqTwo = ({ itemClass, accordionClass }: FaqProps) => {
  return (
    <div className={itemClass || 'it-faq-area gray-bg pt-130 pb-110'}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-faq-right">
              <div className="it-section-title-box text-center mb-70">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Frequently Asked <br />
                  Questions
                </h4>
              </div>
              <div className="it-faq-wrap">
                <div
                  className={
                    accordionClass ||
                    'it-custom-accordion it-custom-accordion-style-2 it-custom-accordion-style-3'
                  }
                >
                  <FaqItemOne
                    faqs={faqDataTwo}
                    preExpand={faqDataTwo[0].uuid}
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
export default FaqTwo;
