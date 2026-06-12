'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { selectIsOnePage } from '@/redux/selectors/header-selector';
import { toggleOffCanvas } from '@/redux/slices/header-slice';
import HeaderMenusOnePage from './header-menus-onepage';
import HeaderMenus from './header-menus';
import TopBarArea from '@/components/top-bar/top-bar-area';
import { HEADER_STICKY_CLASS } from '@/utils/constants';
import OffCanvas from '@/components/offcanvas/offcanvas';
import { MenuBar } from '@/components/svg';

import Logo from '@/assets/img/logo/logo-red.png';

interface HeaderProps {
  headerClass?: string;
  headerLogo?: StaticImageData;
  hasTopBar?: boolean;
  hasPopUp?: boolean;
}

const Header = ({
  headerClass = 'it-header-area it-header-ptb it-header-style-2',
  headerLogo = Logo,
  hasTopBar = true,
}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { isVisible } = useHeaderScroll(); // Custom hook for showing sticky header
  const isOnePage = useAppSelector(selectIsOnePage); // Selector for getting the state of the header

  // Handler for opening Off Canvas
  const handleOffCanvasOpen = () => {
    dispatch(toggleOffCanvas(true));
  };

  return (
    <>
      {/* Off-canvas */}
      <OffCanvas />
      {/* Off-canvas */}

      <header>
        {/* Conditionally Show TopBar Area */}
        {hasTopBar && <TopBarArea />}
        {/* TopBar Area  */}

        <div
          id="header-sticky"
          className={`${headerClass} ${isVisible ? HEADER_STICKY_CLASS : ''}`}
        >
          <div className="container">
            <div className="p-relative">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-6">
                  <div className="it-header-logo">
                    <Link href="/">
                      <Image
                        className="image-height-auto"
                        src={headerLogo}
                        alt="Venture Electronics"
                        width={226}
                        height={60}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-8 d-none d-xl-block">
                  <div className="it-header-menu it-header-dropdown">
                    <nav className="it-menu-content">
                      {isOnePage ? <HeaderMenusOnePage /> : <HeaderMenus />}
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-6">
                  <div className="it-header-right-action d-flex justify-content-end align-items-center">
                    <Link
                      href="/contact"
                      className="it-btn-orange d-none d-md-block"
                    >
                      <span>Get Started Now</span>
                    </Link>
                    <div className="it-header-bar d-xl-none">
                      <button
                        className="it-menu-bar"
                        onClick={handleOffCanvasOpen}
                      >
                        <span>
                          <MenuBar />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
