'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  selectIsOffCanvasOpen,
  selectIsOnePage,
} from '@/redux/selectors/header-selector';
import { toggleOffCanvas } from '@/redux/slices/header-slice';
import MobileMenus from './mobile-menus';
import MobileMenusOnePage from './mobile-menus-one-page';

import Logo from '@/assets/img/logo/logo-white.png';

const OffCanvas = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const isOffCanvasOpen = useAppSelector(selectIsOffCanvasOpen); // Selector for getting the state of the Off-canvas
  const isOnePage = useAppSelector(selectIsOnePage); // Selector for getting the state of the header

  // Handler for Closing the off-canvas menu
  const handleClose = () => {
    dispatch(toggleOffCanvas(false));
  };

  //Close the off-canvas menu on route change
  useEffect(() => {
    dispatch(toggleOffCanvas(false));
  }, [pathname, dispatch]);

  return (
    <>
      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? 'itoffcanvas opened' : 'itoffcanvas'}>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn" onClick={handleClose}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link href="/">
              <Image
                className="image-height-auto"
                src={Logo}
                alt="Togeto"
                width={163}
                height={43}
              />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            {isOnePage ? <MobileMenusOnePage /> : <MobileMenus />}
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:hello@yourmail.com">togeto@yourmail.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="https://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Riverside 255, San Francisco, USA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div className="body-overlay apply" onClick={handleClose}></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};

export default OffCanvas;
