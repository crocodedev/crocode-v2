import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Card, Filters, Pagination } from '@/components/ui';

import styles from './styles.module.scss';
import { TProps } from './types';

const BlogCatalogSection = ({ category, articles, paginationData }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Filters items={category} className={styles.filters} />
      <div className={styles.container}>
        {articles.length > 0 &&
          articles.map((article, index) => (
            <Card key={index} className={styles.card}>
              <Link className={styles.card__link} href={article.slug.current}>
                <Image
                  className={styles.card__image}
                  src={article.coverImage.image.asset.url}
                  fill
                  alt={article.coverImage.altText ?? 'image'}
                />
              </Link>
            </Card>
          ))}
      </div>
      <Pagination paginationData={paginationData} />
    </SectionLayout>
  );
};

export default BlogCatalogSection;
