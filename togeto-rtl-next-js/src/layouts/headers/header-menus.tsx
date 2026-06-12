import Image from 'next/image';
import Link from 'next/link';
import { menuData } from '@/data/menu-data';

const HeaderMenus = () => {
  return (
    <ul>
      {menuData.map((menu) => (
        <li
          key={menu.id}
          className={
            menu.home_menus || menu.dropdown_menus
              ? `has-dropdown ${menu.home_menus ? 'p-static' : ''}`
              : ''
          }
        >
          <Link href={menu.link}>{menu.title}</Link>
          {menu.home_menus ? (
            <div className="it-submenu submenu has-home-img">
              <div className="it-homemenu-wrapper">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                  {menu.home_menus.map((home_menu, i) => (
                    <div key={i} className="col home-img">
                      <div className="home-img-thumb home-img-overly mb-20">
                        <Image
                          className="image-height-auto"
                          src={home_menu.img}
                          alt="home-img"
                          width={250}
                          height={250}
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
          ) : menu.dropdown_menus ? (
            <ul className="it-submenu submenu">
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
export default HeaderMenus;
