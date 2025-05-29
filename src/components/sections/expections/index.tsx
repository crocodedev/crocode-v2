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

const ExpectionsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        {`WHAT YOU CAN EXPECT`.toUpperCase()}
      </h2>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card className={styles.card} key={item.id}>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            <span className={styles.card__num}>{item.id}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ExpectionsSection;
