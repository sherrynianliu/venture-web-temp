import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ContactFormTwo from '../form/contact-form-two';

const ContactTwo = () => {
  const tabNames = ['Shipping Rates', 'Tracking', 'Order Status'];
  return (
    <div
      className="it-form-area it-form-overlay z-index-1"
      style={{ backgroundImage: `url('/assets/img/contact/form.jpg')` }}
    >
      <div className="container">
        <Tabs>
          <div className="row">
            <div className="col-12">
              <div className="it-form-tab-btn">
                <TabList className="nav nav-tab" id="myTab" role="tablist">
                  {tabNames.map((item, index) => (
                    <Tab key={index}>
                      <button className="nav-links">{item}</button>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
          </div>
          <div className="it-form-2-wrap">
            <div className="it-form-tab-content">
              <div className="tab-content" id="myTabContent">
                {tabNames.map((_, i) => (
                  <TabPanel key={i}>
                    <div className="it-from-box">
                      <ContactFormTwo />
                    </div>
                  </TabPanel>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default ContactTwo;
