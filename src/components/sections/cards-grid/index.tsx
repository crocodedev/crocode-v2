import { Card, TitleSection } from '@/components/ui';

import TCards from '@/types/cards';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

type TProps = {
  title?: string;
  cards: TCards[];
};

const CardGrid = ({ title, cards }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      {title && (
        <TitleSection label={title} className={styles.section__title} />
      )}
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card className={styles.card} color={card.color} key={index}>
            {card.title && <h2 className={styles.card__title}>{card.title}</h2>}
            <p className={styles.card__text}>{card.text}</p>
            {card.number && (
              <span className={styles.card__number}>{card.number}</span>
            )}
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CardGrid;
