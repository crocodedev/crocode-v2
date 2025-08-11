import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import { DATA } from './data';
import styles from './styles.module.scss';

const BenefitsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>{DATA.title}</h2>
      <div className={styles.container}>
        {DATA.items.map((item) => (
          <Card className={styles.card} key={item.id}>
            <h2 className={styles.card__title}>{item.title}</h2>
            <p className={styles.card__text}>{item.text}</p>
            <span className={styles.card__num}>{item.id}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
