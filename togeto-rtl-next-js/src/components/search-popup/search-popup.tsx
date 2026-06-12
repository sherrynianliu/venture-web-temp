'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectIsPopUpOpen } from '@/redux/selectors/header-selector';
import { togglePopUp } from '@/redux/slices/header-slice';
import { Close, Search } from '../svg';

import Logo from '@/assets/img/logo/logo-white.png';

const SearchPopup = () => {
  const dispatch = useAppDispatch();
  const isPopUpOpen = useAppSelector(selectIsPopUpOpen); // Selector for getting the state of the popup

  //Handler for Closing the popup
  const handleClose = () => {
    dispatch(togglePopUp(false));
  };

  return (
    <div
      className={isPopUpOpen ? 'search__popup search-opened' : 'search__popup'}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className="search__top d-flex justify-content-between align-items-center">
                <div className="search__logo">
                  <Link href="/">
                    <Image src={Logo} alt="Togeto" width={163} height={43} />
                  </Link>
                </div>
                <div className="search__close">
                  <button
                    type="button"
                    className="search__close-btn search-close-btn"
                    onClick={handleClose}
                  >
                    <Close />
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span className="search-focus-border"></span>
                    <button type="submit">
                      <Search />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPopup;
