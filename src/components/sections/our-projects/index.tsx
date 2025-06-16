import Image from 'next/image';

import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';
import { AnchorType } from '@/components/ui/title/types';

import { TImage } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  anchor?: AnchorType;
  cards: [TImage, TImage, TImage];
};

const OurProjectsSection = ({ title, anchor = 'right', cards }: TProps) => {
  return (
    <SectionLayout>
      <Title text={title} anchor={anchor} />
      <div className={styles.container}>
        {cards.map((card, index) => {
          if (index == cards.length - 1) {
            return (
              <Card
                className={`${styles.card} ${styles.card__button}`}
                key={index}
              >
                <Image
                  className={styles.card__image}
                  src={card.src}
                  fill
                  alt={card.alt}
                />
              </Card>
            );
          } else {
            return (
              <Card className={styles.card} key={index}>
                <Image
                  className={styles.card__image}
                  src={card.src}
                  fill
                  alt={card.alt}
                />
              </Card>
            );
          }
        })}
      </div>
    </SectionLayout>
  );
};

export default OurProjectsSection;
