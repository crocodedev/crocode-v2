import { Card } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    id: '01',
    title: 'Elastyczność',
    text: 'Możesz dostosować wielkość dedykowanego zespołu developerskiego w dowolnym momencie',
  },
  {
    id: '02',
    title: 'Oszczędność kosztów',
    text: 'Zespół dedykowany w modelu offshore kosztuje mniej niż wewnętrzny zespół',
  },
  {
    id: '03',
    title: 'Rozwijanie kompetencji zespołu',
    text: 'Model Dedicated Team pozwala elastycznie zwiększać lub zmniejszać kompetencje i koszty zespołu według potrzeb',
  },
  {
    id: '04',
    title: 'Oszczędność czasu',
    text: 'Posiadanie dedykowanego zespołu developerskiego z solidnym doświadczeniem i wysokiej jakości zarządzaniem projektami zapewnia szybsze wprowadzenie produktu na rynek',
  },
];

const BenefitsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        {'Jakie korzyści niesie zatrudnienie dedykowanego zespołu?'.toUpperCase()}
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
