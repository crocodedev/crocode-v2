import Image from 'next/image';

import { SmartLink } from '@/components/ui';

import { TImage, TLink } from '@/types/types';

import styles from './styles.module.scss';

type TColumn = {
  title: string;
  _key: string;
  link: TLink;
  items: {
    _key: string;
    link: TLink;
  }[];
};

type TSocialIcons = {
  iconImage: TImage;
  link: TLink;
  _key: string;
};

type TProps = {
  bottomLinks: TLink[];
  column: TColumn[];
  copyrightText: string;
  logoImage: TImage;
  socialIcons: TSocialIcons[];
};

const Footer = (props: TProps) => {
  console.log(props);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__}>
          <div className={styles.logo}>
            <Image
              src={props.logoImage.image.asset.url}
              fill
              alt={props.logoImage.altText}
            />
          </div>
          <div className={styles.social}>
            {props.socialIcons.map((item) => (
              <a
                href={item.link.linkExternal?.href}
                target={item.link.linkExternal?.blank ? '_blank' : '_self'}
                className={styles.socials__link}
                key={item._key}
              >
                <span className={styles.social__icon}>
                  <Image
                    src={item.iconImage.image.asset.url}
                    fill
                    alt={item.iconImage.altText}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
        {props.column.map((column) => (
          <div className={styles.column} key={column._key}>
            <SmartLink data={column.link} className={styles.column__title} />
            <div className={styles.column__links}>
              {column.items.map((item) => (
                <SmartLink
                  data={item.link}
                  className={styles.column__link}
                  key={item._key}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.container} ${styles.bottom}`}>
        <p className={styles.copyright}>{props.copyrightText}</p>
        {props.bottomLinks.map((link) => (
          <SmartLink data={link} className={styles.privacy} key={link._key} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
