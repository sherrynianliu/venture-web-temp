import {
  ChooseIconFive,
  ChooseIconFour,
  ChooseIconOne,
  ChooseIconThree,
  ChooseIconTwo,
} from '../svg';

const chooseData = [
  { id: 1, icon: <ChooseIconOne />, title: 'Complete Logistics System' },
  { id: 2, icon: <ChooseIconTwo />, title: 'Shipping All Over the world' },
  { id: 3, icon: <ChooseIconThree />, title: 'Online Product Tracking' },
  { id: 4, icon: <ChooseIconFour />, title: 'International shipping services' },
  { id: 5, icon: <ChooseIconFive />, title: 'Great logistical support.' },
];

const ChooseFour = () => {
  return (
    <div
      className="it-choose-2-area it-choose-2-overlay black-bg p-relative pt-130 pb-160"
      style={{ backgroundImage: `url('/assets/img/choose/choose-5.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center pb-65">
              <span className="it-section-subtitle">Why Choose us Togeto</span>
              <h4 className="it-section-title text-white it-split-text it-split-in-right">
                Why Choose Us for <br />
                Your Logistics Needs?
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-25 row-cols-xxl-5 row-cols-xl-3 row-cols-md-2 row-cols-lg-3 row-cols-1">
          {chooseData.map((item, i) => (
            <div
              key={item.id}
              className="col wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <div className="it-choose-2-item mb-30 text-center">
                <span className="it-choose-2-icon d-block mb-35">
                  {item.icon}
                </span>
                <h5 className="it-choose-2-title">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChooseFour;
