import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

export const OurProjectsSection = () => {
  return (
    <SectionLayout>
      <Title title='OUR PROJECTS' anchor='right' />
      <div className={styles.container}>
        <Card className={styles.card}>1</Card>
        <Card className={styles.card}>2</Card>
        <Card className={styles.card}>3</Card>
      </div>
    </SectionLayout>
  );
};
