import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = {
  className?: string;
  onClick?: () => void;
  children: PropsWithChildren<unknown>['children'];
};

export const Card = ({ children, className, ...props }: TProps) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};
