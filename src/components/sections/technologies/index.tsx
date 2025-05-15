import { useCallback, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { CardLayout, Container, Title } from '@/components/ui';

import { SECTIONS_NAME } from '@/utils/const';

import styles from './styles.module.scss';

export const TechnologiesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickOnCard = useCallback((index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <SectionLayout>
      <Title title={SECTIONS_NAME.TECHNOLOGIES} />
      <Container className={styles.wrapper}>
        <Container className={styles.container}>
          {Array.from({ length: 8 }).map(
            (
              _,
              index, // TODO: AFTER DYNAMIC DATA FIX KEY
            ) => (
              <CardLayout
                key={`tech-card-${index}`}
                className={`${styles.card}${activeIndex === index ? ' ' + styles.active : ''}`}
                onClick={() => handleClickOnCard(index)}
              >
                Card {index + 1}
              </CardLayout>
            ),
          )}
        </Container>
      </Container>
    </SectionLayout>
  );
};
