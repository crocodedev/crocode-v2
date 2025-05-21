import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

export const OurProjectsSection = () => {
  return (
    <SectionLayout>
      <Title text='OUR PROJECTS' anchor='right' />
      <div className={styles.container}>
        <Card className={styles.card}>1</Card>
        <Card className={styles.card}>2</Card>
        <Card className={`${styles.card} ${styles.card__button}`}>
          Show more
        </Card>
      </div>
    </SectionLayout>
  );
};
