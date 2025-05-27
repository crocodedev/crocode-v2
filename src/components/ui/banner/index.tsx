import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  title: string;
  className?: string;
};

const Banner = ({ children, title, className }: TProps) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <h2 className={styles.banner__title}>{title}</h2>
      {children}
    </div>
  );
};

export default Banner;
