import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui';

import { ROUTES } from '@/utils/const';

import styles from './styles.module.scss';

const Header = () => {
  const [isMenusClosed, setIsMenuClosed] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuClosed((prev) => !prev);
  };

  return (
    <header
      className={`${styles.header} ${isMenusClosed ? styles.header_closed : ''}`}
    >
      <div className={styles.header__inner}>
        <div className={`${styles.burger__wrapper} ${styles.mobile}`}>
          <Button
            className={`${styles.burger} ${!isMenusClosed ? styles.burger_active : ''}`}
            onClick={handleToggleMenu}
            aria-label='Toggle menu'
          />
        </div>

        <nav className={`${styles.nav} ${isMenusClosed ? styles.closed : ''}`}>
          <ul className={styles.nav__list}>
            {ROUTES.map((route) => (
              <li key={route.name} className={styles.nav__list__item}>
                <Link href={route.link} className={styles.nav__link_mobile}>
                  {route.name.toUpperCase()}
                </Link>
                <Link href={route.link} className={styles.nav__link_desktop}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.nav__actions}>
            <Button className={`${styles.nav__button} ${styles.mobile}`}>
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
