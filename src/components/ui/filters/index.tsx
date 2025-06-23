import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

type TProps = {
  items: string[];
  paramKey: string;
  className?: string;
  title?: string;
};

const Filters = ({ items, paramKey, className, title }: TProps) => {
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
      ? selectedItems.filter((i) => i !== item)
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
    <div className={`${styles.container} ${className}`}>
      {title && <h3 className={styles.category}>{title}</h3>}
      <div className={styles.filters}>
        {items.map((item) => (
          <button
            key={item}
            className={`${styles.button} ${
              selectedItems.includes(item) ? styles.selected : ''
            }`}
            onClick={() => toggleFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
