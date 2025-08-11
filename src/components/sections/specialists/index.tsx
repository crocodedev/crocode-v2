import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { DATA } from './data';
import styles from './styles.module.scss';

const SepcialistsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>{DATA.title.toUpperCase()}</h2>
      <div className={styles.container}>
        {DATA.items.map((item) => (
          <Card className={styles.card} key={item.id}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            <span className={styles.card__num}>{item.id}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SepcialistsSection;
