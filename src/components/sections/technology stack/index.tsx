import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  'Mobile',
  'E-Commerce Platform',
  'Back-end Development',
  'Headless CMS',
  'Other',
  'Game Engine',
  'Industries',
  'Front-end Development',
  'Services',
];

const TechnologyStackSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card key={item}>
            <h2 className={styles.title}>{item.toUpperCase()}</h2>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechnologyStackSection;
