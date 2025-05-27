import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';
import { Pagination } from '@/components/ui';

import styles from './styles.module.scss';

const CasesSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Card className={styles.card} key={index}>
            {index}
          </Card>
        ))}
      </div>
      <Pagination currentPage={1} totalPages={10} />
    </SectionLayout>
  );
};

export default CasesSection;
