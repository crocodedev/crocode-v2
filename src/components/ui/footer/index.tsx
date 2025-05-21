import styles from './styles.module.scss';

const SERVICES_ROUTES = [
  {
    id: 1,
    title: 'Dedicated Teams',
    href: '/services/dedicated-teams',
  },
  {
    id: 2,
    title: 'MVP Development',
    href: '/services/mvp-development',
  },
  {
    id: 3,
    title: 'Custom Software',
    href: '/services/custom-software',
  },
  {
    id: 4,
    title: 'Consulting',
    href: '/services/consulting',
  },
];

const TECHNOLOGIES_ROUTES = [
  {
    id: 1,
    title: 'Game Develoment',
    href: '/technologies/game-development',
  },
  {
    id: 2,
    title: 'Front-end Developmnet',
    href: '/technologies/front-end-development',
  },
  {
    id: 3,
    title: 'Back-end Development',
    href: '/technologies/back-end-development',
  },
  {
    id: 4,
    title: 'Mobile Development',
    href: '/technologies/mobile-development',
  },
  {
    id: 5,
    title: 'E-commerce Development',
    href: '/technologies/e-commerce-development',
  },
  {
    id: 6,
    title: 'Healdess CMS Development',
    href: '/technologies/health-cms-development',
  },
];

const ABOUT_US_ROUTES = [
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
  },
  {
    id: 2,
    title: 'Contacts',
    href: '/contacts',
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>crocode</h2>
        <div className={styles.column}>
          <h3 className={styles.column__title}>Services</h3>
          {SERVICES_ROUTES.map((route) => (
            <a key={route.id} className={styles.column__link} href={route.href}>
              {route.title}
            </a>
          ))}
        </div>
        <div className={styles.column}>
          <h3 className={styles.column__title}>Technologies</h3>
          {TECHNOLOGIES_ROUTES.map((route) => (
            <a key={route.id} className={styles.column__link} href={route.href}>
              {route.title}
            </a>
          ))}
        </div>
        <div className={styles.column}>
          <h3 className={styles.column__title}>About us</h3>
          {ABOUT_US_ROUTES.map((route) => (
            <a key={route.id} className={styles.column__link} href={route.href}>
              {route.title}
            </a>
          ))}
        </div>
      </div>
      <div className={`${styles.container} ${styles.bottom}`}>
        <p className={styles.copyright}>
          © 2025 KROKOD Sp. z o.o. All Rights Reserved
        </p>
        <p className={styles.privacy}>Privacy policy</p>
      </div>
    </footer>
  );
};
