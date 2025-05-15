import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = {
  children?: PropsWithChildren<unknown>['children'];
  title: string;
  className?: string;
};

export const Banner = ({ children, title, className }: TProps) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <h2 className={styles.banner__title}>{title}</h2>
      {children}
    </div>
  );
};
