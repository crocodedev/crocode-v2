import { FilterSection, SectionLayout } from '@/components/sections';
import { Card, Pagination } from '@/components/ui';

import styles from './styles.module.scss';

const BLOG_CATEGORY = ['Latest', 'Technologies', 'UI/UX', 'Client guides'];

export const BlogCatalogSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <FilterSection
        items={BLOG_CATEGORY}
        paramKey='category'
        className={styles.filters}
      />
      <div className={styles.container}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} className={styles.card}>
            {index}
          </Card>
          // TODO: AFTER DYNAMIC DATA FIX KEY
        ))}
      </div>
      <Pagination totalPages={10} currentPage={1} />
    </SectionLayout>
  );
};
