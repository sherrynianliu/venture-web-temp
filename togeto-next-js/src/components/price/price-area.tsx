import Link from 'next/link';
import { CheckMarkThree } from '../svg';

const priceData = [
  {
    id: 1,
    title: 'Normal Plan',
    price: '39.99',
    description:
      'Togeto specializes in international shipping, offering fast, secure, and cost-effective',
    services: [
      'Container shipping',
      ' Storage for goods',
      ' Coverage for goods',
      'Hazardous materials handling',
      'Expedited delivery',
    ],
    btnText: 'Get Started',
  },
  {
    id: 2,
    title: 'Medium Plan',
    price: '59.99',
    description:
      'Togeto specializes in international shipping, offering fast, secure, and cost-effective',
    services: [
      'Container shipping',
      ' Storage for goods',
      ' Coverage for goods',
      'Hazardous materials handling',
      'Expedited delivery',
    ],
    btnText: 'Get Started',
  },
  {
    id: 3,
    title: 'Premium Plan',
    price: '99.99',
    description:
      'Togeto specializes in international shipping, offering fast, secure, and cost-effective',
    services: [
      'Container shipping',
      ' Storage for goods',
      ' Coverage for goods',
      'Hazardous materials handling',
      'Expedited delivery',
    ],
    btnText: 'Get Started',
  },
];

const PriceArea = () => {
  return (
    <div className="it-price-area pt-130 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-70">
              <h4 className="it-section-title it-split-text it-split-in-right">
                Our business pricing <br />
                plan you might like
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {priceData.map((item, i) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <div className={`it-price-item mb-30 ${i === 1 ? 'active' : ''}`}>
                <div className="it-price-header">
                  <span className="it-price-tag">{item.title}</span>
                  <h4 className="it-price-rate">
                    {item.price}$ <i>/Month</i>
                  </h4>
                  <p>{item.description}</p>
                </div>
                <div className="it-price-body">
                  <div className="it-price-list mb-45">
                    <ul>
                      {item.services.map((service, i) => (
                        <li key={i}>
                          <CheckMarkThree />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="it-price-btn text-center">
                    <Link className="it-btn-orange w-100" href="/contact">
                      <span>{item.btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PriceArea;
