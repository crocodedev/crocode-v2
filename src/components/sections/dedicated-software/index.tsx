import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './style.module.scss';

const DATA_ITEMS = [
  'Frontend Developers',
  'UI/UX Designer',
  'Shopify Consultants & Developers',
  'Backend Developers',
  'Mobile app Developers',
  'Full Stack Consultants',
];

const DedicatedSoftwareSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        OUR TEAM OF DEDICATED SOFTWARE DEVELOPERS & ENGINEERS
      </h2>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card key={item} className={styles.card}>
            <h3 className={styles.card__text}>{item}</h3>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default DedicatedSoftwareSection;
