import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  onClick?: () => void;
  id?: string;
};

export const Card = ({ children, id, className, ...props }: TProps) => {
  return (
    <div id={id} className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};
