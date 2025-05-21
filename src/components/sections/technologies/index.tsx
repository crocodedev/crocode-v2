import { useCallback, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

export const TechnologiesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickOnCard = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <SectionLayout>
      <Title text={'TECHNOLOGIES'} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {Array.from({ length: 8 }).map(
            (
              _,
              index, // TODO: AFTER DYNAMIC DATA FIX KEY
            ) => (
              <Card
                key={`tech-card-${index}`}
                className={`${styles.card}${activeIndex === index ? ' ' + styles.active : ''}`}
                onClick={() => handleClickOnCard(index)}
              >
                Card {index + 1}
              </Card>
            ),
          )}
        </div>
      </div>
    </SectionLayout>
  );
};
