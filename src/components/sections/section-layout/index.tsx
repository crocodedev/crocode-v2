import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  className?: string;
  id?: string;
};

const SectionLayout = ({ children, className, id }: TProps) => {
  return (
    <section className={`${styles.layout} ${className}`} id={id}>
      {children}
    </section>
  );
};

export default SectionLayout;
