import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = {
  children?: PropsWithChildren<unknown>['children'];
  title: string;
};

export const Banner = ({ children, title }: TProps) => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.banner__title}>{title}</h2>
      {children}
    </div>
  );
};
