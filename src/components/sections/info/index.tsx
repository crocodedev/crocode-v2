import { Text, TitleSection } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

type TInfo = {
  title?: string;
  text: string[];
};

type TProps = {
  isImage?: boolean;
  items: TInfo[];
};

const Info = ({ items }: TProps) => {
  return (
    <>
      {items.map((item: TInfo, index: number) => (
        <SectionLayout className={styles.info} key={index}>
          {item.title && (
            <TitleSection className={styles.info__title} label={item.title} />
          )}
          <Text className={styles.info__text} labels={item.text} />
        </SectionLayout>
      ))}
    </>
  );
};

export default Info;
