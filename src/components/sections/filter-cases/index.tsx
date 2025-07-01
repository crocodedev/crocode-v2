import { SectionLayout } from '@/components/sections';
import { Filters } from '@/components/ui';

import styles from './styles.module.scss';
import { DEFAULT_VALUE_ALL_COUNTRY } from '@/graphql/queries/cases';

const FILTERS_COUNTRY = [
  'Germany',
  'United Kingdom',
  'Denmark',
  'USA',
  'Italy',
];

type TProps = {
  tech: string[];
};

const FiltersCases = ({ tech }: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Filters title='Tech stack:' items={tech} paramKey='tech' />
      <Filters
        defaultValue={DEFAULT_VALUE_ALL_COUNTRY}
        onlyOnce={true}
        title='Country:'
        items={FILTERS_COUNTRY}
        paramKey='country'
      />
    </SectionLayout>
  );
};

export default FiltersCases;
