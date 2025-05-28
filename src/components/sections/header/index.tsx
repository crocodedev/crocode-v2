import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui';

import { ROUTES } from '@/utils/const';

import styles from './styles.module.scss';

type TProps = {
  title: string;
};

const Header = ({ title }: TProps) => {
  const pathName = usePathname();
  const [isClosed, setIsClosed] = useState(true);

  const handleClickClose = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.header__row} ${styles.mobile}`}>
        <h2 className={`${styles.logo}  ${isClosed && styles.closed}`}>
          crocode
        </h2>

        <Button
          className={`${styles.burger} ${!isClosed ? styles.burger_active : ''}`}
          onClick={handleClickClose}
          aria-label='Menu toggle'
        >
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </div>

      <nav className={`${styles.nav} ${isClosed && styles.closed}`}>
        <ul className={styles.nav__list}>
          {ROUTES.map((route) => (
            <li
              key={route.name}
              className={`${styles.nav__list__item} ${
                pathName === route.link ? styles.active : ''
              }`}
            >
              <Link href={route.link}>{route.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.nav__actions}>
          <Button className={`${styles.nav__button} ${styles.mobile}`}>
            Contact us
          </Button>
        </div>
      </nav>

      <h1 className={styles.title}>{title.toUpperCase()}</h1>
    </header>
  );
};

export default Header;
