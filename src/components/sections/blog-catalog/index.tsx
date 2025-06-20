import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Card, Filters, Pagination } from '@/components/ui';

import { TImage } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  category: string[];
  cards?: {
    image: TImage;
    link: string;
  };
};

const BlogCatalogSection = ({ category }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Filters
        items={category}
        paramKey='category'
        className={styles.filters}
      />
      <div className={styles.container}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} className={styles.card}>
            <Link className={styles.card__link} href='#'>
              <Image
                className={styles.card__image}
                src={'/images/our-project.png'}
                fill
                alt='project'
              />
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={10} currentPage={1} />
    </SectionLayout>
  );
};

export default BlogCatalogSection;
