'use client';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { IFaqDT } from '@/types/faq-d-t';

interface FaqItemProps {
  faqs: IFaqDT[];
}

const FaqItemTwo = ({ faqs }: FaqItemProps) => {
  return (
    <Accordion className="accordion" preExpanded={['a']} allowZeroExpanded>
      {faqs.map((item) => (
        <AccordionItem
          key={item.uuid}
          className="accordion-item"
          uuid={item.uuid}
        >
          <AccordionItemHeading className="accordion-header">
            <AccordionItemButton className="accordion-button">
              {item.title}
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <div className="accordion-body">{item.description}</div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default FaqItemTwo;
