import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';

import { data } from './data';
import styles from './style.module.scss';

const Industries = () => {
  return (
    <SectionLayout>
      <Title text={data.title} />
      <div className={styles.container}>
        {data.items.map((item, i) => (
          <Link className={styles.card} href={item.link.href || ''} key={i}>
            {item.link.text}
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Industries;
