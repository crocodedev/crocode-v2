import {
  FiltersCases,
  Hero,
  Cases as SectionCases,
  Subscribe,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'cases',
  },
};

const CasesPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <FiltersCases />
      <SectionCases />
      <Subscribe />
    </>
  );
};

export default CasesPage;
