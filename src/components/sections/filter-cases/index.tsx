import { SectionLayout } from '@/components/sections';
import { Filters } from '@/components/ui';

import styles from './styles.module.scss';

const FILTERS_TECH_STACK = [
  'Gatsby',
  'React',
  'CMS',
  'Sanity',
  'TypeScript',
  'EmotionJS',
  'NextJS',
  'Canvas',
  'JavaScript',
  'HTML',
  'CSS',
  'Shopify Liquid',
];

const FILTERS_COUNTRY = [
  'Germany',
  'United Kingdom',
  'Denmark',
  'USA',
  'Italy',
];

const FiltersCases = () => {
  return (
    <SectionLayout className={styles.layout}>
      <Filters title='Tech stack:' items={FILTERS_TECH_STACK} paramKey='tech' />
      <Filters title='Country:' items={FILTERS_COUNTRY} paramKey='country' />
    </SectionLayout>
  );
};

export default FiltersCases;
