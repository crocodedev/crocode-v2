import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

type TProps = {
  items: string[];
  className?: string;
  title?: string;
  setSelect: (county: string) => void;
  select: string[];
};

const Filters = ({
  items,
  className,
  title,
  setSelect,
  select,
}: TProps) => {

  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h3 className={styles.category}>{title}</h3>}
      <div className={styles.filters}>
        {items.map((item) => (
          <button
            key={item}
            className={`${styles.button} ${select?.includes(item) ? styles.selected : ''}`}
            onClick={() => setSelect(item)}
            type='button'
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
