import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  className?: string;
};

const Button = ({ children, className = '', ...props }: TProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
