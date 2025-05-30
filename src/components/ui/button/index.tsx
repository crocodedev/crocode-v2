import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  className?: string;
  view?: 'prime' | 'second' | string;
};

const Button = ({
  children,
  className = '',
  view = 'prime',
  ...props
}: TProps) => {
  return (
    <button
      className={`${styles.button} ${className} ${view ? styles[`button__${view}`] : styles.button__prime}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
