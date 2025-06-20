import { useState } from 'react';

import { usePopup } from '@/components/context-popup';
import { SmartLink } from '@/components/ui';
import { Button } from '@/components/ui';

import { TImage, TLink } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  headerButton: TLink;
  headerLinks: TLink[];
  logoImage: TImage;
};

const Header = (props: TProps) => {
  const [isMenusClosed, setIsMenuClosed] = useState(true);
  const { openPopup } = usePopup();

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
            {props.headerLinks.map((link: TLink) => (
              <li key={link._key} className={styles.nav__list__item}>
                <SmartLink data={link} className={styles.nav__link_mobile} />
                <SmartLink data={link} className={styles.nav__link_desktop} />
              </li>
            ))}
            <li className={styles.nav__list__actions}>
              <Button className={styles.nav__list__button} onClick={openPopup}>
                Contact us
              </Button>
            </li>
          </ul>
          <div className={styles.nav__actions}>
            <Button
              view='second'
              className={` ${styles.mobile}`}
              onClick={openPopup}
            >
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
