import Link from 'next/link';
import { useState } from 'react';

import { usePopup } from '@/components/context-popup';
import { Button } from '@/components/ui';

import { data } from './data';
import styles from './styles.module.scss';

const Header = () => {
  const [isMenusClosed, setIsMenuClosed] = useState(true);
  const { openPopup } = usePopup();

  const handleToggleMenu = () => setIsMenuClosed((prev) => !prev);

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
            {data.links.map((link, i) => (
              <li key={i} className={styles.nav__list__item}>
                <Link href={link.href} className={styles.nav__link_mobile}>
                  {link.text}
                </Link>
                <Link href={link.href} className={styles.nav__link_desktop}>
                  {link.text}
                </Link>
              </li>
            ))}
            <li className={styles.nav__list__item}>
              <Button className={styles.nav__link_desktop} onClick={openPopup}>
                {data.button}
              </Button>
            </li>
          </ul>
          <div className={styles.nav__actions}>
            <Button
              className={`${styles.nav__button} ${styles.mobile}`}
              onClick={openPopup}
            >
              {data.button}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
