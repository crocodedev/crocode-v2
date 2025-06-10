import { ModelsSectionTemplate, SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
// import { Card } from '@/components/ui';
import { AnchorType } from '@/components/ui/title/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  items: string[];
  positionOfTitle?: AnchorType;
};

const OfferingsTemplate = ({
  title,
  items,
  positionOfTitle = 'left',
}: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <Title text={title} anchor={positionOfTitle} />
      <ModelsSectionTemplate />
      <div className={styles.container}>
        {items?.map(
          (
            item, // TODO: AFTER DYNAMIC DATA FIX KEY
          ) => (
            <Card key={item} className={styles.card}>
              {item}
            </Card>
          ),
        )} */}
      </div>
    </SectionLayout>
  );
};

export default OfferingsTemplate;
