import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Pagination } from '@/components/ui';

import { TPagination } from '@/types/pagination';

import styles from './styles.module.scss';
import { TCase } from './type';

type TProps = {
  cases: TCase[];
  paginationData: TPagination;
  paginationEvent?: (page: number) => void;
};

const CasesSection = ({ cases, paginationData, paginationEvent }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {cases.length > 0 ? (
          cases.map((card: TCase, index: number) => (
            <Link href={card.slug.current} className={styles.card} key={index}>
              <Image
                className={styles.card__image}
                src={card.casesItemImage.image.asset.url}
                width={700}
                height={350}
                alt={card.casesItemImage?.altText || 'image'}
              />
            </Link>
          ))
        ) : (
          <p>No cases found</p>
        )}
      </div>
      <Pagination
        paginationData={paginationData}
        showPaginationRange={true}
        onPageChange={paginationEvent}
      />
    </SectionLayout>
  );
};

export default CasesSection;
