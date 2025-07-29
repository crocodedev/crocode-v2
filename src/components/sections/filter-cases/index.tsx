import { SectionLayout } from '@/components/sections';
import { Filters } from '@/components/ui';

import styles from './styles.module.scss';

type TProps = {
  tech: string[];
  countries: string[];
  setSelectCountry: (country: string) => void;
  selectCountry: string[];
  setSelectTech: (tech: string) => void;
  selectTechnology: string[];
};

const FiltersCases = ({
  tech,
  countries,
  setSelectCountry,
  selectCountry,
  setSelectTech,
  selectTechnology,
}: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Filters
        setSelect={setSelectTech}
        select={selectTechnology}
        title='Tech stack:'
        items={tech}
      />
      <Filters
        setSelect={setSelectCountry}
        select={selectCountry}
        title='Country:'
        items={countries}
      />
    </SectionLayout>
  );
};

export default FiltersCases;
