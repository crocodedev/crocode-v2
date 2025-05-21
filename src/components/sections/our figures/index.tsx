import { Card } from '@/components/ui';

import { SectionLayout } from '../layout';

import styles from './styles.module.scss';

const OUR_FIGURES = [
  {
    number: 80,
    label: 'READY ORDERS',
  },
  {
    number: 100,
    label: 'HAPPY CLIENTS',
  },
  {
    number: 100,
    label: 'ORDERS',
  },
];

export const OurFiguresSection = () => {
  return (
    <SectionLayout className={styles.section}>
      {OUR_FIGURES.map(({ number, label }) => (
        <Card key={label} className={styles.card}>
          <h2 className={styles.number}>{number}+</h2>
          <h3 className={styles.label}>{label}</h3>
        </Card>
      ))}

      <Card className={styles.mission}>
        <p className={styles.mission__text}>
          {` Our mission is to turn ideas into impressive digital products that
          change the world. Our vision is that our products will be used by
          millions of people around the world. Our Values: C - Continuous growth
          R - Reliability O - Open-minded`.toUpperCase()}
        </p>
      </Card>
    </SectionLayout>
  );
};
