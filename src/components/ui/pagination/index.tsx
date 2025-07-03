import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@/components/icons';

import styles from './styles.module.scss';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}) => {
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
      <button
        type='button'
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label='Previous page'
      >
        <IconChevronLeft />
      </button>

      <button
        type='button'
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label='Next page'
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
