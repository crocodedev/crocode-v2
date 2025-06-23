import React, { PropsWithChildren, forwardRef } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  onClick?: () => void;
  id?: string;
  color?: string;
  style?: React.CSSProperties;
};

const Card = forwardRef<HTMLDivElement, TProps>(
  ({ children, id, color = 'grey', className, style, ...props }, ref) => {
    return (
      <div
        id={id}
        className={`${styles.card} ${className} ${styles[color && `card--${color}`]}`}
        style={style}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;
