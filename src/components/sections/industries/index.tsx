import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import { TLink } from '@/types/types';

import styles from './style.module.scss';

type TProps = {
  title: string;
  items: {
    number: string | number;
    link: TLink;
  }[];
};

const Industries = (props: TProps) => {
  console.log(props);
  return (
    <SectionLayout>
      <Title text={props.title} />
      <div className={styles.container}>
        {props.items.map((item, i) => (
          <Card className={styles.card} key={i}>
            <div className={styles.card__inner}>
              <div className={styles.card__number_wrapper}>
                <span className={styles.card__number}>{item.number}</span>
              </div>
              <Link href={item.link.href} className={styles.card__link}>
                {item.link.text}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Industries;
