/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionLayout } from '@/components/sections';
import { Card, Filters, Pagination } from '@/components/ui';

import styles from './styles.module.scss';

const BLOG_CATEGORY = ['Latest', 'Technologies', 'UI/UX', 'Client guides'];

type TProps = {
  category: string[];
  cards?: any; // заполнить карточки контентом
};

const BlogCatalogSection = ({ category }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Filters
        items={BLOG_CATEGORY}
        paramKey='category'
        className={styles.filters}
      />
      <div className={styles.container}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} className={styles.card}>
            {index}
          </Card>
        ))}
      </div>
      <Pagination totalPages={10} currentPage={1} />
    </SectionLayout>
  );
};

export default BlogCatalogSection;
