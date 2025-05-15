import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const SectionLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <section className={styles.layout}>
      <h2 className={styles.layout__title}>{children}</h2>
    </section>
  );
};
