import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    title: 'Security',
    text: 'Custom developed software is a closed source project and is used only by your team',
  },
  {
    title: 'Flexibility & Scalability',
    text: 'You can make changes to the software at any time',
  },
  {
    title: 'Benefits of custom software',
    text: 'Understanding the benefits of custom software development for both business and customers will help you make the right decisions for you and your business',
  },
  {
    title: 'Personalized Solution',
    text: 'No templates and monotonous approaches',
  },
  {
    title: 'Realiability',
    text: 'We use a custom solution because it is safer and more reliable',
  },
];

export const AdvantagesSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card key={item.title} className={styles.card}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};
