import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@/components/icons';

import { TPagination } from '@/types/pagination';
import { getPaginationRange } from './utils';

import styles from './styles.module.scss';

type TProps = {
  paginationData: TPagination;
  onPageChange?: (page: number) => void;
  showPaginationRange?: boolean;
};

const Pagination = ({
  onPageChange,
  paginationData,
  showPaginationRange = false,
}: TProps) => {
  const { currentPage, totalPages } = paginationData;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    if (onPageChange) {
      onPageChange(page);
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const paginationRange = getPaginationRange({ currentPage, totalPages });

  return (
    <div className={styles.pagination}>
      <button
        type='button'
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label='Previous page'
        className={`
          ${styles.arrow}
          ${currentPage <= 1 ? styles.arrow_disabled : ''}
        `}
      >
        <IconChevronLeft />
      </button>
      {showPaginationRange && (
        <div className={styles.pagination__range}>
          {paginationRange.map((el, i) => (
            <button
              className={`
                ${styles.pagination__range__btn}
                ${el == currentPage ? styles.pagination__range__btn_active : ''}
                ${typeof el !== 'number' ? styles.pagination__range__btn_disabled : ''}
                `}
              type='button'
              onClick={() => typeof el === 'number' && handlePageChange(el)}
              key={i}
            >
              {el}
            </button>
          ))}
        </div>
      )}
      <button
        type='button'
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label='Next page'
        className={`
          ${styles.arrow}
          ${currentPage >= totalPages ? styles.arrow_disabled : ''}
        `}
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
