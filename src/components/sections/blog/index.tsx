import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

export const BlogSection = () => {
  return (
    <SectionLayout>
      <Title title='BLOG' anchor='right' />
      <div className={styles.container}>
        <Card>1</Card>
        <div className={styles.rightCol}>
          <Card>2</Card>
          <Button>Learn in detail</Button>
        </div>
        <Card>3</Card>
        <Card>4</Card>
      </div>
    </SectionLayout>
  );
};
