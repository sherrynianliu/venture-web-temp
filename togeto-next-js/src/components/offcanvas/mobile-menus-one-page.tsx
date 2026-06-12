'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks';
import { selectOnePageData } from '@/redux/selectors/header-selector';

const MobileOnePageMenus = () => {
  const onePageMenuData = useAppSelector(selectOnePageData); // Selector for getting the state of One page Data
  const [activeMenu, setActiveMenu] = useState<number | null>(
    onePageMenuData[0]?.id || null
  );
  const [navTitle, setNavTitle] = useState<string | null>(null);

  // Toggle Mobile Menu
  const toggleMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? null : menu));
  };

  // Handler for setting active
  const handleMenuClick = (id: number) => {
    setActiveMenu(id);
  };

  return (
    <ul className="it-onepage-menu">
      {onePageMenuData.map((menu) => (
        <li
          key={menu.id}
          className={menu.home_menus ? 'has-dropdown p-static' : ''}
        >
          <Link
            href={menu.link}
            className={activeMenu === menu.id ? 'active' : ''}
            onClick={() => handleMenuClick(menu.id)}
          >
            {menu.title}

            {menu.home_menus && (
              <button
                className={`dropdown-toggle-btn ${
                  navTitle === menu.title ? 'dropdown-opened' : ''
                } d-xl-none`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileMenu(menu.title);
                }}
              >
                <i className="fal fa-angle-right"></i>
              </button>
            )}
          </Link>
          {menu.home_menus && (
            <div
              className={`it-submenu submenu has-home-img ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              <div className="it-homemenu-wrapper">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                  {menu.home_menus.map((home_menu, i) => (
                    <div key={i} className="col home-img">
                      <div className="home-img-thumb home-img-overly mb-20">
                        <Image
                          className="image-height-auto"
                          src={home_menu.img}
                          alt="home-img"
                          width={340}
                          height={500}
                        />
                        {home_menu.buttons && (
                          <div className="home-img-btn">
                            {home_menu.buttons?.map((btn, i) => (
                              <Link
                                key={i}
                                className="it-btn-sm"
                                href={btn.href}
                              >
                                <span className="text-one">{btn.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="home-img-content text-center">
                        <h4 className="home-img-title">
                          <Link href={home_menu.link}>{home_menu.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default MobileOnePageMenus;
