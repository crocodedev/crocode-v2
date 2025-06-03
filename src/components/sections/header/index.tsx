import Link from 'next/link';
import { Fragment, PropsWithChildren, useState } from 'react';

import { Button } from '@/components/ui';

import { MODELS, ROUTES } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

type TProps = {
  title: string;
};

const MODELS_LIST = [
  {
    model: MODELS.ROGUE,
    props: {
      className: styles.rogue,
      lightIntensity: 2,
      rotation: [Math.PI / 10, 0, 0] as [number, number, number],
      isHaveTexture: true,
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_1,
      isHaveTexture: true,
      lightDirectionPosition: [40, 20, 20],
      rotation: [Math.PI / 3.2, 0, -Math.PI * 0.25] as [number, number, number],
      lightIntensity: 5,
    },
  },
  {
    model: MODELS.CROSS,
    props: {
      isHaveTexture: true,
      lightIntensity: 2.5,
      className: styles.cross_1,
      rotateY: Math.PI / 6,
      rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45] as [
        number,
        number,
        number,
      ],
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_2,
      isHaveTexture: true,
      lightIntensity: 5,
      cameraPosition: [1.5, 1.8, 1.8],
      lightDirectionPosition: [10, 5, 5],
      rotation: [Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3] as [
        number,
        number,
        number,
      ],
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_3,
      isHaveTexture: true,
      lightIntensity: 5,
      rotation: [Math.PI / 5, 0, 0] as [number, number, number],
    },
  },

  {
    model: MODELS.CROSS,
    props: {
      isHaveTexture: true,
      lightIntensity: 2.5,
      className: styles.cross_2,
      rotateY: Math.PI / 6,
      rotation: [Math.PI / 2, 0, Math.PI * -0.85] as [number, number, number],
    },
  },
];

const ModelLayout = ({ children }: PropsWithChildren) => (
  <Fragment>
    {MODELS_LIST.map(({ model, props }, index) => (
      <PrimitiveFactory key={index} prompt={model.url} {...props} />
    ))}
    {children}
  </Fragment>
);

const Header = ({ title }: TProps) => {
  const [isMenusClosed, setIsMenuClosed] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuClosed((prev) => !prev);
  };

  return (
    <header
      className={`${styles.header} ${isMenusClosed ? styles.header_closed : ''}`}
    >
      <div className={styles.header__inner}>
        <ModelLayout>
          <div className={`${styles.burger__wrapper} ${styles.mobile}`}>
            <Button
              className={`${styles.burger} ${!isMenusClosed ? styles.burger_active : ''}`}
              onClick={handleToggleMenu}
              aria-label='Toggle menu'
            />
          </div>

          <nav
            className={`${styles.nav} ${isMenusClosed ? styles.closed : ''}`}
          >
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

          <div className={styles.hero}>
            <h1
              className={`${styles.title} ${!isMenusClosed ? styles.closed : ''}`}
            >
              {title}
            </h1>
            <Button
              className={`${styles.nav__button} ${!isMenusClosed ? styles.closed : ''} ${styles.mobile}`}
            >
              Contact us
            </Button>
          </div>
        </ModelLayout>
      </div>
    </header>
  );
};

export default Header;
