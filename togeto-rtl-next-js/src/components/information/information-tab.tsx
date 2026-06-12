import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import InformationForm from '../form/information-form';

interface IProps {
  itemClass?: string;
  itemRightClass?: string;
  isThemeColor?: boolean;
}

const InformationTab = ({
  itemClass,
  itemRightClass,
  isThemeColor,
}: IProps) => {
  const tabNames = ['Request a Quote', 'Packages Tracking'];

  return (
    <Tabs>
      <div className="row">
        <div className="col-12">
          <div className="it-information-nav-btn">
            <TabList className="nav nav-tab">
              {tabNames.map((item, index) => (
                <Tab key={index}>
                  <button className="nav-links">{item}</button>
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={itemClass || 'it-information-wrap gray-bg'}>
            <div className="tab-content" id="myTabContent">
              {tabNames.map((_, i) => (
                <TabPanel key={i}>
                  <div className="row">
                    <div className="col-xl-8 col-lg-7">
                      <div className="it-information-left">
                        <InformationForm
                          btnClass={
                            isThemeColor
                              ? 'it-btn-orange hover-2 w-100'
                              : 'it-btn-orange w-100'
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div
                        className={
                          itemRightClass || 'it-information-right black-bg'
                        }
                        style={{
                          backgroundImage: `url('/assets/img/shape/information.png')`,
                        }}
                      >
                        <h5 className="it-information-title mb-25">
                          Highly Trusted & Professional Services
                        </h5>
                        <p className="mb-30">
                          Logistics ensures the efficient movement of goods,
                          managing transportation, storage, <br />
                          and delivery. It plays a vital role in
                        </p>
                        <Link
                          className={`it-btn-white ${
                            isThemeColor ? 'hover-2' : ''
                          }`}
                          href="/about"
                        >
                          <span>Discover More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
};
export default InformationTab;
