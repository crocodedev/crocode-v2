import Image from 'next/image';
import Link from 'next/link';

import { data } from './data';
import styles from './styles.module.scss';

const Footer = () => {
  if (!data) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__column}>
          <div className={styles.logo}>
            <Image src={data.logoImage.src} fill alt={data.logoImage.alt} />
          </div>
          <div className={styles.social}>
            {data.socialIcons.map((item, i) => (
              <a
                href={item.href}
                target='_blank'
                className={styles.social__link}
                aria-label={item.alt}
                key={i}
              >
                {item.icon()}
              </a>
            ))}
          </div>
        </div>
        {data.columns.map((column, i) => (
          <div className={styles.column} key={i}>
            <Link href={column.title.href} className={styles.column__title}>
              {column.title.text}
            </Link>
            <div className={styles.column__links}>
              {column.items.map((item, i) => (
                <Link href={item.href} className={styles.column__link} key={i}>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.container} ${styles.bottom}`}>
        <p className={styles.copyright}>{data.copyrightText}</p>
        <a href={data.bottomLink.href} className={styles.privacy}>
          {data.bottomLink.text}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
