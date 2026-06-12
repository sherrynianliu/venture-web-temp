'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { usePathname } from 'next/navigation';
import { closeProductModal } from '@/redux/slices/product-modal-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  selectIsModalOpen,
  selectProductData,
} from '@/redux/selectors/product-modal-selector';
import ProductModalDetails from './product-modal-details';

const ProductModal = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const product = useAppSelector(selectProductData);

  // Handler to close Modal
  const handleCloseModal = useCallback(() => {
    dispatch(closeProductModal());
  }, [dispatch]);

  // Close Modal whenever component mounts or when `location` changes
  useEffect(() => {
    handleCloseModal();
  }, [handleCloseModal, pathname]);

  if (!isModalOpen) return null;
  return (
    <div
      className={
        isModalOpen
          ? 'modal fade it-product-modal show d-block'
          : 'modal fade it-product-modal'
      }
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="it-product-modal-content d-lg-flex align-items-center">
            <button
              type="button"
              className="it-product-modal-close-btn"
              onClick={handleCloseModal}
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
            <Tabs>
              <div className="it-product-details-thumb-wrapper it-tab d-sm-flex">
                <nav>
                  <TabList className="nav nav-tab flex-sm-column">
                    {product?.images
                      .map((image, index) => (
                        <Tab key={index}>
                          <button
                            className={
                              product.images.length - 1 !== index
                                ? 'nav-link'
                                : 'nav-link custom-nav-link'
                            }
                          >
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
                <div className="tab-content m-img">
                  {product?.images
                    .map((image, index) => (
                      <TabPanel key={index}>
                        <div className="it-product-details-nav-main-thumb">
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
            </Tabs>

            <ProductModalDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;
