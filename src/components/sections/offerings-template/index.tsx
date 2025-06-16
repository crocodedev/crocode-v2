import { ModelsSectionTemplate, SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
import { Card } from '@/components/ui';
import { AnchorType } from '@/components/ui/title/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  items: [string, string, string, string];
  anchor?: AnchorType;
  modelsIsShow?: boolean;
};

const OfferingsTemplate = ({
  title,
  items,
  anchor = 'left',
  modelsIsShow = true,
}: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Title text={title} anchor={anchor} />
      <ModelsSectionTemplate modelsIsShow={modelsIsShow} />
      <div className={styles.container}>
        {items?.map((item, index) => (
          <Card key={index} className={styles.card}>
            {item}
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default OfferingsTemplate;
