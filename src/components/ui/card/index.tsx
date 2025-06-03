import React, { PropsWithChildren, Ref } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
  color?: string;
  ref?: Ref<HTMLDivElement>;
};

const Card = ({
  children,
  id,
  color = 'grey',
  className,
  ...props
}: TProps) => {
  return (
    <div
      id={id}
      className={`${styles.card} ${className} ${styles[color && `card--${color}`]}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
