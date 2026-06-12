import Image from 'next/image';
import { CheckMarkTwo } from '@/components/svg';

import detailsImg2 from '@/assets/img/portfolio/details-1-2.jpg';

const itemData = [
  'Research beyond the business plan',
  'Marketing options and rates',
  'The ability to turnaround consulting',
  'liquet est massa, sit amet tempor',
];

const DetailsContent = () => {
  return (
    <div className="row align-items-center mb-30">
      <div className="col-xl-7">
        <div
          className="it-pro-details-thumb wow img-anim-top"
          data-wow-duration="1.5s"
          data-wow-delay="0.1"
        >
          <Image
            className="image-height-auto"
            src={detailsImg2}
            alt="details-img"
            width={452}
            height={320}
          />
        </div>
      </div>
      <div className="col-xl-5">
        <div className="it-pro-details-text-2">
          <h4 className="it-pro-details-title-sm">Project Vision</h4>
          <p className="mb-35">
            Marketing is essential for creating brand awareness, attracting
            customers, driving sales, building loyalty, and ensuring business
            growth in competitive.
          </p>
          <div className="it-pro-details-list">
            <ul>
              {itemData.map((item, i) => (
                <li key={i}>
                  <CheckMarkTwo />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsContent;
