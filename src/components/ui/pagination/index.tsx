'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Button from '@/components/ui/button';

import styles from './styles.module.scss';

export const Pagination = ({
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
      <Button
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label='Previous page'
      >
        &lt;
      </Button>

      <Button
        className={styles.arrow}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label='Next page'
      >
        &gt;
      </Button>
    </div>
  );
};
