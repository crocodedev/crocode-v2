/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    id: '01',
    text: 'Development, testing, release, and support of your product. Modernization of architecture. Cloud Native and Microservices application development.',
  },
  {
    id: '02',
    text: 'We constantly monitor trends in development and update our skills. Thus, professionals with all the skills and qualities confirmed by real experience will work on your project.',
  },
  {
    id: '03',
    text: 'A strategic approach based on indicators allows you to see your actual results in numbers.',
  },
];

type Tprops = {
  title: string;
  cards: string[];
};

const ExpectionsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>{`WHAT YOU CAN EXPECT`}</h2>
      <div className={styles.container}>
        {DATA_ITEMS.map((item, i) => (
          <Card className={styles.card} key={i}>
            <p className={styles.card__text}>{item.text}</p>
            <span className={styles.card__num}>{i + 1}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ExpectionsSection;
