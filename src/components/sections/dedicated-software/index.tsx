import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './style.module.scss';

const DATA_ITEMS = [
  'Deweloperzy Frontendowi',
  'Projektanci UI/UX',
  'Konsultanci i Deweloperzy Shopify',
  'Deweloperzy Backendowi',
  'Deweloperzy Aplikacji Mobilnych',
  'Konsultanci Full Stack',
];

const DedicatedSoftwareSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        NASZ ZESPÓŁ WYKWALIFIKOWANYCH PROGRAMISTÓW I INŻYNIERÓW
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
