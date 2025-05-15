import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type Tprops = {
  children: PropsWithChildren<unknown>['children'];
  className?: string;
};

export const Container = ({ children, className }: Tprops) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
