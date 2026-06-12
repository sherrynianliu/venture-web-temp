'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux-hooks';
import { selectOnePageData } from '@/redux/selectors/header-selector';

const HeaderMenusOnePage = () => {
  const onePageMenuData = useAppSelector(selectOnePageData); // Selector for getting the state one page Data
  const [activeMenu, setActiveMenu] = useState<number | null>(
    onePageMenuData[0]?.id || null
  );

  // Function to go Specific section
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const topPosition = element.offsetTop;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Handler for menu click
  const handleMenuClick = useCallback(
    (id: number, link: string) => {
      const sectionId = link.startsWith('#') ? link.substring(1) : null;
      if (sectionId) {
        scrollToSection(sectionId);
        setActiveMenu(id);
      } else {
        setActiveMenu(id);
        window.location.href = link;
      }
    },
    [scrollToSection]
  );

  return (
    <ul className="it-onepage-menu">
      {onePageMenuData.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.home_menus ? 'has-dropdown p-static' : ''}  ${
            activeMenu === menu.id ? 'active' : ''
          }`}
        >
          <Link
            href={menu.link}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(menu.id, menu.link);
            }}
          >
            {menu.title}
          </Link>
          {menu?.home_menus && (
            <div className="it-submenu submenu has-home-img">
              <div className="it-homemenu-wrapper">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                  {menu.home_menus?.map((home_menu, i) => (
                    <div key={i} className="col home-img">
                      <div className="home-img-thumb home-img-overly mb-20">
                        <Image
                          className="image-height-auto"
                          src={home_menu.img}
                          alt="home-img"
                          width={250}
                          height={250}
                        />
                        {home_menu?.buttons && (
                          <div className="home-img-btn">
                            {home_menu?.buttons.map((btn, i) => (
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

export default HeaderMenusOnePage;
