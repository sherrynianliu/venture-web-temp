import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import DetailsTabInfo from './details-tab-info';
import DetailsTabReview from './details-tab-review';

const DetailsTabArea = () => {
  // Tab names for react tabs
  const tabNames = [
    { tabName: 'Description' },
    { tabName: 'Additional Information' },
    { tabName: 'Reviews (02)' },
  ];

  return (
    <div className="productdetails-tabs">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-12">
          <Tabs>
            <div className="product-additional-tab">
              <div className="pro-details-nav theme-bg-2 mb-30">
                <TabList
                  className="nav nav-tabs pro-details-nav-btn"
                  id="myTabs"
                  role="tablist"
                >
                  {tabNames.map((item, index) => (
                    <Tab key={index}>
                      <button className="nav-links">
                        <span>{item.tabName}</span>
                      </button>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="tab-content it-content-tab" id="myTabContent-2">
                <TabPanel>
                  <p className="mb-15">
                    Samsa woke from troubled dreams, he found himself
                    transformed in his bed into a horrible vermin. He lay on his
                    armour-like back, and if he lifted his head a little he
                    could see his brown belly, slightly domed and divided by
                    arches into stiff sections. The bedding was hardly able to
                    cover it and seemed ready to slide off any moment. His many
                    legs, pitifully thin compared with the size of the rest of
                    him.
                  </p>
                  <p className="mb-0">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of himSamsa woke from troubled
                    dreams, he found himself transformed in his bed into a
                    horrible vermin.
                  </p>
                </TabPanel>
                <TabPanel>
                  <DetailsTabInfo />
                </TabPanel>
                <TabPanel>
                  <DetailsTabReview />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default DetailsTabArea;
