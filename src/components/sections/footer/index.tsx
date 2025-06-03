import Image from 'next/image';

import { SmartLink } from '@/components/ui';

import { TImage, TLink, TLinkWithPdf } from '@/types/types';

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
  bottomLinks: TLinkWithPdf[];
  column: TColumn[];
  copyrightText: string;
  logoImage: TImage;
  position: number;
  socialIcons: TSocialIcons[];
};

const Footer = (props: TProps) => {
  console.log(props);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={props.logoImage.image.asset.url}
            fill
            alt={props.logoImage.altText}
          />
        </div>
        {props.column.map((column, index) => (
          <div className={styles.column} key={index}>
            <SmartLink data={column.link} className={styles.column__title} />
            <div className={styles.column__links}>
              {column.items.map((item, index) => (
                <SmartLink
                  data={item.link}
                  className={styles.column__link}
                  key={column._key + index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.container} ${styles.bottom}`}>
        <p className={styles.copyright}>{props.copyrightText}</p>
        <a href={props.bottomLinks[0].pdf.asset.url} className={styles.privacy}>
          {props.bottomLinks[0].title}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
