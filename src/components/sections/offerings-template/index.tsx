import Link from 'next/link';

import { ModelsSectionTemplate, SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
import { AnchorType } from '@/components/ui/title/types';

import { items } from './data';
import styles from './styles.module.scss';

type TProps = {
  title: string;
  anchor?: AnchorType;
  modelsIsShow?: boolean;
};

const OfferingsTemplate = ({
  title,
  anchor = 'left',
  modelsIsShow = true,
}: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Title text={title} anchor={anchor} />
      <ModelsSectionTemplate modelsIsShow={modelsIsShow} />
      <div className={styles.container}>
        {items?.map((item, index) => (
          <Link className={styles.card} href={item.href} key={index}>
            {item.text}
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default OfferingsTemplate;
