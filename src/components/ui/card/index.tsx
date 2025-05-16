import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  onClick?: () => void;
};

export const Card = ({ children, className, ...props }: TProps) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};
