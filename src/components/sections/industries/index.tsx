import { SectionLayout } from '@/components/sections';
import { Card, SmartLink, Title } from '@/components/ui';

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
  console.log(props);
  return (
    <SectionLayout>
      <Title text={props.title} />
      <div className={styles.container}>
        {props.items.map((item, i) => (
          <Card className={styles.card} key={i}>
            <div className={styles.card__inner}>
              <div className={styles.card__number_wrapper}>
                <span className={styles.card__number}>{item.text}</span>
              </div>
              <SmartLink data={item.link} className={styles.card__link} />
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Industries;
