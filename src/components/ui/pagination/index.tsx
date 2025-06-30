import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@/components/icons';
import Button from '@/components/ui/button';

import { TPagination } from '@/types/pagination';

import styles from './styles.module.scss';

type TProps = {
  paginationData: TPagination;
  onPageChange?: (page: number) => void;
};

const Pagination = ({ onPageChange, paginationData }: TProps) => {
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

  return (
    <div className={styles.pagination}>
      <Button
        type='button'
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label='Previous page'
      >
        <IconChevronLeft />
      </Button>
      <Button
        type='button'
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label='Next page'
      >
        <IconChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
