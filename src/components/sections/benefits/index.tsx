import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    id: '01',
    title: 'Flexibility',
    text: 'you can scale your dedicated development team size any time',
  },
  {
    id: '02',
    title: 'cost savings',
    text: 'an offshore dedicated development team will cost less than in-hose team',
  },
  {
    id: '03',
    title: 'increasing and scaling team skills',
    text: 'Dedicated Team empowers you to scale your dedicated team’s skills and costs up and down as needed',
  },
  {
    id: '04',
    title: 'time savings',
    text: 'Having a dedicated development team with solid experience and high quality project management will ensure faster speed to market',
  },
];

const BenefitsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        {'What are the benefits of hiring a dedicated team?'.toUpperCase()}
      </h2>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card className={styles.card} key={item.id}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            <span className={styles.card__num}>{item.id}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
