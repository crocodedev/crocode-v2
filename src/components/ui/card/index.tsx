import React, { PropsWithChildren, Ref } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
  ref?: Ref<HTMLDivElement>;
};

const Card = ({ children, id, className, ...props }: TProps) => {
  return (
    <div id={id} className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
