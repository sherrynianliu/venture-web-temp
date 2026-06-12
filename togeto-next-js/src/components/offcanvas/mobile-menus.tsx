'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData } from '@/data/menu-data';

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string | null>(null);

  // Toggle Mobile Menu
  const toggleMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? null : menu));
  };

  return (
    <ul>
      {menuData.map((menu) => (
        <li
          key={menu.id}
          className={`${
            menu.home_menus || menu.dropdown_menus ? 'has-dropdown-2' : ''
          } ${navTitle === menu.title ? 'active' : ''}`}
        >
          <Link href={menu.link}>
            {menu.title}
            {(menu.home_menus || menu.dropdown_menus) && (
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
          {/* Render Submenus */}
          {menu.home_menus ? (
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
                                className="it-btn-sm"
                                href={btn.href}
                                key={i}
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
          ) : menu.dropdown_menus ? (
            <ul
              className={`it-submenu submenu ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              {menu.dropdown_menus?.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
export default MobileMenus;
