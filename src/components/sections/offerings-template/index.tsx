import { SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  items: string[];
};

const OfferingsTemplate = ({ title, items }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Title text={title} />
      <div className={styles.container}>
        {items.map(
          (
            item, // TODO: AFTER DYNAMIC DATA FIX KEY
          ) => (
            <Card key={item} className={styles.card}>
              {item}
            </Card>
          ),
        )}
      </div>
    </SectionLayout>
  );
};

export default OfferingsTemplate;
