import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import { TImage, TLink } from '@/types/types';

import styles from './style.module.scss';

type TProps = {
  title: string;
  text?: string;
  bgColor: string;
  items: {
    _key: string;
    text: string;
    title: string;
    imageWithAltText: TImage;
    link: TLink;
  }[];
};

const Industries = (props: TProps) => {
  return (
    <SectionLayout>
      <Title text={props.title} />
      <div className={styles.container}>
        {props.items.map((item) => {
          return (
            <Card className={styles.card} key={item._key}>
              Mock Data
            </Card>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default Industries;
