import { SectionLayout } from '@/components/sections';
import { CardLayout, Container, Title } from '@/components/ui';

import { SECTIONS_NAME } from '@/utils/const';

import styles from './style.module.scss';

export const IndustriesSection = () => {
  return (
    <SectionLayout>
      <Title title={SECTIONS_NAME.INDUSTRIES} />
      <Container className={styles.container}>
        {Array.from({ length: 4 }).map((_, index) => {
          return <CardLayout key={`tech-card-${index}`}>Mock Data</CardLayout>; // TODO: AFTER DYNAMIC DATA FIX KEY
        })}
      </Container>
    </SectionLayout>
  );
};
