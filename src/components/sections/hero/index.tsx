import Image from 'next/image';

import { TImage, TLink } from '@/types/types';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  imageWithAltText: TImage;
  breadcrumbs: TLink[];
};

const Hero = (props: TProps) => {
  console.log(props);
  return (
    <SectionLayout className={styles.hero}>
      <div className={styles.hero__breadcrumbs}></div>
      <Image
        className={styles.hero__background}
        src={props.imageWithAltText.image.asset.url}
        fill
        alt={props.imageWithAltText.altText}
      />
      <h1 className={styles.hero__title}>{props.title}</h1>
    </SectionLayout>
  );
};

export default Hero;
