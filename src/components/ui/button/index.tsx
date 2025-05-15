import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = {
  children: PropsWithChildren<unknown>['children'];
  className?: string;
};

const Button = ({ children, className }: TProps) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}!</button>
  );
};

export default Button;
