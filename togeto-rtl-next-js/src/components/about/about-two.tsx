import Image from 'next/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AboutFunFactOne from './about-funfact/about-funfact-one';

import aboutImg from '@/assets/img/about/about-2-1.jpg';

const tabNames = [
  { id: 1, tabName: 'Mission' },
  { id: 2, tabName: 'Vision' },
  { id: 3, tabName: 'History' },
];

const AboutTwo = () => {
  return (
    <div id="about" className="it-about-2-area pt-130 pb-130">
      <div className="container">
        <div className="it-about-top-wrap pb-65">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  About our Company
                </span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Creating Long-Term Value For Stakeholder.
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="it-about-2-top-right d-flex align-items-center justify-content-start justify-content-md-end">
                <div
                  className="it-about-btn it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-orange" href="/about">
                    <span>More About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center align-items-xxl-start">
          <div
            className="col-xl-5 order-1 order-xl-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-about-2-thumb">
              <Image
                className="image-height-auto"
                src={aboutImg}
                alt="about-img"
                width={531}
                height={494}
              />
            </div>
          </div>
          <div
            className="col-xl-7 order-0 order-xl-1 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-2-right">
              <Tabs>
                <div className="it-about-2-tab-btn mb-25">
                  <TabList className="nav nav-tab" id="myTab" role="tablist">
                    {tabNames.map((item) => (
                      <Tab key={item.id}>
                        <button className="nav-links">{item.tabName}</button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <div className="it-about-2-tab-content-wrap mb-90">
                  <div className="tab-content" id="myTabContent">
                    {tabNames.map((item) => (
                      <TabPanel key={item.id}>
                        <div className="it-about-2-tab-content">
                          <p>
                            At Togeto, our mission is to revolutionize logistics
                            by providing seamless, reliable, and cost-effective
                            solutions tailored to meet our clients' unique
                            needs. We aim to foster global connectivity through
                            innovative technology, sustainable practices, and a
                            commitment to excellence, ensuring that goods are
                            delivered efficiently.
                          </p>
                          <p>
                            At Togeto, our mission is to redefine the logistics
                            industry by delivering efficiency, reliability, and
                            innovation. We are dedicated to empowering
                            businesses of all sizes by offering end-to-end
                            logistics solutions that streamline.
                          </p>
                        </div>
                      </TabPanel>
                    ))}
                  </div>
                </div>
              </Tabs>

              <AboutFunFactOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTwo;
