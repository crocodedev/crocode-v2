import { SectionLayout } from '@/components/sections';
import { CardLayout, Container, Title } from '@/components/ui';

import { SECTIONS_NAME } from '@/utils/const';

import styles from './styles.module.scss';

export const ServicesSection = () => {
  return (
    <SectionLayout>
      <Title title={SECTIONS_NAME.SERVICES} anchor='right' />
      <Container className={styles.container}>
        <CardLayout className={styles.card_up_left}>1</CardLayout>
        <CardLayout className={styles.card_up_right}>2</CardLayout>
        <CardLayout className={styles.card_down_left}>3</CardLayout>
        <CardLayout className={styles.card_down_right}>4</CardLayout>
      </Container>
    </SectionLayout>
  );
};
