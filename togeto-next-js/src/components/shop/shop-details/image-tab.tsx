import Image, { StaticImageData } from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

interface ImageTabProps {
  images: StaticImageData[];
}

const ImageTab = ({ images }: ImageTabProps) => {
  return (
    <div className="it-shop-details__wrapper">
      <Tabs>
        <div className="it-shop-details__tab-content-box mb-20">
          <div className="tab-content" id="nav-tabContent">
            {images
              .map((image, index) => (
                <TabPanel key={index}>
                  <div className="it-shop-details__tab-big-img">
                    <Image
                      className="image-height-auto"
                      src={image}
                      alt="Big Image"
                      width={570}
                      height={570}
                    />
                  </div>
                </TabPanel>
              ))
              .slice(0, 4)}
          </div>
        </div>
        <div className="it-shop-details__tab-btn-box">
          <nav>
            <TabList className="nav nav-tab justify-content-center">
              {images
                .map((image, index) => (
                  <Tab key={index}>
                    <button className="nav-links">
                      <Image
                        className="image-height-auto"
                        src={image}
                        alt="Button Img"
                        width={75}
                        height={66}
                      />
                    </button>
                  </Tab>
                ))
                .slice(4, 8)}
            </TabList>
          </nav>
        </div>
      </Tabs>
    </div>
  );
};
export default ImageTab;
