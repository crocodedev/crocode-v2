import { Text, TitleSection } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

type TProps = {
  title?: string;
  texts: string[];
};

const Info = ({ title, texts }: TProps) => {
  return (
    <SectionLayout className={styles.info}>
      {title && <TitleSection className={styles.info__title} label={title} />}
      <Text className={styles.info__text} labels={texts} />
    </SectionLayout>
  );
};

export default Info;
