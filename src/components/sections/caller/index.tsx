import { SectionLayout } from '@/components/sections';
import { Banner } from '@/components/ui';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

export const CallerSection = () => {
  return (
    <SectionLayout>
      <Banner
        className={styles.banner}
        title='Get started on your journey to digital transformation!'
      >
        <Button>Start Project</Button>
      </Banner>
    </SectionLayout>
  );
};
