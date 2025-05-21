import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

const BlogSection = () => {
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
