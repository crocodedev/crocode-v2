import Image from 'next/image';

import { Card } from '@/components/ui';

import { TImage } from '@/types/types';

import SectionLayout from '../section-layout';

import { cardData } from './data';
import styles from './style.module.scss';

type TProps = {
  cards?: TImage[];
  info?: {
    title: string;
    description: string;
  }[];
};

const CardImageFive = ({
  cards = cardData.cards,
  info = cardData.info,
}: TProps) => {
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
