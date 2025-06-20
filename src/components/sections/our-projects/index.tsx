/* eslint-disable @typescript-eslint/no-unused-vars */
import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

type Tprops = {
  title: string;
  cards: {
    image: {
      src: string;
      alt: string;
    };
  };
};

const OurProjectsSection = () => {
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

export default OurProjectsSection;
