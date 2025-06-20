import Link from 'next/link';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren & {
  className?: string;
  type?: 'link' | 'button' | 'submit' | 'reset';
  href?: string;
  view?: 'prime' | 'second' | string;
  onClick?: () => void;
};

const Button = ({
  type = 'button',
  href = '/',
  children,
  className = '',
  onClick,
  view = 'prime',
  ...props
}: TProps) => {
  if (type === 'link') {
    return (
      <Link
        className={`${styles.button} ${className} ${view ? styles[`button__${view}`] : styles.button__prime}`}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${className} ${view ? styles[`button__${view}`] : styles.button__prime}`}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;
