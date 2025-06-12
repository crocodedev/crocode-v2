/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';
import Button from '@/components/ui/button';

import { TLink } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  cards: any; // заполнить карточки контентом
  linkDetails: TLink;
};

const BlogSection = ({ title, cards, linkDetails }: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Title text='BLOG' anchor='right' />
      <div className={styles.container}>
        <Card>1</Card>
        <div className={styles.rightCol}>
          <Card>2</Card>
          <Button className={`${styles.button} ${styles.button__lg}`}>
            Learn in detail
          </Button>
        </div>
        <Card>3</Card>
        <Card>4</Card>
      </div>
      <Button className={`${styles.button} ${styles.button__md}`}>
        Learn in detail
      </Button>
    </SectionLayout>
  );
};

export default BlogSection;
