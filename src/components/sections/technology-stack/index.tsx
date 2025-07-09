import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';
import { data } from './data';

const TechnologyStackSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {data.map((item, index) => (
          <Card className={styles.card} key={index}>
            <Link
              href={`/technologies/${item.href}`}
              className={styles.card__link}
            >
              <h2 className={styles.title}>{item.text}</h2>
            </Link>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechnologyStackSection;
