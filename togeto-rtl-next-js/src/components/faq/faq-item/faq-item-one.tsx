'use client';

import { IFaqDT } from '@/types/faq-d-t';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface FaqItemProps {
  faqs: IFaqDT[];
  preExpand: string;
}

const FaqItemOne = ({ faqs, preExpand }: FaqItemProps) => {
  return (
    <Accordion
      className="accordion"
      preExpanded={[preExpand]}
      allowZeroExpanded
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.uuid}
          className="accordion-items it-fade-anim"
          data-delay=".3"
          uuid={faq.uuid}
        >
          <AccordionItemHeading className="accordion-header" id="headingOne">
            <AccordionItemButton className="accordion-buttons ">
              {faq.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="accordion-body d-flex align-items-center">
              <p
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: faq.description }}
              ></p>
              {faq.image && (
                <div className="shine-effect">
                  <Image
                    className="image-height-auto"
                    src={faq.image}
                    alt="faq-img"
                    width={206}
                    height={108}
                  />
                </div>
              )}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default FaqItemOne;
