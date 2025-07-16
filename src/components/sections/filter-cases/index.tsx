import { SectionLayout } from '@/components/sections';
import { Filters } from '@/components/ui';

import styles from './styles.module.scss';

type TProps = {
  tech: string[];
  countries: string[];
  setSelect: (country: string) => void;
  selectCountry: string[];
  setSelectTech: (tech: string) => void;
  selectTechnology: string[];
};

const FiltersCases = ({
  tech,
  countries,
  setSelect,
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
        setSelect={setSelect}
        select={selectCountry}
        title='Country:'
        items={countries}
      />
    </SectionLayout>
  );
};

export default FiltersCases;
