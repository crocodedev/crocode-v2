import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    id: 1,
    title: 'Essential Tools in Front-End Development',
    text: 'An impactful development project requires the use of appropriate tools and technologies. Our front-end developers rely on three primary technologies. HTML, CSS, and JavaScript, which remain the bedrock of frontend development despite the continuous evolution of technology.',
  },
  {
    id: 2,
    title:
      'HTML, or HyperText Markup Language, is used to structure texts and organize elements on a webpage',
  },
  {
    id: 3,
    title:
      'CSS, Cascading Style Sheets, defines how the basic structures created with HTML are presented to users',
  },
  {
    id: 4,
    title:
      'JavaScript, the third essential tool, allows developers to modify websites according to user requirements.',
  },
];

const MVPSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>{`WHAT'S AN MVP?`}</h2>

      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card className={styles.card} key={item.id}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            {item.text && (
              <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            )}
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default MVPSection;
