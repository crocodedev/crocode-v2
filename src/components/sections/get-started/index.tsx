import { SectionLayout } from '@/components/sections';
import Button from '@/components/ui/button';

import { data } from './data';
import styles from './styles.module.scss';

const GetStarted = () => {
  return (
    <SectionLayout>
      <div className={styles.banner}>
        <h3 className={styles.banner__title}>{data.title}</h3>
        <Button type='link' href='/contact-us'>
          Start Project
        </Button>
      </div>
    </SectionLayout>
  );
};

export default GetStarted;
