import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

export const ServicesSection = () => {
  return (
    <SectionLayout>
      <Title text={'SERVICES'} anchor='right' />
      <div className={styles.container}>
        <Card className={styles.card}>1</Card>
        <Card className={styles.card}>2</Card>
        <Card className={styles.card}>3</Card>
        <Card className={styles.card}>4</Card>
      </div>
    </SectionLayout>
  );
};
