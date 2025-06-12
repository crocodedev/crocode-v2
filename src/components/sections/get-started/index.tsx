import { SectionLayout } from '@/components/sections';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

type TProps = {
  title: string;
};

const GetStarted = ({ title }: TProps) => {
  return (
    <SectionLayout>
      <div className={styles.banner}>
        <h3 className={styles.banner__title}>{title}</h3>
        <Button>Start Project</Button>
      </div>
    </SectionLayout>
  );
};

export default GetStarted;
