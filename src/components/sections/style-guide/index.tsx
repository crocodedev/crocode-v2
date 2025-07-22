import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from '@portabletext/react';

import styles from './styles.module.scss';

type TProps = {
  value: PortableTextBlock;
};

const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
    h5: ({ children }) => <h5 className={styles.h5}>{children}</h5>,
    h6: ({ children }) => <h6 className={styles.h6}>{children}</h6>,
    normal: ({ children }) => <p className={styles.p}>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          className={styles.a}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className={styles.strong}>{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    number: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.li}>{children}</li>,
    number: ({ children }) => <li className={styles.li}>{children}</li>,
  },
};

const StyleGuide = ({ value }: TProps) => {
  return (
    <div className={styles.section}>
      <PortableText value={value} components={ptComponents} />
    </div>
  );
};

export default StyleGuide;
