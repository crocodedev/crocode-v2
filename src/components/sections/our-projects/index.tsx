import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Button, Card, Title } from '@/components/ui';

import { data } from './data';
import styles from './styles.module.scss';

const OurProjectsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <Title text={data.title} anchor={'right'} />
      <div className={styles.container}>
        {data.cards.map((card, index) => (
          <Link href={card.link.href} className={styles.card} key={index}>
            <Image
              className={styles.card__image}
              src={card.image.src}
              fill
              alt={card.image.alt}
            />
          </Link>
        ))}
        <Card className={`${styles.card} ${styles.card__more}`}>
          <span className={styles.card__more_text}>Show more</span>
          <Button type={'link'} href='/'>
            Show More
          </Button>
        </Card>
      </div>
    </SectionLayout>
  );
};

export default OurProjectsSection;
