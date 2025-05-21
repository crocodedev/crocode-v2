import { SectionLayout } from '@/components/sections';
import { FilterSection } from '@/components/sections/filters';

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

export const CasesFilters = () => {
  return (
    <SectionLayout className={styles.layout}>
      <FilterSection
        title='Tech stack:'
        items={FILTERS_TECH_STACK}
        paramKey='tech'
      />
      <FilterSection
        title='Country:'
        items={FILTERS_COUNTRY}
        paramKey='country'
      />
    </SectionLayout>
  );
};
