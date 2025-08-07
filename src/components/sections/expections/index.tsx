import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import { DATA } from './data';
import styles from './styles.module.scss';

const ExpectionsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>{DATA.title}</h2>
      <div className={styles.container}>
        {DATA.items.map((item, i) => (
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
