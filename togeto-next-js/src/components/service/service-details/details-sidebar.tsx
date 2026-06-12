import Link from 'next/link';
import { PDFIcon, PhoneThree, RightArrow } from '@/components/svg';

const categoryData = [
  'Road Freight Services',
  'Maritime transportation',
  'Intermodal Shipping',
  'Air Transport',
  'Ocean Freight',
  'Logistic Service',
];

const DetailsSidebar = () => {
  return (
    <div className="it-sv-details-sidebar">
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-35">Post Category:</h4>
        {categoryData.map((item, i) => (
          <Link key={i} href="#">
            <div
              className={`sidebar-widget-list mb-10 ${i === 1 ? 'active' : ''}`}
            >
              {item}
              <span>
                <RightArrow />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="it-sv-details-contact black-bg text-center mb-55">
        <span className="it-sv-details-contact-icon">
          <PhoneThree />
        </span>
        <h4 className="it-sv-details-contact-title">
          Looking for logistics service Provider?
        </h4>
        <span>Call Anytime</span>
        <a className="it-btn-orange hover-2 w-100" href="tel:+911234568970">
          <span>+(91)1234 568 970</span>
        </a>
      </div>
      <div className="sidebar-widget">
        <h4 className="sidebar-widget-title mb-35">Download Now:</h4>
        <div className="it-sv-details-download">
          <div className="download-item mb-15">
            <a href="/assets/img/service/download/company-report.txt" download>
              Company Report -2025
            </a>
            <span>
              <PDFIcon />
            </span>
          </div>
          <div className="download-item">
            <a href="/assets/img/service/download/company-report.txt" download>
              Company Report -2024
            </a>
            <span>
              <PDFIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsSidebar;
