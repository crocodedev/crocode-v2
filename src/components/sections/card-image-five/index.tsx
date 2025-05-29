import Image from 'next/image';

import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './style.module.scss';

// const CARDS_IMAGE = [
//   {
//     src: '/image.png',
//     alt: 'image',
//   },
//   {
//     src: '/image.png',
//     alt: 'image',
//   },
//   {
//     src: '/image.png',
//     alt: 'image',
//   },
//   {
//     src: '/image.png',
//     alt: 'image',
//   },
//   {
//     src: '/image.png',
//     alt: 'image',
//   },
// ];

// const INFO = [
//   {
//     title: 'Tech',
//     description: 'HTML, CSS, JavaScript, Shopify Liquid, PHP',
//   },
//   {
//     title: 'Duration',
//     description: '2 Months',
//   },
//   {
//     title: 'Industry',
//     description: 'Bags shop',
//   },
//   {
//     title: 'Service',
//     description: 'Visual fixes',
//   },
// ];

type TCardImage = {
  src: string;
  alt: string;
};

type TInfo = {
  title: string;
  description: string;
};

type TProps = {
  cards: TCardImage[];
  info: TInfo[];
};

const CardImageFive = ({ cards, info }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card className={styles.card} key={index}>
            <Image
              className={styles.card__image}
              width={100}
              height={100}
              src={card.src}
              alt='image'
            />
          </Card>
        ))}
      </div>
      <div className={styles.info}>
        {info.map((info, index) => (
          <div className={styles.info__item} key={index}>
            <p className={styles.info__title}>{info.title}</p>
            <p className={styles.info__description}>{info.description}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CardImageFive;
