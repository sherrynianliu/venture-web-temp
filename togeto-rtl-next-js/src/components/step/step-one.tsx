import { StepIconOne, StepIconThree, StepIconTwo } from '../svg';

interface StepProps {
  itemClass?: string;
}

const stepData = [
  {
    id: '01',
    icon: <StepIconOne />,
    title: 'Receive Packages',
    description: `Togeto Air freight service deliver to know ledge & opportunity
                optimize Logisco Air freight service`,
  },
  {
    id: '02',
    icon: <StepIconTwo />,
    title: 'Transport Packages',
    description: `Togeto Air freight service deliver to know ledge & opportunity
                optimize Logisco Air freight service`,
  },
  {
    id: '03',
    icon: <StepIconThree />,
    title: 'Deliver Packages',
    description: `Togeto Air freight service deliver to know ledge & opportunity
                optimize Logisco Air freight service`,
  },
];

const StepOne = ({ itemClass }: StepProps) => {
  return (
    <div className={itemClass || 'it-step-area pt-130 pb-100'}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-section-title-box text-center mb-65">
              <span className="it-section-subtitle it-split-text it-split-in-right">
                Our Work Process
              </span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                We always follow the best <br />
                ways of logistics
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          {stepData.map((item, i) => (
            <div
              key={item.id}
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 mb-30 wow animate__fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <div className="it-step-item text-center">
                <span className="it-step-icon">
                  {item.icon}
                  <span>{item.id}</span>
                </span>
                <h4 className="it-step-title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StepOne;
