import { ModelsSectionTemplate, SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
import { Card } from '@/components/ui';
import { AnchorType } from '@/components/ui/title/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  items: string[];
  anchor?: AnchorType;
};

const OfferingsTemplate = ({ title, items, anchor = 'left' }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsSectionTemplate />
      <Title text={title} anchor={anchor} />
      <div className={styles.container}>
        {items.map((item) => (
          <Card key={item} className={styles.card}>
            {item}
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default OfferingsTemplate;
