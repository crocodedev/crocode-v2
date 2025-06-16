/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';
import Button from '@/components/ui/button';
import { AnchorType } from '@/components/ui/title/types';

import { TLink } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  anchor?: AnchorType;
  cards: any; // заполнить карточки контентом
  linkDetails: TLink;
};

const BlogSection = ({
  title,
  cards,
  anchor = 'right',
  linkDetails,
}: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Title text={title} anchor={anchor} />
      <div className={styles.container}>
        <Card>{cards[0]}</Card>
        <div className={styles.rightCol}>
          <Card>{cards[1]}</Card>
          <Button
            type='link'
            className={`${styles.button} ${styles.button__lg}`}
          >
            {linkDetails.text}
          </Button>
        </div>
        <Card>{cards[2]}</Card>
        <Card>{cards[3]}</Card>
      </div>
      <Button className={`${styles.button} ${styles.button__md}`}>
        {linkDetails.text}
      </Button>
    </SectionLayout>
  );
};

export default BlogSection;
