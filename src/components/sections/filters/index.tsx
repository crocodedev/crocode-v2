import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

export const FilterSection = ({
  title,
  items,
  paramKey,
}: {
  title: string;
  items: string[];
  paramKey: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const urlValues = params.get(paramKey)?.split(',') || [];
    setSelectedItems(urlValues);
  }, [paramKey, searchParams]);

  const toggleFilter = (item: string) => {
    const newSelected = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];

    setSelectedItems(newSelected);

    const params = new URLSearchParams(searchParams);
    if (newSelected.length > 0) {
      params.set(paramKey, newSelected.join(','));
    } else {
      params.delete(paramKey);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <SectionLayout className={styles.section}>
      <h3 className={styles.category}>{title}</h3>
      <div className={styles.filters}>
        {items.map(item => (
          <Button
            key={item}
            className={`${styles.button} ${
              selectedItems.includes(item) ? styles.selected : ''
            }`}
            onClick={() => toggleFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </SectionLayout>
  );
};
