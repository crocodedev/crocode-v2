import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import styles from './style.module.scss';

export const IndustriesSection = () => {
  return (
    <SectionLayout>
      <Title title={'INDUSTRIES'} />
      <div className={styles.container}>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Card className={styles.card} key={`tech-card-${index}`}>
              Mock Data
            </Card>
          ); // TODO: AFTER DYNAMIC DATA FIX KEY
        })}
      </div>
    </SectionLayout>
  );
};
