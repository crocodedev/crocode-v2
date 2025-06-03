import Image from 'next/image';

import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './style.module.scss';

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
              alt={card.alt}
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
