import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
};

const SectionLayout = ({ children, className }: TProps) => {
  return (
    <section className={`${styles.layout} ${className}`}>{children}</section>
  );
};

export default SectionLayout;
