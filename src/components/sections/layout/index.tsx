import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const SectionLayout = ({ children }: PropsWithChildren<unknown>) => {
  return <section className={styles.layout}>{children}</section>;
};
