import Image from 'next/image';

import chooseImg1 from '@/assets/img/choose/choose-2-1.jpg';
import chooseImg2 from '@/assets/img/choose/choose-2-2.jpg';

const chooseData = [
  {
    id: 1,
    title: 'Corporate Moves',
    description: `Loraic Air freight service deliver the knowledge &
                    <br /> opportunity to optimize every mile on every lane`,
  },
  {
    id: 2,
    title: 'Maximum Cargo Flexibility',
    description: `Loraic Air freight service deliver the knowledge &
                    <br /> opportunity to optimize every mile on every lane`,
  },
  {
    id: 3,
    title: 'Custom Logistics',
    description: `Loraic Air freight service deliver the knowledge &
                    <br /> opportunity to optimize every mile on every lane`,
  },
];

const ChooseTwo = () => {
  return (
    <div
      id="choose"
      className="it-choose-area it-choose-style-2 p-relative pt-130 pb-130"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="it-choose-right">
              <div className="it-section-title-box pb-30">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  Why Choose us Togeto
                </span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Why Choose Us for <br />
                  Your Logistics Needs?
                </h4>
              </div>
              <div className="row">
                {chooseData.map((item, i) => (
                  <div
                    key={i}
                    className="col-12 mb-20 wow animate__fadeInLeft"
                    data-wow-duration=".9s"
                    data-wow-delay={`${0.3 + 0.2 * i}s`}
                  >
                    <div
                      className={`it-choose-more-info ${
                        i === 1 ? 'active' : ''
                      }`}
                    >
                      <h5 className="it-choose-more-title">{item.title}</h5>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="it-choose-thumb-wrap text-end p-relative">
              <div className="it-choose-thumb shine-effect-2">
                <Image
                  className="image-height-auto"
                  src={chooseImg1}
                  alt="choose-img"
                  width={529}
                  height={599}
                />
              </div>
              <div className="it-choose-thumb-sm shine-effect-2">
                <Image
                  className="image-height-auto"
                  src={chooseImg2}
                  alt="choose-img"
                  width={381}
                  height={410}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseTwo;
